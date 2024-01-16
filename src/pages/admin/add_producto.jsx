import Layout from "@/components/common/layout";
import CargarProducto from "@/components/admin/productos/CargarProducto";
import Sidebar from "@/components/common/sidebar";

const add_producto = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <CargarProducto />
      </Layout>
    </>
  );
};

export default add_producto;
