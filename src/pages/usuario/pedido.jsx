import Layout from "@/components/common/layout";
import NuevoPedidoSection from "@/components/pedido/nuevo/NuevoPedido";
import client from "@/services/apollo/client";
import { GET_CARRITO } from "@/services/apollo/queries/carrito";

export default function NuevoPedido({ carrito }) {
  return (
    <>
      <Layout>
        <NuevoPedidoSection carrito={carrito} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_CARRITO,
    variables: {
      id: 4,
    },
  });

  return { props: { carrito: data.carrito } };
}
