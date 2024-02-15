import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";

export default function Productos() {
  return (
    <>
      <Layout>Productos</Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
