include .env.local
GO_API_ROOT=$(shell pwd)/apps/api
FLEXROOT=$(shell pwd)


generate:
	cd $(GO_API_ROOT) &&	webrpc-gen -schema=server.ridl -target=golang -pkg=service -server -client -out=./internal/service/proto.gen.go

generate-ts:
	webrpc-gen -schema=server.ridl -target=typescript -client -out=../client/src/lib/generated/api.gen.ts

migrate:
	atlas schema apply \
  	--url ${DIRECT_URL} \
  	--dev-url ${DIRECT_URL} \
  	--to "file://internal/db/repository/schema.sql"

build-scripts:
	cd $(GO_API_ROOT) && go build -o ./bin/scripts/ ./cmd/scriptRunner/main.go 

seed:
	./bin/scripts/main -seed

logs:
	./bin/scripts/main -logs

nightly:
	cd $(GO_API_ROOT) && ./bin/scripts/main -nightly -config $(FLEXROOT)/config.yaml

sqlc:
	cd $(GO_API_ROOT) && sqlc generate