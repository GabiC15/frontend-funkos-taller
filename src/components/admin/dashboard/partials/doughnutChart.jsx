import { Doughnut } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, Legend, Tooltip } from "chart.js";
Chart.register(ArcElement, CategoryScale, Legend, Tooltip);

const DoughnutChart = () => {
  const dataDoughnut = {
    backgroundColor: [
      "rgb(2, 88, 255)",
      "rgb(249, 151, 0)",
      "rgb(255, 199, 0)",
      "rgb(32, 214, 152)",
    ],
    labels: ["Funko 1", "Funko 2", "Funko 3", "Funko 4", "Funko 5", "Funko 6", "Funko 7", "Funko 8"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 300, 50, 100, 175, 250],
        backgroundColor: [
          "rgb(2, 88, 255)",
          "rgb(249, 151, 0)",
          "rgb(255, 199, 0)",
          "rgb(32, 214, 152)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const chartOptions = {
    plugins: {
      datalabels: {
        color: "white",
        formatter: (value, context) => {
          return (
            context.chart.data.labels[context.dataIndex] +
            " (" +
            context.dataset.label +
            ")"
          );
        },
      },
      legend: {
        display: true,
        position: "top",
        align: "Start",
        labels: {
          boxWidth: 17,
          usePointStyle: true,
          pointStyile: "circle",
          color: "white",
        },
        title: {
          text: "Reporte de ventas",
          display: true,
          color: "white",
          font: {
            size: 18,
          },
        },
      },
    },
    elements: {
      arc: {
        weight: 0.7,
        borderWidth: 2,
      },
    },
    cutout: 70,
  };

  return <Doughnut data={dataDoughnut} options={chartOptions} />;
};

export default DoughnutChart;
