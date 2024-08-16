package redis

import (
	"context"
	"fmt"
	"time"

	"api/internal/config"

	"github.com/redis/go-redis/v9"
)

type Cache interface {
	Set(key string, value interface{}, expires time.Duration) error
	Get(key string) (string, error)
	Clear(key string) error
}

type RClient struct {
	Redis  *redis.ClusterClient
	ctx    context.Context
	cache  Cache
	errors chan error
}

func NewRedis() *RClient {
	var (
		redisHost1 = config.GetEnv().REDIS_HOST1 + ":" + config.GetEnv().REDIS_PORT
		redisHost2 = config.GetEnv().REDIS_HOST2 + ":" + config.GetEnv().REDIS_PORT
		redisHost3 = config.GetEnv().REDIS_HOST3 + ":" + config.GetEnv().REDIS_PORT
	)
	ctx := context.Background()
	rdb := redis.NewFailoverClusterClient(&redis.FailoverOptions{
		MasterName:    "mymaster",
		SentinelAddrs: []string{redisHost1, redisHost2, redisHost3},
	})

	if err := rdb.Ping(ctx).Err(); err != nil {
		return &RClient{
			Redis:  nil,
			ctx:    ctx,
			cache:  nil,
			errors: make(chan error, 1),
		}
	}
	return &RClient{
		Redis: rdb,
		ctx:   ctx,
	}
}

func (r *RClient) Set(key string, value interface{}, expires time.Duration) error {
	return r.Redis.Set(r.ctx, key, value, expires).Err()
}

func (r *RClient) Get(key string) (string, error) {
	val, err := r.Redis.Get(r.ctx, key).Result()
	if err == redis.Nil {
		return "", err
	} else if err != nil {
		return "", fmt.Errorf("error getting key: %w", err)
	}
	return val, nil
}

func (r *RClient) Clear(key string) error {
	return r.Redis.Del(r.ctx, key).Err()
}

func (r *RClient) ReadStream(group string, consumer string, count int64, block time.Duration, streams ...string) ([]redis.XStream, error) {
	return r.Redis.XReadGroup(r.ctx, &redis.XReadGroupArgs{
		Group:    group,
		Consumer: consumer,
		Streams:  streams,
		Count:    count,
		Block:    block,
	}).Result()
}

func (r *RClient) XAdd(stream string, values ...*redis.XMessage) (string, error) {
	return r.Redis.XAdd(r.ctx, &redis.XAddArgs{
		Stream: stream,
		Values: values,
	}).Result()
}

func (r *RClient) XRange(stream, start, stop string) ([]redis.XMessage, error) {
	return r.Redis.XRange(r.ctx, stream, start, stop).Result()
}
