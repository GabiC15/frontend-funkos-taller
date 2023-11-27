import Layout from "@/components/common/layout";
import { useRouter } from "next/router";

export default function Producto() {
  const router = useRouter();

  return (
    <>
      <Layout>Producto: {router.query.id}</Layout>
    </>
  );
}
