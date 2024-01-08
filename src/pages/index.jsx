import Layout from "@/components/common/layout";
import Destacados from "@/components/home/destacados";
import Faq from "@/components/home/faq";
import Formulario from "@/components/home/formulario";
import Recientes from "@/components/home/recientes";
import client from "@/services/apollo/client";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";
import { NetworkStatus, useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function Home({ funkos }) {
  // const { data, error, loading } = useQuery(GET_PRODUCTOS);
  // useEffect(() => {
  //   console.log(data);
  //   console.log(error);
  //   console.log(loading);
  // }, [data, error, loading]);

  return (
    <Layout>
      <Destacados />
      <Recientes funkos={funkos} />
      <Faq />
      <Formulario />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_PRODUCTOS,
    variables: {
      // input: {},
    },
  });

  return { props: { funkos: data.productos } };
}
