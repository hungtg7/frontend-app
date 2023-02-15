import { useEffect, useState } from 'react';
import { Pet, getAllPets } from '../services/pets';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<Pet> = [
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
    dataIndex: 'petType',
    key: 'pet_type',
  },
];

function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllPets();
      setPets(resp.pet);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 p-5">
       <Table columns={columns} dataSource={pets}/> 
    </div>
  );
}

export default Pets;
