import Layout from "@/components/common/layout";
import { useRouter } from "next/router";

export default function Pedido() {
  const router = useRouter();

  return (
    <>
      <Layout>Pedido: {router.query.id}</Layout>
    </>
  );
}
