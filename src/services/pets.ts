export type PetJson = {
    id: string;
    name: string;
    pet_type: string;
  };

export type Response = {
    total: number
    pet: PetJson[]
}
  
  type Query = {
    filters: Array<{ field: string; operator: string; value: string }>;
  };
  
//   const post = async (url: string, body: Record<string, unknown>) => {
//     await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({ ...body }),
//       headers: { 'Content-Type': 'application/json' }
//     });
//   };
  
  const get = async (url: string) => {
    return await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
  };
  
//   export const createCourse = (course: Course) => post('http://localhost:3000/courses', course);
  
  export const getAllPets = async (limit: number, offset: number) => {
    const url = `http://localhost:9090/pet/v1/getall?limit=${limit}&offset=${offset}`
    const response = await get(url);
    return (await response.json() as Response);
  };

