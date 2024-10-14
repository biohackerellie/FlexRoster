package redis

import (
	"context"
	"fmt"
	"time"

	"github.com/redis/go-redis/v9"
)

type RClient struct {
	Redis *redis.Client
	ctx   context.Context
}

func NewRedis(client *redis.Client) *RClient {
	return &RClient{
		Redis: client,
		ctx:   context.Background(),
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

func (r *RClient) ZRange(key string) ([]string, error) {
	return r.Redis.ZRange(r.ctx, key, 0, -1).Result()
}

func (r *RClient) ZAdd(key string, members ...redis.Z) error {
	return r.Redis.ZAdd(r.ctx, key, members...).Err()
}

func (r *RClient) ReadStream(args *redis.XReadGroupArgs) ([]redis.XStream, error) {
	return r.Redis.XReadGroup(r.ctx, &redis.XReadGroupArgs{
		Group:    args.Group,
		Consumer: args.Consumer,
		Streams:  args.Streams,
		Count:    args.Count,
		Block:    args.Block,
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

func (r *RClient) XAck(stream string, consumer string, ids ...string) error {
	return r.Redis.XAck(r.ctx, stream, consumer, ids...).Err()
}

func (r *RClient) FlushAll() error {
	return r.Redis.FlushAll(r.ctx).Err()
}
