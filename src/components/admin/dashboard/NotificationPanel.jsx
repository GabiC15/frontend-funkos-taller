import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_NOTIFICACIONES } from "@/services/apollo/queries/notificaciones";
import NotificationMessage from "./partials/notificationMessage";
import Pagination from "@/components/common/pagination";
import Loading from "@/components/producto/loading";

const NotificationPanel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, loading } = useQuery(GET_NOTIFICACIONES, {
    variables: {
      input: {
        limite: 35,
      },
    },
  });

  if (loading) return <Loading />;
  if (error) return `No data! ${error.message}`;

  const notifications = data.notificaciones;
  // console.log(data);

  const notificationPerPage = 5;

  const nPages = Math.ceil(notifications.length / notificationPerPage);

  const indexOfLastPage = currentPage * notificationPerPage;
  const indexOfFirstPage = indexOfLastPage - notificationPerPage;

  const currentNotifactions =
    notifications.length <= notificationPerPage
      ? notifications
      : notifications.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <div className="mr-8 md:mr-0 md:pr-8 flex md:my-4 flex-col md:w-full">
        <div className="relative flex flex-col min-w-0 break-words mx-4 md:max-w-xl bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="border-b-2 border-neutral-500 flex w-full">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold py-2 md:text-base text-sm text-gray-900 dark:text-gray-50">
                    Actividades Recientes
                  </h3>
                </div>
                {/* <div className="relative w-full py-2 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-blue-500 dark:bg-red-600 hover:bg-red-500 text-white active:bg-blue-600 dark:text-white dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Eliminar
                  </button>
                </div> */}
              </div>
            </div>
            <div className="block w-full h-80 overflow-y-scroll">
              {currentNotifactions.length > 0 ? (
                currentNotifactions.map((data, i) => (
                  <ul className="my-1 text-xs md:text-sm" key={i}>
                    <li className="flex px-4" key={i}>
                      <NotificationMessage data={data} key={i} />
                    </li>
                  </ul>
                ))
              ) : (
                <div className="w-full h-full flex justify-center items-center md:font-medium font-normal md:text-base text-sm">
                  No hay notificaciones recientes
                </div>
              )}
            </div>
            <div className="flex px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span className="flex mt-2 sm:mt-auto sm:justify-end w-full">
                <nav className="w-full" aria-label="Table navigation">
                  <Pagination
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    totalDataLength={notifications.length}
                    dataStartIndex={indexOfFirstPage}
                    dataLastIndex={indexOfLastPage}
                    nPages={nPages}
                  />{" "}
                </nav>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;
