import Layout from "@/components/common/layout";
import ProductoLayout from "@/components/producto/layout";
import Detalle from "@/components/producto/detalle";
import Relacionados from "@/components/producto/relacionados";
import Comentarios from "@/components/producto/comentarios";
import { useRouter } from "next/router";

export default function DetalleProducto() {
  const router = useRouter();

  return (
    <>
      <Layout>
        <ProductoLayout>
          <Detalle />
          <Relacionados />
          <Comentarios />
        </ProductoLayout>
      </Layout>
    </>
  );
}
