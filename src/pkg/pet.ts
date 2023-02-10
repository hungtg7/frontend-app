/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

/** PetType represents the different types of pets in the pet store. */
export enum PetType {
  PET_TYPE_UNSPECIFIED = 0,
  PET_TYPE_CAT = 1,
  PET_TYPE_DOG = 2,
  PET_TYPE_SNAKE = 3,
  PET_TYPE_HAMSTER = 4,
  UNRECOGNIZED = -1,
}

export function petTypeFromJSON(object: any): PetType {
  switch (object) {
    case 0:
    case "PET_TYPE_UNSPECIFIED":
      return PetType.PET_TYPE_UNSPECIFIED;
    case 1:
    case "PET_TYPE_CAT":
      return PetType.PET_TYPE_CAT;
    case 2:
    case "PET_TYPE_DOG":
      return PetType.PET_TYPE_DOG;
    case 3:
    case "PET_TYPE_SNAKE":
      return PetType.PET_TYPE_SNAKE;
    case 4:
    case "PET_TYPE_HAMSTER":
      return PetType.PET_TYPE_HAMSTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PetType.UNRECOGNIZED;
  }
}

export function petTypeToJSON(object: PetType): string {
  switch (object) {
    case PetType.PET_TYPE_UNSPECIFIED:
      return "PET_TYPE_UNSPECIFIED";
    case PetType.PET_TYPE_CAT:
      return "PET_TYPE_CAT";
    case PetType.PET_TYPE_DOG:
      return "PET_TYPE_DOG";
    case PetType.PET_TYPE_SNAKE:
      return "PET_TYPE_SNAKE";
    case PetType.PET_TYPE_HAMSTER:
      return "PET_TYPE_HAMSTER";
    case PetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Pet represents a pet in the pet store. */
export interface Pet {
  petType: string;
  id: number;
  name: string;
  createdAt?: Date;
}

export interface GetPetRequest {
  petId: string;
}

export interface GetAllPetRequest {
}

export interface GetPetResponse {
  pet?: Pet;
}

export interface GetAllPetResponse {
  pet: Pet[];
}

export interface CreatePetRequest {
  petType: PetType;
  name: string;
}

export interface CreatePetResponse {
  code: number;
}

export interface DeletePetRequest {
  petID: string;
}

export interface DeletePetResponse {
}

function createBasePet(): Pet {
  return { petType: "", id: 0, name: "", createdAt: undefined };
}

export const Pet = {
  encode(message: Pet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.petType !== "") {
      writer.uint32(10).string(message.petType);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.petType = reader.string();
          break;
        case 2:
          message.id = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pet {
    return {
      petType: isSet(object.petType) ? String(object.petType) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: Pet): unknown {
    const obj: any = {};
    message.petType !== undefined && (obj.petType = message.petType);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Pet>, I>>(base?: I): Pet {
    return Pet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Pet>, I>>(object: I): Pet {
    const message = createBasePet();
    message.petType = object.petType ?? "";
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

function createBaseGetPetRequest(): GetPetRequest {
  return { petId: "" };
}

export const GetPetRequest = {
  encode(message: GetPetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.petId !== "") {
      writer.uint32(10).string(message.petId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.petId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPetRequest {
    return { petId: isSet(object.petId) ? String(object.petId) : "" };
  },

  toJSON(message: GetPetRequest): unknown {
    const obj: any = {};
    message.petId !== undefined && (obj.petId = message.petId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPetRequest>, I>>(base?: I): GetPetRequest {
    return GetPetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPetRequest>, I>>(object: I): GetPetRequest {
    const message = createBaseGetPetRequest();
    message.petId = object.petId ?? "";
    return message;
  },
};

function createBaseGetAllPetRequest(): GetAllPetRequest {
  return {};
}

export const GetAllPetRequest = {
  encode(_: GetAllPetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllPetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllPetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetAllPetRequest {
    return {};
  },

  toJSON(_: GetAllPetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllPetRequest>, I>>(base?: I): GetAllPetRequest {
    return GetAllPetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllPetRequest>, I>>(_: I): GetAllPetRequest {
    const message = createBaseGetAllPetRequest();
    return message;
  },
};

function createBaseGetPetResponse(): GetPetResponse {
  return { pet: undefined };
}

export const GetPetResponse = {
  encode(message: GetPetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pet !== undefined) {
      Pet.encode(message.pet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pet = Pet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPetResponse {
    return { pet: isSet(object.pet) ? Pet.fromJSON(object.pet) : undefined };
  },

  toJSON(message: GetPetResponse): unknown {
    const obj: any = {};
    message.pet !== undefined && (obj.pet = message.pet ? Pet.toJSON(message.pet) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPetResponse>, I>>(base?: I): GetPetResponse {
    return GetPetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPetResponse>, I>>(object: I): GetPetResponse {
    const message = createBaseGetPetResponse();
    message.pet = (object.pet !== undefined && object.pet !== null) ? Pet.fromPartial(object.pet) : undefined;
    return message;
  },
};

function createBaseGetAllPetResponse(): GetAllPetResponse {
  return { pet: [] };
}

export const GetAllPetResponse = {
  encode(message: GetAllPetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pet) {
      Pet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllPetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllPetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pet.push(Pet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllPetResponse {
    return { pet: Array.isArray(object?.pet) ? object.pet.map((e: any) => Pet.fromJSON(e)) : [] };
  },

  toJSON(message: GetAllPetResponse): unknown {
    const obj: any = {};
    if (message.pet) {
      obj.pet = message.pet.map((e) => e ? Pet.toJSON(e) : undefined);
    } else {
      obj.pet = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllPetResponse>, I>>(base?: I): GetAllPetResponse {
    return GetAllPetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllPetResponse>, I>>(object: I): GetAllPetResponse {
    const message = createBaseGetAllPetResponse();
    message.pet = object.pet?.map((e) => Pet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePetRequest(): CreatePetRequest {
  return { petType: 0, name: "" };
}

export const CreatePetRequest = {
  encode(message: CreatePetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.petType !== 0) {
      writer.uint32(8).int32(message.petType);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.petType = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePetRequest {
    return {
      petType: isSet(object.petType) ? petTypeFromJSON(object.petType) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CreatePetRequest): unknown {
    const obj: any = {};
    message.petType !== undefined && (obj.petType = petTypeToJSON(message.petType));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePetRequest>, I>>(base?: I): CreatePetRequest {
    return CreatePetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePetRequest>, I>>(object: I): CreatePetRequest {
    const message = createBaseCreatePetRequest();
    message.petType = object.petType ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreatePetResponse(): CreatePetResponse {
  return { code: 0 };
}

export const CreatePetResponse = {
  encode(message: CreatePetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePetResponse {
    return { code: isSet(object.code) ? Number(object.code) : 0 };
  },

  toJSON(message: CreatePetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePetResponse>, I>>(base?: I): CreatePetResponse {
    return CreatePetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePetResponse>, I>>(object: I): CreatePetResponse {
    const message = createBaseCreatePetResponse();
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseDeletePetRequest(): DeletePetRequest {
  return { petID: "" };
}

export const DeletePetRequest = {
  encode(message: DeletePetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.petID !== "") {
      writer.uint32(10).string(message.petID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.petID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePetRequest {
    return { petID: isSet(object.petID) ? String(object.petID) : "" };
  },

  toJSON(message: DeletePetRequest): unknown {
    const obj: any = {};
    message.petID !== undefined && (obj.petID = message.petID);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePetRequest>, I>>(base?: I): DeletePetRequest {
    return DeletePetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePetRequest>, I>>(object: I): DeletePetRequest {
    const message = createBaseDeletePetRequest();
    message.petID = object.petID ?? "";
    return message;
  },
};

function createBaseDeletePetResponse(): DeletePetResponse {
  return {};
}

export const DeletePetResponse = {
  encode(_: DeletePetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeletePetResponse {
    return {};
  },

  toJSON(_: DeletePetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePetResponse>, I>>(base?: I): DeletePetResponse {
    return DeletePetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePetResponse>, I>>(_: I): DeletePetResponse {
    const message = createBaseDeletePetResponse();
    return message;
  },
};

export type PetStoreService = typeof PetStoreService;
export const PetStoreService = {
  getPet: {
    path: "/pet.v1.PetStore/GetPet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPetRequest) => Buffer.from(GetPetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPetRequest.decode(value),
    responseSerialize: (value: GetPetResponse) => Buffer.from(GetPetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetPetResponse.decode(value),
  },
  getAllPet: {
    path: "/pet.v1.PetStore/GetAllPet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllPetRequest) => Buffer.from(GetAllPetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllPetRequest.decode(value),
    responseSerialize: (value: GetAllPetResponse) => Buffer.from(GetAllPetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllPetResponse.decode(value),
  },
  createPet: {
    path: "/pet.v1.PetStore/CreatePet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePetRequest) => Buffer.from(CreatePetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePetRequest.decode(value),
    responseSerialize: (value: CreatePetResponse) => Buffer.from(CreatePetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreatePetResponse.decode(value),
  },
  deletePet: {
    path: "/pet.v1.PetStore/DeletePet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeletePetRequest) => Buffer.from(DeletePetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeletePetRequest.decode(value),
    responseSerialize: (value: DeletePetResponse) => Buffer.from(DeletePetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeletePetResponse.decode(value),
  },
} as const;

export interface PetStoreServer extends UntypedServiceImplementation {
  getPet: handleUnaryCall<GetPetRequest, GetPetResponse>;
  getAllPet: handleUnaryCall<GetAllPetRequest, GetAllPetResponse>;
  createPet: handleUnaryCall<CreatePetRequest, CreatePetResponse>;
  deletePet: handleUnaryCall<DeletePetRequest, DeletePetResponse>;
}

export interface PetStoreClient extends Client {
  getPet(
    request: GetPetRequest,
    callback: (error: ServiceError | null, response: GetPetResponse) => void,
  ): ClientUnaryCall;
  getPet(
    request: GetPetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetPetResponse) => void,
  ): ClientUnaryCall;
  getPet(
    request: GetPetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetPetResponse) => void,
  ): ClientUnaryCall;
  getAllPet(
    request: GetAllPetRequest,
    callback: (error: ServiceError | null, response: GetAllPetResponse) => void,
  ): ClientUnaryCall;
  getAllPet(
    request: GetAllPetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllPetResponse) => void,
  ): ClientUnaryCall;
  getAllPet(
    request: GetAllPetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllPetResponse) => void,
  ): ClientUnaryCall;
  createPet(
    request: CreatePetRequest,
    callback: (error: ServiceError | null, response: CreatePetResponse) => void,
  ): ClientUnaryCall;
  createPet(
    request: CreatePetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreatePetResponse) => void,
  ): ClientUnaryCall;
  createPet(
    request: CreatePetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreatePetResponse) => void,
  ): ClientUnaryCall;
  deletePet(
    request: DeletePetRequest,
    callback: (error: ServiceError | null, response: DeletePetResponse) => void,
  ): ClientUnaryCall;
  deletePet(
    request: DeletePetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeletePetResponse) => void,
  ): ClientUnaryCall;
  deletePet(
    request: DeletePetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeletePetResponse) => void,
  ): ClientUnaryCall;
}

export const PetStoreClient = makeGenericClientConstructor(PetStoreService, "pet.v1.PetStore") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PetStoreClient;
  service: typeof PetStoreService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
