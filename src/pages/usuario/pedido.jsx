import Layout from "@/components/common/layout";
import NuevoPedidoSection from "@/components/pedido/nuevo/NuevoPedido";
import { redirectRol } from "@/utils/redirect-rol";

export default function NuevoPedido() {
  return (
    <>
      <Layout>
        <NuevoPedidoSection />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["CLIENTE"]),
  };
}
