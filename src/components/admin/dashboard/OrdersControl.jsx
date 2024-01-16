import { useState } from "react";
import Pagination from "@/components/common/pagination";
import GridTrEnvios from "@/components/admin/dashboard/partials/gridTrEnvios";




const OrdersControl = ({ data }) => {
  
  
  const shippings = data;

  const [currentPage, setCurrentPage] = useState(1);

  const shippingsPerPage = 5;

  const pageCount = Math.ceil(shippings.length / shippingsPerPage);

  const offset = currentPage * shippingsPerPage;

  const currentShippings =
    shippings.length <= shippingsPerPage
      ? shippings.sort((a, b) => new Date(a.shippingDate) - new Date(b.shippingDate))
      : shippings
          .slice(offset, offset + shippingsPerPage)
          .sort((a, b) => new Date(a.shippingDate) - new Date(b.shippingDate));

  return (
    <>
      <div className="mt-4 mx-4">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="md:text-base text-sm font-semibold tracking-wide text-left text-gray-300 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-300 dark:bg-gray-800">
                  <th className="pl-4 md:px-4 py-4 md:py-3">
                    Control de envíos
                  </th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2"></th>
                </tr>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Cliente</th>
                  <th className="px-4 py-3">Monto</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Fecha</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {currentShippings.length > 0
                  ? currentShippings.map((order, index) => (
                      <GridTrEnvios props={order} key={index} />
                    ))
                  : "Loading..."}
              </tbody>
            </table>
          </div>
          <div className="flex px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span className="flex mt-2 sm:mt-auto sm:justify-end w-full">
              <nav className="w-full" aria-label="Table navigation">
                <Pagination
                  totalPosts={pageCount}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  totalDataLength={shippings.length}
                  dataCount={offset}
                  currentData={currentShippings.length}
                  dataPerPage={shippingsPerPage}
                />{" "}
              </nav>
            </span>
          </div>
        </div>
        {/* <!-- ./Client Table --> */}

        {/* <!-- External resources --> */}
      </div>
    </>
  );
};

export default OrdersControl;
