import { useState, useEffect } from "react";
import Pagination from "@/components/common/pagination";
import GridTrEnvios from "@/components/admin/dashboard/partials/gridTrEnvios";
import { useQuery } from "@apollo/client";
import { GET_CONTROL_DE_ENVIOS } from "@/services/apollo/queries/envios";

const OrdersControl = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, loading } = useQuery(GET_CONTROL_DE_ENVIOS);
  const [onPhone, setOnPhone] = useState(false);

  const [sizeText, setSizeText] = useState(54);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const handleMediaQueryChange = (e) => {
      setOnPhone(e.matches);
      setSizeText(e.matches ? 20 : 54);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  if (loading) return "Loading...";
  if (error) return `No data! ${error.message}`;

  const orders = data.controlDeEnvios;
  const ordersPerPage = 5;

  const nPages = Math.ceil(orders.length / ordersPerPage);

  const indexOfLastPage = currentPage * ordersPerPage;
  const indexOfFirstPage = indexOfLastPage - ordersPerPage;
  // const orderedData = [...orders].sort((a, b) => b.entregado === false); 
  const orderedData = [...orders]

  const currentOrders =
    orderedData.length <= ordersPerPage
      ? orderedData
      : orderedData
          .slice(indexOfFirstPage, indexOfLastPage)


  return (
    <>
      <div className="mt-4 mx-4">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="md:text-base text-sm font-semibold tracking-wide text-left text-gray-300 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-300 dark:bg-gray-800">
                  <th className="pl-4 md:px-4 text-xs md:text-sm py-4 md:py-3">
                    Control de envíos
                  </th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                </tr>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Cliente</th>
                  {!onPhone && <th className="px-4 py-3">Monto</th>}
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Provincia</th>
                  <th className="px-4 py-3">Fecha</th>
                  {onPhone && <th className="px-4 py-3"></th>}
                </tr>
              </thead>
                <tbody className="bg-white divide-y h-80  dark:divide-gray-700 dark:bg-gray-800">
                  
                  {currentOrders.length > 0
                    ? currentOrders.map((order, index) => (
                        <GridTrEnvios props={order} key={index} className="" />
                      ))
                    : "Loading..."}
                </tbody>
            </table>
          </div>
          <div className="flex px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span className="flex mt-2 sm:mt-auto sm:justify-end w-full">
              <nav className="w-full" aria-label="Table navigation">
                <Pagination
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  totalDataLength={orders.length}
                  dataStartIndex={indexOfFirstPage}
                  dataLastIndex={indexOfLastPage}
                  nPages={nPages}
                />{" "}
              </nav>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersControl;
