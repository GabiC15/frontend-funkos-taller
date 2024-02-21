import { useState, useEffect } from "react";
import Layout from "@/components/common/layout";
import Sidebar from "@/components/common/sidebar";
import MainCards from "@/components/admin/dashboard/MainCards";
import SalesVolume from "@/components/admin/dashboard/SalesVolume";
import NotificationPanel from "@/components/admin/dashboard/NotificationPanel";
import OrdersControl from "@/components/admin/dashboard/OrdersControl";
import DoughnutChart from "@/components/admin/dashboard/partials/doughnutChart";
import ChartTable from "@/components/admin/dashboard/ChartTable";
import { redirectRol } from "@/utils/redirect-rol";

export default function Reporte() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <div className="bg-gradient">
        <Layout>
          <div
            className="h-full ml-14 mt-14 mb-10 md:ml-64"
            // style={{maxWidth: '90%'}}
          >
            <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">
              Dashboard
            </h1>

            <Sidebar />

            {/* <!-- Statistics Cards --> */}
            <MainCards />
            {/* <!-- ./Statistics Cards --> */}

            <div className="md:flex md:justify-between h-full my-3 mr-8 md:mr-0">
              <div className="w-full max-w-2xl md:h-fit h-full mx-4 px-5 py-5 rounded shadow-lg md:mb-0 mb-7 bg-gray-100 dark:bg-gray-800">
                <ChartTable />
              </div>
              <div className=" max-w-sm w-full md:h-fit h-full mx-4 px-5 py-4 rounded shadow-lg bg-gray-100 dark:bg-gray-800">
                <DoughnutChart />
              </div>
            </div>

            <div className="md:flex">
              {/* <!-- ./Sales Traffic --> */}
              <SalesVolume />
              {/* <!-- ./Sales Traffic --> */}

              {/* <!-- Recent Activities --> */}
              <NotificationPanel />
              {/* <!-- ./Recent Activities --> */}
            </div>

            {/* <!-- Orders Table --> */}
            {hydrated && <OrdersControl />}
            {/* <!-- Orders Table --> */}

            {/* <Doughnut /> */}
          </div>
        </Layout>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
