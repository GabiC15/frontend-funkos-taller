import { useState, useEffect } from "react";
import GridTrVentas from "@/components/admin/dashboard/partials/gridTrVentas";
import { useQuery } from "@apollo/client";
import { GET_VOLUMEN_ITEMS_PEDIDOS } from "@/services/apollo/queries/items-pedido";
import Pagination from "@/components/common/pagination";

const SalesVolume = () => {
  const { data, error, loading } = useQuery(GET_VOLUMEN_ITEMS_PEDIDOS);
  const [onPhone, setOnPhone] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const handleMediaQueryChange = (e) => {
      setOnPhone(e.matches);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  
  if (loading) return "Loading...";
  if (error) return `No data! ${error.message}`;

  const dataVolume = data.volumenItemsPedidos;

  const dataPerPage = 5;

  const nPages = Math.ceil(dataVolume.length / dataPerPage)

  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;

  const currentDataVolume =
    dataVolume.length <= dataPerPage
      ? dataVolume
      : dataVolume.slice(indexOfFirstPage, indexOfLastPage);
      

  return (
    <>
      <div className="grid grid-cols-1 w-full p-4 gap-4">
        {/* <!-- Social Traffic --> */}
        <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded h-auto">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1 border-b-2 border-neutral-500">
                <h3 className="font-semibold py-2 md:text-base text-sm text-gray-900 dark:text-gray-50">
                  Volumen total de ventas
                </h3>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead className="">
                  <tr>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Producto
                    </th>
                    {!onPhone && <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Cantidad
                    </th>}
                    <th className="px-0 pr-2 md:pr-0 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center min-w-140-px">
                      % del total
                    </th>
                  </tr>
                </thead>
                <tbody className="h-64 md:h-full">
                  {currentDataVolume.length > 0
                    ? currentDataVolume.map((prod, i) => (
                        <GridTrVentas props={prod} key={prod.productoId} />
                      ))
                    : currentDataVolume.length === 0 ? <p className="ml-5 my-2">No hay ventas realizadas</p> : loading && "Loading..."}
                </tbody>
              </table>
            </div>
          </div>
          <div className="h-full"></div>
          <div className="flex px-1 py-2 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span className="flex mt-2 sm:mt-auto sm:justify-end w-full">
              <nav className="w-full" aria-label="Table navigation">
                <Pagination
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  totalDataLength={dataVolume.length}
                  dataLastIndex={indexOfLastPage}
                  dataStartIndex={indexOfFirstPage}
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

export default SalesVolume;
