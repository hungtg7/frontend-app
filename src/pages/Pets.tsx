import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import CourseListing from '../components/course-listing/CourseListing';
// import NewCourseForm from '../components/new-course-form/NewCourseForm';
import PageContainer from '../components/page-container/PageContainer';
import PageSeparator from '../components/page-container/PageSeparator';
import { Pet, getAllPets } from '../services/pets';

function Pets() {
  const [alert, setAlert] = useState('');
  const [pets, setPets] = useState<Pet[]>([]);

  const handleSuccess = (pet: Pet) => {
    setPets([...pets, { ...pet }]);
    setAlert(`Felicidades, el curso ${pet.id} ha sido creado correctamente!`);
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
      <Helmet>
        <title>CodelyTV | Cursos</title>
      </Helmet>

      <PageContainer title="Cursos" alert={alert}>
        {/* <NewCourseForm
          onSuccess={handleSuccess}
          onError={() => setAlert('Lo siento, ha ocurrido un error al crear el curso')}
        /> */}

        <PageSeparator />

        <CourseListing pets={pets} onFilter={pets => setPets(pets)} />
      </PageContainer>
    </div>
  );
}

export default Pets;