include .env.local
GO_API_ROOT=$(shell pwd)/apps/api
FLEXROOT=$(shell pwd)


generate:
	cd $(GO_API_ROOT) &&	webrpc-gen -schema=server.ridl -target=golang -pkg=service -server -client -out=./internal/service/proto.gen.go

generate-ts:
	webrpc-gen -schema=server.ridl -target=typescript -client -out=../client/src/lib/generated/api.gen.ts

migrate-apply:
	cd $(GO_API_ROOT) && \
	atlas schema apply \
  	--url ${DIRECT_URL} \
  	--dev-url ${DIRECT_URL} \
  	--to "file://internal/db/repository/schema.sql" \
		--auto-approve

migrate-generate:
	cd $(GO_API_ROOT) && \
	atlas schema diff  \
		--from "file://internal/db/migrations" \
		--to ${DIRECT_URL} \
  	--dev-url ${DIRECT_URL} 

migrate-inspect:
	cd $(GO_API_ROOT) && \
	atlas migrate hash \
		--dir "file://internal/db/migrations" 


build-scripts:
	cd $(GO_API_ROOT) &&  CGO_ENABLED=0 go build -o ./bin/scripts/flexscript ./cmd/scriptRunner/main.go

build-windows:
	cd $(GO_API_ROOT) &&  CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -o ./bin/flex.exe ./cmd/scriptRunner/main.go

build-cli:
	cd $(GO_API_ROOT) &&  CGO_ENABLED=0 go build -o ./bin/flex ./cmd/cli/main.go

cli:
	./apps/api/bin/flex --config $(FLEXROOT)/config.yaml config
seed:
	./bin/scripts/main -seed

logs:
	$(GO_API_ROOT)/bin/scripts/flexscript -logs 

nightly:
	cd $(GO_API_ROOT) && ./bin/scripts/main -nightly -config $(FLEXROOT)/config.yaml

sqlc:
	cd $(GO_API_ROOT) && sqlc generate
config:
	$(GO_API_ROOT)/bin/scripts/flexscript --init-config