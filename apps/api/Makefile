generate:
	webrpc-gen -schema=server.ridl -target=golang -pkg=service -server -client -out=./internal/service/proto.gen.go

generate-ts:
	webrpc-gen -schema=server.ridl -target=typescript -client -out=../client/src/lib/generated/api.gen.ts
