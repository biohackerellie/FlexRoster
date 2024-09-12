package scripts

import (
	"api/internal/lib/arrays"
	"api/internal/service"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"sync"
	"time"
)

func (s *Scripts) AzureUsers() error {

	var (
		secretaries    = s.config.Secretaries
		staffLink      = createQueryString(s.config.AzureTeacherGroup)
		otherUsersLink = createQueryString(s.config.AzureOtherUsersGroup)
		ctx            = context.Background()
	)

	token, err := s.azureAuth()
	if err != nil {
		s.log.Error("error getting azure token")
		return err
	}

	type fetchType int

	const (
		staffGroup fetchType = iota
		otherGroup
	)

	type result struct {
		data []AzureUser
		err  error
		kind fetchType
	}

	results := make(chan result)
	var wg sync.WaitGroup

	wg.Add(2)

	go func() {
		defer wg.Done()
		data, err := s.fetchAllUsers(staffLink, token)
		s.log.Debug("users fetched: ", "info", data)
		results <- result{data, err, staffGroup}
	}()
	go func() {
		defer wg.Done()
		data, err := s.fetchAllUsers(otherUsersLink, token)
		results <- result{data, err, otherGroup}
	}()

	go func() {
		wg.Wait()
		close(results)
	}()

	var (
		staffData      []AzureUser
		otherUsersData []AzureUser
	)
	for i := 0; i < 2; i++ {
		res := <-results
		if res.err != nil {
			return res.err
		}
		switch res.kind {
		case staffGroup:
			staffData = res.data
		case otherGroup:
			otherUsersData = res.data
		}
	}
	existingTeachers, err := s.userRepo.GetAllTeachers(ctx)
	if err != nil {
		return err
	}
	existingTeacherIds := arrays.EZSet(existingTeachers, func(user *service.User) string {
		return user.Id
	})

	newTeachers := arrays.EZFilter(staffData, func(user AzureUser) bool {
		_, ok := existingTeacherIds[user.ID]
		return !ok
	})
	otherTeachers := arrays.EZFilter(otherUsersData, func(user AzureUser) bool {
		_, ok := existingTeacherIds[user.ID]
		return !ok
	})
	if len(otherTeachers) > 0 {
		newTeachers = append(newTeachers, otherTeachers...)
	}
	usersToInsert := make([]*service.User, 0)
	for _, teacher := range newTeachers {
		isSecretary := arrays.EZContains(secretaries, teacher.UserPrincipalName)
		if isSecretary {
			usersToInsert = append(usersToInsert, &service.User{
				Id:    teacher.ID,
				Name:  teacher.DisplayName,
				Email: teacher.UserPrincipalName,
				Role:  "secretary",
			})
		} else {
			usersToInsert = append(usersToInsert, &service.User{
				Id:    teacher.ID,
				Name:  teacher.DisplayName,
				Email: teacher.UserPrincipalName,
				Role:  "teacher",
			})
		}
	}
	if len(usersToInsert) > 0 {
		err = s.userRepo.CreateUserTx(ctx, usersToInsert)
		if err != nil {
			return err
		}
	}

	return nil
}

func (s *Scripts) fetchAllUsers(link string, token string) ([]AzureUser, error) {
	var users []AzureUser

	for link != "" {
		s.log.Debug("Fetching users", "link", link)
		req, err := http.NewRequest("GET", link, nil)
		if err != nil {
			s.log.Error("Error fetching users", "stage", "1")
			return nil, err
		}

		req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
		req.Header.Set("ConsistencyLevel", "eventual")

		client := &http.Client{}
		resp, err := client.Do(req)
		if err != nil {
			s.log.Error("Error fetching users", "stage", "2")
			return nil, err
		}
		defer resp.Body.Close()

		var res AzureResponse[AzureUser]
		err = json.NewDecoder(resp.Body).Decode(&res)
		if err != nil {
			s.log.Error("Error fetching users", "stage", "3")
			return nil, err
		}

		users = append(users, res.Value...)
		link = res.NextLink
		s.log.Debug("Next link", "link", link)
		s.log.Debug("Users", "users", users)
	}

	return users, nil
}

func (s *Scripts) azureAuth() (string, error) {
	token, err := s.cache.Get("azureToken")
	if err != nil {
		newToken, err := s.fetchNewToken()
		if err != nil {
			return "", err
		}
		expires := time.Duration(newToken.ExpiresIn) * time.Second
		s.cache.Set("azureToken", newToken.AccessToken, expires)
		return newToken.AccessToken, nil
	}
	return token, nil
}

type TokenResponse struct {
	AccessToken string `json:"access_token"`
	ExpiresIn   int    `json:"expires_in"`
}

func (s *Scripts) fetchNewToken() (TokenResponse, error) {
	data := url.Values{}
	data.Add("client_id", s.config.AzureADClientID)
	data.Add("scope", "https://graph.microsoft.com/.default")
	data.Add("client_secret", s.config.AzureADClientSecret)
	data.Add("grant_type", "client_credentials")
	requestUrl := fmt.Sprintf("https://login.microsoftonline.com/%s/oauth2/v2.0/token", s.config.AzureADTenantID)
	req, err := http.NewRequest("POST", requestUrl, bytes.NewBufferString(data.Encode()))

	if err != nil {
		s.log.Error("Error querying msGraph", "stage", "1")
		return TokenResponse{}, err
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		s.log.Error("Error querying msGraph", "stage", "2")
		return TokenResponse{}, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return TokenResponse{}, fmt.Errorf("Invalid status code: %d", resp.StatusCode)
	}
	var tokenResponse TokenResponse
	err = json.NewDecoder(resp.Body).Decode(&tokenResponse)
	if err != nil {
		s.log.Error("Error querying msGraph", "stage", "3")
		return TokenResponse{}, err
	}
	return tokenResponse, nil
}

func createQueryString(groupId string) string {
	query := url.Values{}
	query.Add("$count", "true")
	query.Add("$select", "id,displayName,userPrincipalName")
	query.Add("$filter", "accountEnabled eq true")
	url := fmt.Sprintf("https://graph.microsoft.com/v1.0/groups/%s/members?%s", groupId, query.Encode())
	return url
}
