package redis

import (
	"context"
	"fmt"
	"time"

	"github.com/redis/rueidis"
)

type RClient struct {
	client rueidis.Client
}

func (r *RClient) Set(key string, value string, ctx context.Context) error {
	return r.client.Do(ctx, r.client.B().Set().Key(key).Value(value).Build()).Error()
}

func (r *RClient) Get(ctx context.Context, key string) (string, error) {
	res, err := r.client.Do(ctx, r.client.B().Get().Key(key).Build()).ToString()
	if err.Error() == "redis nil message" {
		return "", err
	} else if err != nil {
		return "", fmt.Errorf("error getting key: %w", err)
	}
	return res, nil
}

func (r *RClient) Clear(key string, ctx context.Context) error {
	return r.client.Do(ctx, r.client.B().Del().Key(key).Build()).Error()
}

type XReadGroupArgs struct {
	Group    string
	Consumer string
	Streams  []string
	Count    int64
	Block    time.Duration
}
