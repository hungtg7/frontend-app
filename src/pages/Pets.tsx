import { useEffect, useState } from 'react';
import { PetJson, getAllPets } from '../services/pets';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<PetJson> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
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
  let tempOffset = 0
  
  const defaultLimit = 10
  const [pets, setPets] = useState<PetJson[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1)
  const [offset, setCurrentOffset] = useState(0)



  useEffect(() => {
    fetchPets(defaultLimit, currentPage);
  }, []);

  const fetchPets = async (limit: number, page: number) => {
    if (page < currentPage) {
      tempOffset = offset - ((currentPage - page)*limit)

    } else if (page > currentPage) {
      tempOffset = offset + ((page - currentPage)*limit)
    }
    const resp = await getAllPets(limit, tempOffset);

    setCurrentPage(page)
    setCurrentOffset(tempOffset)
    setPets(resp.pet);
    setTotalPages(resp.total);
  };

  return (
    <div className="container mx-auto px-4 p-5">
      <Table
        columns={columns}
        dataSource={pets}
        pagination={{
          pageSize: defaultLimit,
          total: totalPages,
          onChange: (page) => {
            fetchPets(defaultLimit, page);
          },
        }}
      ></Table>
    </div>
  );
}

export default Pets;
