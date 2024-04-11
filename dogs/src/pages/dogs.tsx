import React from "react";
import { GetServerSidePropsContext } from "next";

import { DogsResponse } from "@/app/types/dogs";
import { BASE_URL } from "@/app/constants/genericConstants";
import { RandomDogs } from "@/app/module/RandomDogs/RandomDogs";
import { API_ROUTES } from "@/app/constants/apiRoutes";
import Layout from "@/app/components/Layout/Layout";

interface Props {
  dogs: DogsResponse;
}
const Dogs: React.FC<Props> = ({ dogs }) => {
  return (
    <Layout>
      <RandomDogs dogsData={dogs} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const url = BASE_URL + API_ROUTES.RANDOM_BREEDS;
    const res = await fetch(url);
    const dogs = await res.json();
    return {
      props: {
        dogs,
      },
    };
  } catch (e) {
    console.log(e);
    // also we can send to logger like sentry or kibana
  }
}

export default Dogs;
