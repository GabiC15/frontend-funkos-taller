import Layout from "@/components/common/layout";
import ProductoLayout from "@/components/producto/layout";
import Detalle from "@/components/producto/detalle";
import Relacionados from "@/components/producto/relacionados";
import Comentarios from "@/components/producto/comentarios";
import { getClient } from "@/services/apollo/client";
import { GET_PRODUCTO } from "@/services/apollo/queries/producto";

export default function DetalleProducto({ funko }) {
  return (
    <>
      <Layout>
        <ProductoLayout>
          <Detalle funko={funko} />
          <Relacionados categoriaId={funko.categoria.padre.id} />
          <Comentarios productoId={funko.id} />
        </ProductoLayout>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await getClient(context).query({
    query: GET_PRODUCTO,
    variables: {
      id: Number.parseInt(params.id),
    },
  });

  return data?.producto
    ? { props: { funko: data.producto } }
    : { notFound: true };
}
