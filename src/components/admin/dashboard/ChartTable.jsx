import { useState } from "react";
import BarChart from "@/components/admin/dashboard/partials/barChart";
import { MdKeyboardArrowRight } from "react-icons/md";
import LineChart from "./partials/lineChart";
import { NetworkStatus, useQuery } from "@apollo/client";
// import {
//   GET_TOTAL_PEDIDOS_POR_ANIO,
//   GET_TOTAL_PEDIDOS_POR_MES,
// } from "@/services/apollo/queries/pedidos";

import {
  GET_TOTAL_PAGOS_POR_ANIO,
  GET_TOTAL_PAGOS_POR_MES,
} from "@/services/apollo/queries/pago";

const ChartTable = () => {
  const [status, setStatus] = useState(false);
  const startYear = 2016;
  const endYear = 2023;

  // const {
  //   data: dataLine,
  //   error: errorLine,
  //   loading: loadingLine,
  // } = useQuery(GET_TOTAL_PEDIDOS_POR_ANIO, {
  //   variables: {
  //     input: {
  //       startYear,
  //       endYear,
  //     }
  //   }
  // });

  // const {
  //   data: dataBar,
  //   error: errorBar,
  //   loading: loadingBar,
  // } = useQuery(GET_TOTAL_PEDIDOS_POR_MES, {
  //   variables: { input: endYear },
  // });

  const {
    data: dataLine,
    error: errorLine,
    loading: loadingLine,
  } = useQuery(GET_TOTAL_PAGOS_POR_ANIO, {
    variables: {
      input: {
        startYear,
        endYear,
      }
    }
  });

  const {
    data: dataBar,
    error: errorBar,
    loading: loadingBar,
  } = useQuery(GET_TOTAL_PAGOS_POR_MES, {
    variables: { input: endYear },
  });


  if (loadingLine || loadingBar) return "Loading...";
  if (errorLine || errorBar)
    return `No data! ${(errorLine?.message, errorBar?.message)}`;

  return (
    <>
      <div className="">
        <div className="flex justify-end space-x-2 mb-1">
          <button
            className={`${status ? "text-white" : "text-gray-600"}`}
            onClick={() => setStatus(false)}
          >
            <MdKeyboardArrowRight className="rotate-180 h-5 w-5" />
          </button>
          <button
            className={`${!status ? "text-white" : "text-gray-600"}`}
            onClick={() => setStatus(true)}
          >
            <MdKeyboardArrowRight className="w-5 h-5" />
          </button>
        </div>
        {status ? (
          <LineChart data={dataLine.totalPagosPorAnio} />
        ) : (
          <BarChart data={dataBar.totalPagosPorMes} />
        )}
      </div>
    </>
  );
};

export default ChartTable;
