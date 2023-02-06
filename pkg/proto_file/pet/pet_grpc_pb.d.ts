// package: pet.v1
// file: proto_file/pet/pet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_file_pet_pet_pb from "../../proto_file/pet/pet_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IPetStoreService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPet: IPetStoreService_IGetPet;
    getAllPet: IPetStoreService_IGetAllPet;
    createPet: IPetStoreService_ICreatePet;
    deletePet: IPetStoreService_IDeletePet;
}

interface IPetStoreService_IGetPet extends grpc.MethodDefinition<proto_file_pet_pet_pb.GetPetRequest, proto_file_pet_pet_pb.GetPetResponse> {
    path: "/pet.v1.PetStore/GetPet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_file_pet_pet_pb.GetPetRequest>;
    requestDeserialize: grpc.deserialize<proto_file_pet_pet_pb.GetPetRequest>;
    responseSerialize: grpc.serialize<proto_file_pet_pet_pb.GetPetResponse>;
    responseDeserialize: grpc.deserialize<proto_file_pet_pet_pb.GetPetResponse>;
}
interface IPetStoreService_IGetAllPet extends grpc.MethodDefinition<proto_file_pet_pet_pb.GetAllPetRequest, proto_file_pet_pet_pb.GetAllPetResponse> {
    path: "/pet.v1.PetStore/GetAllPet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_file_pet_pet_pb.GetAllPetRequest>;
    requestDeserialize: grpc.deserialize<proto_file_pet_pet_pb.GetAllPetRequest>;
    responseSerialize: grpc.serialize<proto_file_pet_pet_pb.GetAllPetResponse>;
    responseDeserialize: grpc.deserialize<proto_file_pet_pet_pb.GetAllPetResponse>;
}
interface IPetStoreService_ICreatePet extends grpc.MethodDefinition<proto_file_pet_pet_pb.CreatePetRequest, proto_file_pet_pet_pb.CreatePetResponse> {
    path: "/pet.v1.PetStore/CreatePet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_file_pet_pet_pb.CreatePetRequest>;
    requestDeserialize: grpc.deserialize<proto_file_pet_pet_pb.CreatePetRequest>;
    responseSerialize: grpc.serialize<proto_file_pet_pet_pb.CreatePetResponse>;
    responseDeserialize: grpc.deserialize<proto_file_pet_pet_pb.CreatePetResponse>;
}
interface IPetStoreService_IDeletePet extends grpc.MethodDefinition<proto_file_pet_pet_pb.DeletePetRequest, proto_file_pet_pet_pb.DeletePetResponse> {
    path: "/pet.v1.PetStore/DeletePet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_file_pet_pet_pb.DeletePetRequest>;
    requestDeserialize: grpc.deserialize<proto_file_pet_pet_pb.DeletePetRequest>;
    responseSerialize: grpc.serialize<proto_file_pet_pet_pb.DeletePetResponse>;
    responseDeserialize: grpc.deserialize<proto_file_pet_pet_pb.DeletePetResponse>;
}

export const PetStoreService: IPetStoreService;

export interface IPetStoreServer {
    getPet: grpc.handleUnaryCall<proto_file_pet_pet_pb.GetPetRequest, proto_file_pet_pet_pb.GetPetResponse>;
    getAllPet: grpc.handleUnaryCall<proto_file_pet_pet_pb.GetAllPetRequest, proto_file_pet_pet_pb.GetAllPetResponse>;
    createPet: grpc.handleUnaryCall<proto_file_pet_pet_pb.CreatePetRequest, proto_file_pet_pet_pb.CreatePetResponse>;
    deletePet: grpc.handleUnaryCall<proto_file_pet_pet_pb.DeletePetRequest, proto_file_pet_pet_pb.DeletePetResponse>;
}

export interface IPetStoreClient {
    getPet(request: proto_file_pet_pet_pb.GetPetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetPetResponse) => void): grpc.ClientUnaryCall;
    getPet(request: proto_file_pet_pet_pb.GetPetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetPetResponse) => void): grpc.ClientUnaryCall;
    getPet(request: proto_file_pet_pet_pb.GetPetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetPetResponse) => void): grpc.ClientUnaryCall;
    getAllPet(request: proto_file_pet_pet_pb.GetAllPetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetAllPetResponse) => void): grpc.ClientUnaryCall;
    getAllPet(request: proto_file_pet_pet_pb.GetAllPetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetAllPetResponse) => void): grpc.ClientUnaryCall;
    getAllPet(request: proto_file_pet_pet_pb.GetAllPetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetAllPetResponse) => void): grpc.ClientUnaryCall;
    createPet(request: proto_file_pet_pet_pb.CreatePetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.CreatePetResponse) => void): grpc.ClientUnaryCall;
    createPet(request: proto_file_pet_pet_pb.CreatePetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.CreatePetResponse) => void): grpc.ClientUnaryCall;
    createPet(request: proto_file_pet_pet_pb.CreatePetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.CreatePetResponse) => void): grpc.ClientUnaryCall;
    deletePet(request: proto_file_pet_pet_pb.DeletePetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.DeletePetResponse) => void): grpc.ClientUnaryCall;
    deletePet(request: proto_file_pet_pet_pb.DeletePetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.DeletePetResponse) => void): grpc.ClientUnaryCall;
    deletePet(request: proto_file_pet_pet_pb.DeletePetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.DeletePetResponse) => void): grpc.ClientUnaryCall;
}

export class PetStoreClient extends grpc.Client implements IPetStoreClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPet(request: proto_file_pet_pet_pb.GetPetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetPetResponse) => void): grpc.ClientUnaryCall;
    public getPet(request: proto_file_pet_pet_pb.GetPetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetPetResponse) => void): grpc.ClientUnaryCall;
    public getPet(request: proto_file_pet_pet_pb.GetPetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetPetResponse) => void): grpc.ClientUnaryCall;
    public getAllPet(request: proto_file_pet_pet_pb.GetAllPetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetAllPetResponse) => void): grpc.ClientUnaryCall;
    public getAllPet(request: proto_file_pet_pet_pb.GetAllPetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetAllPetResponse) => void): grpc.ClientUnaryCall;
    public getAllPet(request: proto_file_pet_pet_pb.GetAllPetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.GetAllPetResponse) => void): grpc.ClientUnaryCall;
    public createPet(request: proto_file_pet_pet_pb.CreatePetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.CreatePetResponse) => void): grpc.ClientUnaryCall;
    public createPet(request: proto_file_pet_pet_pb.CreatePetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.CreatePetResponse) => void): grpc.ClientUnaryCall;
    public createPet(request: proto_file_pet_pet_pb.CreatePetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.CreatePetResponse) => void): grpc.ClientUnaryCall;
    public deletePet(request: proto_file_pet_pet_pb.DeletePetRequest, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.DeletePetResponse) => void): grpc.ClientUnaryCall;
    public deletePet(request: proto_file_pet_pet_pb.DeletePetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.DeletePetResponse) => void): grpc.ClientUnaryCall;
    public deletePet(request: proto_file_pet_pet_pb.DeletePetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_file_pet_pet_pb.DeletePetResponse) => void): grpc.ClientUnaryCall;
}
