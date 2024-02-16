import PedidosSection from "@/components/admin/pedidos/Pedidos";
import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";

export default function Pedidos() {
  return (
    <>
      <Layout>
        <PedidosSection />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
