import Layout from "@/components/common/layout";
import CompraSection from "@/components/pedido/historial/Compra";
import { getClient } from "@/services/apollo/client";
import { GET_PEDIDO } from "@/services/apollo/queries/pedido";

export default function Compra() {
  return (
    <>
      <Layout>
        <CompraSection />
      </Layout>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { data, error } = await getClient(context).query({
//     query: GET_PEDIDO,
//     variables: {
//       id: Number.parseInt(context.params.id),
//     },
//   });

//   return { props: { pedido: data.pedido } };
// }
