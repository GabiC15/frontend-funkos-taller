import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";
import { useRouter } from "next/router";

export default function Pedido() {
  const router = useRouter();

  return (
    <>
      <Layout>Pedido: {router.query.id}</Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
