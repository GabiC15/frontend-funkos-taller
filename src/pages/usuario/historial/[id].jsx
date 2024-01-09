import Layout from "@/components/common/layout";
import CompraSection from "@/components/pedido/historial/Compra";
import { useRouter } from "next/router";

export default function Compra() {
  const router = useRouter();

  return (
    <>
      <Layout>
        <CompraSection />
      </Layout>
    </>
  );
}
