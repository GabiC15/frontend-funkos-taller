import Layout from "@/components/common/layout";
import { useRouter } from "next/router";

export default function DetalleProducto() {
  const router = useRouter();

  return (
    <>
      <Layout>DetalleProducto: {router.query.id}</Layout>
    </>
  );
}
