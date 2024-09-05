package scripts

import (
	"api/internal/config"
	"api/internal/lib/icAuth"
	"api/internal/service"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type LinkObject struct {
	Href      string `json:"href"`
	SourcedId string `json:"sourcedId"`
	Type      string `json:"type"`
}

type ClassInfo struct {
	SourcedId        string       `json:"sourcedId"`
	Status           string       `json:"status"`
	DateLastModified string       `json:"dateLastModified"`
	Title            string       `json:"title"`
	ClassType        string       `json:"classType"`
	ClassCode        string       `json:"classCode"`
	Location         *string      `json:"location,omitempty"`
	Course           LinkObject   `json:"course"`
	School           LinkObject   `json:"school"`
	Terms            []LinkObject `json:"terms"`
	Periods          []string     `json:"periods"`
}

type ClassResponse struct {
	Classes []ClassInfo `json:"classes"`
}

var env = config.GetEnv()

type ChanResponse[T any] struct {
	data []*T
	err  error
}

func (s *Scripts) SyncClassrooms() {
	existingClasses := make(chan ChanResponse[service.ClassroomWithAvailable])
	ctx := context.Background()
	go func() {
		defer close(existingClasses)
		classes, err := s.classroomRepo.GetClassrooms(ctx)
		existingClasses <- ChanResponse[service.ClassroomWithAvailable]{data: classes, err: err}
	}()

}

func (s *Scripts) getClasses() (*ClassResponse, error) {
	token, err := icAuth.IcAuth(s.cache)
	if err != nil {
		return nil, err
	}
	client := &http.Client{
		Timeout: time.Second * 10,
	}
	req, err := http.NewRequest("GET", s.ICClassQuery(), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-XSRF-TOKEN", env.XSRF_TOKEN)
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	var res ClassResponse
	err = json.NewDecoder(resp.Body).Decode(&res)
	if err != nil {
		return nil, err
	}

	return &res, nil
}

func (s *Scripts) ICQuery() string {
	appName := env.ONEROSTER_APPNAME
	return fmt.Sprintf("https://mtdecloud2.infinitecampus.org/campus/api/oneroster/v1p2/%s/ims/oneroster/rostering/v1p2", appName)
}

func (s *Scripts) ICClassQuery() string {
	SourceID := env.LHS_SOURCE_ID
	return fmt.Sprintf("%s/schools/%s/classes?limit=1200", s.ICQuery(), SourceID)
}
