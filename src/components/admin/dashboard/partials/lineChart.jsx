import { useState } from "react";
import { Line } from "react-chartjs-2";
import { ArcElement, Chart, PointElement, LineElement } from "chart.js";
Chart.register(ArcElement, PointElement, LineElement);

const LineChart = () => {
  const Data = [
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
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(236, 240, 241, 1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020",
      },
      title: {
        text: "Line Chart",
        display: true,
        color: "white",
        font: {
          size: 18,
        },
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
          max: 1,
        },
      },
    },
  };

  return (
    <>
      <div className="">
        {/* <h2 style={{ textAlign: "center" }}>Line Chart</h2> */}
        <Line data={chartData} options={options} />
      </div>
    </>
  );
};

export default LineChart;
