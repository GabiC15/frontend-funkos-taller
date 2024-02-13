import Layout from "@/components/common/layout";
import Sidebar from "@/components/common/sidebar";
import client from "@/services/apollo/client";
import { GET_PRODUCTO } from "@/services/apollo/queries/producto";
import CargarCupon from "@/components/admin/dashboard/cupones/CargarCupon";


const add_producto = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <CargarCupon />
      </Layout>
    </>
  );
};

export default add_producto;

// export async function getServerSideProps({ params }) {
//   if (!isNaN(params.id)) {
//     const { data } = await client.query({
//       query: GET_PRODUCTO,
//       variables: {
//         id: Number.parseInt(params.id),
//       },
//     });
//     return { props: { funko: data.producto } };
//   }
//   return { props: {} };
// }