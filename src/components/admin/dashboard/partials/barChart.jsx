import { Bar } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart,
  Legend,
  Tooltip,
  LinearScale,
  Title,
  BarElement,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  Legend,
  Tooltip,
  LinearScale,
  Title,
  BarElement
);

const BarChart = ({ data }) => {


  let sizeText = 18;

  
  // Check if the screen size is in the `sm` breakpoint
  if (window.matchMedia('(max-width: 639px)').matches) {
    sizeText = 14;
  }
  
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dataBar = {
    labels: data.map((data) => months[parseInt(data.month) - 1]),
    datasets: [
      {
        label: "Brutto",
        borderRadius: 30,
        data: data.map((data) => data.brutto),
        backgroundColor: "rgba(32, 214, 155, 1)",
        barThickness: 10,
      },
      {
        label: "Netto",
        borderRadius: 30,
        data: data.map((data) => data.netto),
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
          color: "white",
        },
        title: {
          text: "Reporte de ganancias mensuales",
          display: true,
          color: "white",
          font: {
            size: sizeText,
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
