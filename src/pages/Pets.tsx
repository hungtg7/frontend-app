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
    dataIndex: 'pet_type',
    key: 'pet_type',
  },
];

const data: Pet[] = [
  {
    id: '1',
    name: 'John Brown',
    pet_type: 'New York No. 1 Lake Park',
  },
  {
    id: '2',
    name: 'Jim Green',
    pet_type: 'London No. 1 Lake Park',
  },
];


function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);

  const handleSuccess = (pet: Pet) => {
    setPets([...pets, { ...pet }]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const pets = await getAllPets();
      setPets(pets);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 p-5">
       <Table columns={columns} dataSource={data} /> 
    </div>
  );
}

export default Pets;
