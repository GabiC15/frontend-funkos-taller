import Layout from "@/components/common/layout";
import ProductoLayout from "@/components/producto/layout";
import Detalle from "@/components/producto/detalle";
import Relacionados from "@/components/producto/relacionados";
import Comentarios from "@/components/producto/comentarios";
import { useRouter } from "next/router";
import client from "@/services/apollo/client";
import {
  GET_PRODUCTO,
  GET_PRODUCTOS,
} from "@/services/apollo/queries/producto";

export default function DetalleProducto({ funko }) {
  return (
    <>
      <Layout>
        <ProductoLayout>
          <Detalle funko={funko} />
          <Relacionados />
          <Comentarios />
        </ProductoLayout>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: GET_PRODUCTO,
    variables: {
      id: Number.parseInt(params.id),
    },
  });

  return { props: { funko: data.producto } };
}
