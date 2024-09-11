package scripts

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"time"
)

type ICTokenResponse struct {
	Access_token string `json:"access_token"`
	Expires_in   int    `json:"expires_in"`
}

func (s *Scripts) IcAuth() (string, error) {
	client := s.cache
	token, err := client.Get("icToken")

	if err == nil && token != "" {
		return token, nil
	}

	newToken, err := s.newToken()
	if err != nil {
		return "", err
	}
	err = client.Set("icToken", newToken.Access_token, time.Duration(newToken.Expires_in)*time.Second)
	if err != nil {
		fmt.Println("error setting token in redis", err)
	}
	return newToken.Access_token, nil
}

// Function to fetch new token from infinite campus
// Returns: [TokenResponse] and [error]
func (s *Scripts) newToken() (ICTokenResponse, error) {
	form := url.Values{}
	form.Add("grant_type", "client_credentials")
	form.Add("client_id", s.config.OnerosterClientID)
	form.Add("client_secret", s.config.OnerosterClientSecret)

	req, err := http.NewRequest("POST", "https://mtdecloud2.infinitecampus.org/campus/oauth2/token?appName=laurel", bytes.NewBufferString(form.Encode()))

	if err != nil {
		return ICTokenResponse{}, err
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return ICTokenResponse{}, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return ICTokenResponse{}, fmt.Errorf("error fetching token: %v", resp.Status)
	}
	var tokenResponse ICTokenResponse
	err = json.NewDecoder(resp.Body).Decode(&tokenResponse)
	if err != nil {
		return ICTokenResponse{}, err
	}
	return tokenResponse, nil
}

func IcQuery(appName string) string {
	return fmt.Sprintf("https://mtdecloud2.infinitecampus.org/campus/api/oneroster/v1p2/%s/ims/oneroster/rostering/v1p2", appName)
}

func IcStudentQuery(classId, appName string) string {
	queryString := IcQuery(appName)
	return fmt.Sprintf(queryString+"/classes/%s/students?limit=100&ext_basic=true", classId)
}

func IcClassQuery(IC_SSID, appName string) string {

	return fmt.Sprintf(IcQuery(appName)+"/schools/%s/classes?limit=1200", IC_SSID)
}
