import Layout from "@/components/common/layout";
import CardProducto from "@/components/admin/productos/CardProducto";
import Sidebar from "@/components/common/sidebar";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";
import { redirectRol } from "@/utils/redirect-rol";

export default function Producto() {
  const { data, error, loading } = useQuery(GET_PRODUCTOS, {
    variables: { input: {} },
  });
  useEffect(() => {}, [data, error, loading]);

  if (loading) return "Loading...";
  if (error) return `No data! ${error.message}`;

  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="md:ml-64 ml-12">
            <Sidebar />

            <div className="container mx-auto flex flex-col md:px-10">
              <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">
                Productos
              </h1>
              <div className="grid grid-cols-1 gap-1 md:gap-3 mb-16">
                {data.productos.map((prod, i) => (
                  <CardProducto producto={prod} key={prod["productId"]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
