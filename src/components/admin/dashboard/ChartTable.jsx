import { useState } from "react";
import BarChart from "@/components/admin/dashboard/partials/barChart";
import { MdKeyboardArrowRight } from "react-icons/md";
import LineChart from "./partials/lineChart";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_TOTAL_PEDIDOS_POR_ANIO } from "@/services/apollo/queries/pedidos";


const ChartTable = () => {

  const [status, setStatus] = useState(false);

  const {
    data: dataLine,
    error: errorLine,
    loading: loadingLine,
  } = useQuery(GET_TOTAL_PEDIDOS_POR_ANIO);

  if (loadingLine)
    return "Loading...";
  if (errorLine
  )
    return `No data! ${
      (errorLine.message
      )
    }`;

  
  const barData = [
    {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      brutto: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4, 0.5, 0.7, 0.23],
      netto: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4, 0.6, 0.3, 0.12],
    },
  ];


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
        {status ? <LineChart data={dataLine.totalVentasPorAnio} /> : <BarChart data={barData} />}
      </div>
    </>
  );
};

export default ChartTable;
