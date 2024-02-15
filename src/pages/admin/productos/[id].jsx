import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";
import { useRouter } from "next/router";

export default function Producto() {
  const router = useRouter();

  return (
    <>
      <Layout>Producto: {router.query.id}</Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
