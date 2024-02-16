import Layout from "@/components/common/layout";
import Destacados from "@/components/home/destacados";
import Faq from "@/components/home/faq";
import Formulario from "@/components/home/formulario";
import Recientes from "@/components/home/Recientes";
import { getClient } from "@/services/apollo/client";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";

export default function Home({ funkos }) {
  return (
    <Layout>
      <Destacados />
      <Recientes funkos={funkos} />
      <Faq />
      <Formulario />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { data } = await getClient(context).query({
    query: GET_PRODUCTOS,
    variables: {
      input: {},
    },
  });

  return { props: { funkos: data.productos } };
}
