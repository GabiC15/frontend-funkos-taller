import { useState } from "react";
import { Line } from "react-chartjs-2";
import { ArcElement, Chart, PointElement, LineElement } from "chart.js";
Chart.register(ArcElement, PointElement, LineElement);

const LineChart = ({data}) => {


  let sizeText = 18;

  
  // Check if the screen size is in the `sm` breakpoint
  if (window.matchMedia('(max-width: 639px)').matches) {
    sizeText = 14;
  }

  const [chartData, setChartData] = useState({
    labels: data.map((data) => data.year),
    
    datasets: [
      {
        label: "Ganancias",
        data: data.map((data) => data.total),
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
      // title: {
      //   display: true,
      //   text: "Users Gained between 2016-2020",
      // },
      title: {
        text: "Reporte de ganancias anuales",
        display: true,
        color: "white",
        font: {
          size: sizeText,
          weight: "bold",
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
