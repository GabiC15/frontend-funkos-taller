import { Bar } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, Legend, Tooltip, LinearScale, Title, BarElement } from "chart.js";
Chart.register(ArcElement, CategoryScale, Legend, Tooltip, LinearScale, Title, BarElement);

const BarChart = () => {
  const data = {
    labels: [
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
    datasets: [
      {
        label: "Brutto",
        borderRadius: 30,
        data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4, 0.5, 0.7, 0.23],
        backgroundColor: "rgba(32, 214, 155, 1)",
        barThickness: 10,
        
      },
      {
        label: "Netto",
        borderRadius: 20,
        data: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4, 0.6, 0.3, 0.12],
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
          text: "Sales Report",
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
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
