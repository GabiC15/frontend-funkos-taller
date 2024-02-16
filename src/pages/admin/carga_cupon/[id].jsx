import Layout from "@/components/common/layout";
import Sidebar from "@/components/common/sidebar";
import client from "@/services/apollo/client";
import { GET_CUPON } from "@/services/apollo/queries/cupon";
import CargarCupon from "@/components/admin/dashboard/cupones/CargarCupon";


const add_cupon = ({cupon}) => {
  return (
    <>
      <Layout>
        <Sidebar />
        <CargarCupon cupon={cupon} />
      </Layout>
    </>
  );
};

export default add_cupon;

export async function getServerSideProps({ params }) {
  if (!isNaN(params.id)) {
    const { data } = await client.query({
      query: GET_CUPON,
      variables: {
        id: Number.parseInt(params.id),
      },
    });
    return { props: { cupon: data.cupon } };
  }
  return { props: {} };
}