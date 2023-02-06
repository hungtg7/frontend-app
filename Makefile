generate:
	buf mod update
	buf build
	npm i protoc-gen-ts
	npm install grpc_tools_node_protoc_ts@latest --global
	buf generate

