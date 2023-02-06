// package: pet.v1
// file: proto_file/pet/pet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Pet extends jspb.Message { 
    getPetType(): string;
    setPetType(value: string): Pet;
    getId(): number;
    setId(value: number): Pet;
    getName(): string;
    setName(value: string): Pet;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Pet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pet.AsObject;
    static toObject(includeInstance: boolean, msg: Pet): Pet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pet;
    static deserializeBinaryFromReader(message: Pet, reader: jspb.BinaryReader): Pet;
}

export namespace Pet {
    export type AsObject = {
        petType: string,
        id: number,
        name: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetPetRequest extends jspb.Message { 
    getPetId(): string;
    setPetId(value: string): GetPetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPetRequest): GetPetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPetRequest;
    static deserializeBinaryFromReader(message: GetPetRequest, reader: jspb.BinaryReader): GetPetRequest;
}

export namespace GetPetRequest {
    export type AsObject = {
        petId: string,
    }
}

export class GetAllPetRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPetRequest): GetAllPetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPetRequest;
    static deserializeBinaryFromReader(message: GetAllPetRequest, reader: jspb.BinaryReader): GetAllPetRequest;
}

export namespace GetAllPetRequest {
    export type AsObject = {
    }
}

export class GetPetResponse extends jspb.Message { 

    hasPet(): boolean;
    clearPet(): void;
    getPet(): Pet | undefined;
    setPet(value?: Pet): GetPetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPetResponse): GetPetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPetResponse;
    static deserializeBinaryFromReader(message: GetPetResponse, reader: jspb.BinaryReader): GetPetResponse;
}

export namespace GetPetResponse {
    export type AsObject = {
        pet?: Pet.AsObject,
    }
}

export class GetAllPetResponse extends jspb.Message { 
    clearPetList(): void;
    getPetList(): Array<Pet>;
    setPetList(value: Array<Pet>): GetAllPetResponse;
    addPet(value?: Pet, index?: number): Pet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllPetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllPetResponse): GetAllPetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllPetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllPetResponse;
    static deserializeBinaryFromReader(message: GetAllPetResponse, reader: jspb.BinaryReader): GetAllPetResponse;
}

export namespace GetAllPetResponse {
    export type AsObject = {
        petList: Array<Pet.AsObject>,
    }
}

export class CreatePetRequest extends jspb.Message { 
    getPetType(): PetType;
    setPetType(value: PetType): CreatePetRequest;
    getName(): string;
    setName(value: string): CreatePetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePetRequest): CreatePetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePetRequest;
    static deserializeBinaryFromReader(message: CreatePetRequest, reader: jspb.BinaryReader): CreatePetRequest;
}

export namespace CreatePetRequest {
    export type AsObject = {
        petType: PetType,
        name: string,
    }
}

export class CreatePetResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): CreatePetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePetResponse): CreatePetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePetResponse;
    static deserializeBinaryFromReader(message: CreatePetResponse, reader: jspb.BinaryReader): CreatePetResponse;
}

export namespace CreatePetResponse {
    export type AsObject = {
        code: number,
    }
}

export class DeletePetRequest extends jspb.Message { 
    getPetid(): string;
    setPetid(value: string): DeletePetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePetRequest): DeletePetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePetRequest;
    static deserializeBinaryFromReader(message: DeletePetRequest, reader: jspb.BinaryReader): DeletePetRequest;
}

export namespace DeletePetRequest {
    export type AsObject = {
        petid: string,
    }
}

export class DeletePetResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePetResponse): DeletePetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePetResponse;
    static deserializeBinaryFromReader(message: DeletePetResponse, reader: jspb.BinaryReader): DeletePetResponse;
}

export namespace DeletePetResponse {
    export type AsObject = {
    }
}

export enum PetType {
    PET_TYPE_UNSPECIFIED = 0,
    PET_TYPE_CAT = 1,
    PET_TYPE_DOG = 2,
    PET_TYPE_SNAKE = 3,
    PET_TYPE_HAMSTER = 4,
}
