import { Bar } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, Legend, Tooltip, LinearScale, Title, BarElement } from "chart.js";
Chart.register(ArcElement, CategoryScale, Legend, Tooltip, LinearScale, Title, BarElement);

const BarChart = ({data}) => {
  const { months, brutto, netto} = data[0];
  const dataBar = {
    labels: months,
    datasets: [
      {
        label: "Brutto",
        borderRadius: 30,
        data: brutto,
        backgroundColor: "rgba(32, 214, 155, 1)",
        barThickness: 10,
        
      },
      {
        label: "Netto",
        borderRadius: 20,
        data: netto,
        backgroundColor: "rgba(1, 98, 255, 1)",
        barThickness: 10,
        
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "Start",
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: "circle",
          color: "white"
        },
        title: {
          text: "Reporte de ventas por mes",
          display: true,
          color: "white",
          font: {
            size: 18,
            weight: "bold",
          },
        },
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
      xAxis: {
        display: false,
        
      },
      yAxis: {
        display: false,
        max: 1,
      },
    },
    elements: {
      bar: {
        barPercentage: 0.5,
        categoryPercentage: 1,
      },
    },
  };
  
  return (
    <>
      <Bar data={dataBar} options={options} />
    </>
  );
};

export default BarChart;
