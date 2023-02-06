import { useEffect, useState } from 'react';
import GetPets, { PetJson } from '../services/pets';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<PetJson> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    /* render: (text) => <a>{text}</a>, */
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'PetType',
    dataIndex: 'pet_type',
    key: 'pet_type',
  },
];
/**/
/* const data: Pet[] = [ */
/*   { */
/*     id: '1', */
/*     name: 'John Brown', */
/*     pet_type: 'New York No. 1 Lake Park', */
/*   }, */
/*   { */
/*     id: '2', */
/*     name: 'Jim Green', */
/*     pet_type: 'London No. 1 Lake Park', */
/*   }, */
/* ]; */


function Pets() {
  const [pets, setPets] = useState<PetJson[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const pets = await GetPets();
      setPets(pets);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 p-5">
       <Table columns={columns} dataSource={pets} /> 
    </div>
  );
}

export default Pets;
