import { useState } from "react";
import BarChart from "@/components/admin/dashboard/partials/barChart";
import { MdKeyboardArrowRight } from "react-icons/md";
import LineChart from "./partials/lineChart";

const ChartTable = () => {
  
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

  const lineData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
    {
      id: 6,
      year: 2020,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 7,
      year: 2021,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 8,
      year: 2021,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 9,
      year: 2022,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 10,
      year: 2023,
      userGain: 23000,
      userLost: 234,
    },
  ]

  const [status, setStatus] = useState(false);

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
        {status ? <LineChart data={lineData} /> : <BarChart data={barData} />}
      </div>
    </>
  );
};

export default ChartTable;
