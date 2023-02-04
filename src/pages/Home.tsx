import React from 'react';
import { Helmet } from 'react-helmet';
import PageContainer from '../components/page-container/PageContainer';

function Home() {
  return (
    <div className="container mx-auto px-4 p-5">
      <Helmet>
        <title>PetShop | Home</title>
      </Helmet>

      <PageContainer title="HOME">
        ¡Welcome to PetShop!
      </PageContainer>
    </div>
  );
}

export default Home;