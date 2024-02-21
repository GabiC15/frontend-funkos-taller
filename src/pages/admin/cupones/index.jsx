import Layout from "@/components/common/layout";
import Sidebar from "@/components/common/sidebar";
import CardCupon from "@/components/admin/cupones/CardCupon";
// import { IoAdd } from "react-icons/io5";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_CUPONES } from "@/services/apollo/queries/cupon";
import { redirectRol } from "@/utils/redirect-rol";
import Loading from "@/components/producto/loading";

export default function Producto() {
  const { data, error, loading } = useQuery(GET_CUPONES, {
    variables: { input: {} },
  });
  const dataFiltered = data?.cupones.filter((cupon) => cupon.estado === true);
  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="md:ml-64 ml-12">
            <Sidebar />

            <div className="container mx-auto flex flex-col md:px-10">
              <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">
                Cupones
              </h1>
              {loading && <Loading className="mx-auto" />}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4 mb-16">
                {dataFiltered?.map((cupon, i) => (
                  <CardCupon cupon={cupon} key={cupon["id"]} />
                ))}
                {data?.cupones && dataFiltered.length === 0 && (
                  <p className="text-center">No se han encontrado cupones</p>
                )}
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
