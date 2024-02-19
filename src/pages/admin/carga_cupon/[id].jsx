import Layout from "@/components/common/layout";
import Sidebar from "@/components/common/sidebar";
import client from "@/services/apollo/client";
import { GET_CUPON } from "@/services/apollo/queries/cupon";
import CargarCupon from "@/components/admin/dashboard/cupones/CargarCupon";
import { redirectRol } from "@/utils/redirect-rol";

const AgregarCupon = ({ cupon }) => {
  return (
    <>
      <Layout>
        <Sidebar />
        <CargarCupon cupon={cupon} />
      </Layout>
    </>
  );
};

export default AgregarCupon;

export async function getServerSideProps(context) {
  const { params } = context;
  const redirect = redirectRol(context, ["ADMIN"]);
  if (!isNaN(params.id)) {
    const { data } = await client.query({
      query: GET_CUPON,
      variables: {
        id: Number.parseInt(params.id),
      },
      fetchPolicy: "network-only",
    });
    return {
      redirect,
      props: { cupon: data.cupon },
    };
  }
  return { props: {}, redirect };
}
