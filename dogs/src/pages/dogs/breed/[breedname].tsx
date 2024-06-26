import React from 'react';
import { useRouter } from 'next/router';
import { BreedDogs } from '@/app/module/BreedDogs/BreedDogs';
import Layout from '@/app/components/Layout/Layout';

const DogByBreed: React.FC = () => {
  const router = useRouter();
  // get the breedname from the  dynamic url to show the images of that breed
  const { breedname } = router.query;

  return (
    <>
      {breedname && (
        <Layout>
          <BreedDogs dogBreed={breedname as string} />
        </Layout>
      )}
    </>
  );
};

export default DogByBreed;
