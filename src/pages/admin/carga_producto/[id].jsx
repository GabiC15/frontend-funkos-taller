import Layout from "@/components/common/layout";
import CargarProducto from "@/components/admin/productos/CargarProducto";
import Sidebar from "@/components/common/sidebar";
import client from "@/services/apollo/client";
import { GET_PRODUCTO } from "@/services/apollo/queries/producto";
import { redirectRol } from "@/utils/redirect-rol";

const add_producto = ({ funko }) => {
  return (
    <>
      <Layout>
        <Sidebar />
        <CargarProducto producto={funko} />
      </Layout>
    </>
  );
};

export default add_producto;

export async function getServerSideProps({ params }) {
  if (!isNaN(params.id)) {
    const { data } = await client.query({
      query: GET_PRODUCTO,
      variables: {
        id: Number.parseInt(params.id),
      },
    });
    return {
      props: { funko: data.producto },
      redirect: redirectRol(context, ["ADMIN"]),
    };
  }
  return { props: {} };
}