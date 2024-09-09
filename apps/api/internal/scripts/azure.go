package scripts

import (
	"api/internal/config"
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

type AzureResponse[T any] struct {
	Context  string `json:"@odata.context"`
	NextLink string `json:"@odata.nextLink"`
	Value    []T    `json:"value"`
}

type AzureUser struct {
	ID                string `json:"id"`
	DisplayName       string `json:"displayName"`
	UserPrincipalName string `json:"userPrincipalName"`
}

var Config = config.GetEnv()

func (s *Scripts) AzureUsers() error {

	var (
		secretaries    = Config.SECRETARIES
		staffLink      = createQueryString(Config.AZURE_TEACHER_GROUP)
		otherUsersLink = createQueryString(Config.AZURE_OTHERUSERS_GROUP)
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
		data, err := fetchAllUsers(staffLink, token)
		s.log.Debug(data)
		results <- result{data, err, staffGroup}
	}()
	go func() {
		defer wg.Done()
		data, err := fetchAllUsers(otherUsersLink, token)
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
	existingTeachers, err := s.userRepo.GetexistingTeachers(ctx)
	if err != nil {
		return err
	}
	existingTeacherIds := make(map[string]bool)
	s.log.Info("Existing teachers", "info", existingTeachers)
	secMap := make(map[string]bool)
	for _, id := range existingTeachers {
		existingTeacherIds[id] = true
	}
	for _, email := range secretaries {
		secMap[email] = true
	}

	newTeachers := make([]*service.User, 0)
	for _, user := range staffData {
		if _, exists := existingTeacherIds[user.ID]; !exists {
			role := "teacher"
			if _, exists := secMap[user.UserPrincipalName]; exists {
				role = "secretary"
			}
			newTeachers = append(newTeachers, &service.User{
				Id:    user.ID,
				Name:  user.DisplayName,
				Email: user.UserPrincipalName,
				Role:  role,
			})
		}
	}
	for _, user := range otherUsersData {
		if _, exists := existingTeacherIds[user.ID]; !exists {
			newTeachers = append(newTeachers, &service.User{
				Id:    user.ID,
				Name:  user.DisplayName,
				Email: user.UserPrincipalName,
				Role:  "teacher",
			})
		}
	}
	if len(newTeachers) > 0 {
		err = s.userRepo.CreateUserTx(ctx, newTeachers)
		if err != nil {
			return err
		}
		s.log.Info("New teachers added", "count", len(newTeachers))
	}

	return nil
}

func fetchAllUsers(link string, token string) ([]AzureUser, error) {
	var users []AzureUser

	for link != "" {
		req, err := http.NewRequest("GET", link, nil)
		if err != nil {
			return nil, err
		}

		req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
		req.Header.Set("ConsistencyLevel", "eventual")

		client := &http.Client{}
		resp, err := client.Do(req)
		if err != nil {
			return nil, err
		}
		defer resp.Body.Close()

		var res AzureResponse[AzureUser]
		err = json.NewDecoder(resp.Body).Decode(&res)
		if err != nil {
			return nil, err
		}

		users = append(users, res.Value...)
		link = res.NextLink
		fmt.Println(link)
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
	data.Add("client_id", Config.AZURE_AD_CLIENT_ID)
	data.Add("scope", "https://graph.microsoft.com/.default")
	data.Add("client_secret", Config.AZURE_AD_CLIENT_SECRET)
	data.Add("grant_type", "client_credentials")
	requestUrl := fmt.Sprintf("https://login.microsoftonline.com/%s/oauth2/v2.0/token", Config.AZURE_AD_TENANT_ID)
	s.log.Info("Fetching new token with client id", "info", requestUrl)
	req, err := http.NewRequest("POST", requestUrl, bytes.NewBufferString(data.Encode()))

	if err != nil {

		return TokenResponse{}, err
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		return TokenResponse{}, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return TokenResponse{}, fmt.Errorf("Invalid status code: %d", resp.StatusCode)
	}
	var tokenResponse TokenResponse
	err = json.NewDecoder(resp.Body).Decode(&tokenResponse)
	if err != nil {
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
