import { useState } from "react";
import BarChart from "@/components/admin/dashboard/partials/barChart";
import { MdKeyboardArrowRight } from "react-icons/md";
import LineChart from "./partials/lineChart";

const ChartTable = () => {
  
  const [status, setStatus] = useState(false);
  
  return (
    <>
      <div className="">
        <div className="flex justify-end space-x-2 mb-1">
          <button
          className={`${status ? "text-white" : "text-gray-600" }`}
          onClick={() => (
            setStatus(false)
          )}
          >
            <MdKeyboardArrowRight className="rotate-180 h-5 w-5" />
          </button>
          <button
          className={`${!status ? "text-white" : "text-gray-600" }`}
          onClick={() => (
            setStatus(true)
          )}
          >
            <MdKeyboardArrowRight className="w-5 h-5" />
          </button>
        </div>

        {status ? <LineChart /> :
        <BarChart />}
      </div>
    </>
  );
};

export default ChartTable;
