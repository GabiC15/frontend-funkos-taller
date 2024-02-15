import Layout from "@/components/common/layout";
import Sidebar from "@/components/common/sidebar";
import CardCupon from "@/components/admin/dashboard/cupones/CardCupon";
import { IoAdd } from "react-icons/io5";
import { NetworkStatus, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_CUPONES } from "@/services/apollo/queries/cupon";


export default function Producto() {

  const { data, error, loading } = useQuery(GET_CUPONES, {variables: { input: {}}});
  useEffect(() => {
    // if (loading) return 'Loading...';
    // if (error) return `No data! ${error.message}`;
    // console.log(data);
  }, [data, error, loading]);
  
  if (loading) return 'Loading...';
  if (error) return `No data! ${error.message}`;
  // if (data) console.log(data.cupones);

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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-5 mb-16">
                {/* <div className="flex flex-row-reverse mr-6 my-2 md:my-0">
                  <button className="flex flex-row bg-gray-300/30 shadow-md p-2 items-center hover:text-green-500 hover:shadow-sm transition-all duration-200 justify-between rounded-xl">
                    <IoAdd className="h-6 w-6 px-0 ml-1" />
                    <span className="md:text-md text-sm mx-5">Agregar producto</span>
                  </button>
                </div> */}
                {data.cupones.map((cupon, i) => (
                  <CardCupon cupon={cupon} key={cupon["id"]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
