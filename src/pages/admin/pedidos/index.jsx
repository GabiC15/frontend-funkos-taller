import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";

export default function Pedidos() {
  return (
    <>
      <Layout>Pedidos</Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
