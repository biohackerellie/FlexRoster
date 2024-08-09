package requests

import (
	"context"
	"encoding/json"
	"fmt"
	"sync"
	"time"

	arrays "api/internal/lib/arrays"
	"api/internal/lib/helpers"
	stringHelpers "api/internal/lib/strings"
	"api/internal/service"
)

func (a *Adapter) GetRequests(ctx context.Context, userId string) ([]*service.Request, error) {
	var requests []*service.Request
	res, err := a.cache.Get(stringHelpers.CacheKey("requests", userId))
	if err == nil {
		err = json.Unmarshal([]byte(res), &requests)
		if err != nil {
			a.log.Error("Error unmarshalling requests from cache")
		}
	} else {
		requests, err := a.requests.GetRequests(ctx, userId)
		if err != nil {
			a.log.Error("Error getting requests from db", "err", err)
		}
		requestsString, _ := json.Marshal(requests)
		err = a.cache.Set(stringHelpers.CacheKey("requests", userId), requestsString, 10*time.Minute)
		if err != nil {
			a.log.Error("Error setting requests in cache", "err", err)
		}
	}
	return requests, nil
}

func (a *Adapter) GetAllRequests(ctx context.Context) ([]*service.Request, error) {
	var requests []*service.Request
	res, err := a.cache.Get(stringHelpers.CacheKey("allRequests", "cache"))
	if err == nil {
		err = json.Unmarshal([]byte(res), &requests)
		if err != nil {
			a.log.Error("Error unmarshalling requests from cache")
		}
	} else {
		requests, err := a.requests.GetAllRequests(ctx)
		if err != nil {
			a.log.Error("Error getting requests from db", "err", err)
		}
		requestsString, _ := json.Marshal(requests)
		err = a.cache.Set(stringHelpers.CacheKey("allRequests", "cache"), requestsString, 10*time.Minute)
		if err != nil {
			a.log.Error("Error setting requests in cache", "err", err)
		}
	}
	return requests, nil
}

var today = time.Now().Format("2006-01-02")

func (a *Adapter) NewRequest(ctx context.Context, studentName string, studentID string, requestStatus *service.RequestStatus, dateRequested time.Time, newTeacher string, newTeacherName string, currentTeacher string, currentTeacherName string) error {
	var requests []*service.Request
	status := service.RequestStatus_pending
}
