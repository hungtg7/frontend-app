import * as grpc from '@grpc/grpc-js';
import { PetStoreClient, Pet, GetAllPetRequest } from '../pkg/pet';

export type PetJson = {
    id: string;
    name: string;
    pet_type: string;
  };  

export default function GetPets() {
    return new Promise<Pet[]>((resolve, reject) => {
      const client = new PetStoreClient("pet:10550/pet.v1.PetStore/GetAllPet", grpc.credentials.createInsecure())
      const req = GetAllPetRequest.create()

      client.getAllPet(req, (err, resp) => {
        if (err) reject(err);
        else {
            const pets = resp.pet
            resolve(pets)
        };
      });
    });
  };

  /* type Query = { */
  /*   filters: Array<{ field: string; operator: string; value: string }>; */
  /* }; */
  /* const get = async (url: string) => { */
  /*   return await fetch(url, { */
  /*     method: 'GET', */
  /*     headers: { 'Content-Type': 'application/json' } */
  /*   }); */
  /* }; */
  /* export const getAllPets = async () => { */
  /*   const client = new PetStoreClient("pet:10550/pet.v1.PetStore/GetAllPet", grpc.credentials.createInsecure()) */
  /*   const response = await client.getAllPet(new Empty(), (err, pet) => { */
  /*       if (err) { */
  /*           return err */
  /*       } */
  /*       return pet */
  /*   }); */
  /*   return (await response.json()) as Pet[]; */
  /* }; */

  /* export const searchCourses = async (query: Query) => { */
  /*   const filters = query.filters.map( */
  /*     (filter, index) => */
  /*       `filters[${index}][field]=${filter.field}&filters[${index}][operator]=${filter.operator}&filters[${index}][value]=${filter.value}` */
  /*   ); */
  /*  */
  /*   const params = filters.join('&'); */
  /*  */
  /*   const response = await get(`http://localhost:3000/pet?${params}`); */
  /*   return (await response.json()) as Pet[]; */
  /* }; */
