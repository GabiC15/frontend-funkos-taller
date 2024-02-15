import { Doughnut } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, Legend, Tooltip } from "chart.js";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_ITEMS_MAS_VENDIDOS } from "@/services/apollo/queries/items-pedido";
Chart.register(ArcElement, CategoryScale, Legend, Tooltip);

const DoughnutChart = () => {
  let sizeText = 18;
  let cutoutSize = 70;

  // Check if the screen size is in the `sm` breakpoint
  if (window.matchMedia("(max-width: 639px)").matches) {
    sizeText = 14;
    cutoutSize = 30;
  }

  const { data, error, loading } = useQuery(GET_ITEMS_MAS_VENDIDOS);

  if (loading) return "Loading...";
  if (error) return `No data! ${error.message}`;

  const dataDoughnut = {
    backgroundColor: [
      "rgb(2, 88, 255)",
      "rgb(249, 151, 0)",
      "rgb(255, 199, 0)",
      "rgb(32, 214, 152)",
    ],
    labels: data.itemsMasPedidos.map((item) => item.productoTitulo),
    datasets: [
      {
        label: "Total vendidos:",
        data: data.itemsMasPedidos.map((item) => item.cantidad),
        backgroundColor: [
          "rgb(2, 88, 255)",
          "rgb(249, 151, 0)",
          "rgb(255, 209, 0)",
          "rgb(32, 214, 152)",
          "rgb(25, 188, 255)",
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
          // boxHeight: 50,
          boxWidth: 17,
          usePointStyle: true,
          pointStyile: "circle",
          color: "white",
        },
        title: {
          text: "Productos mas vendidos del mes",
          display: true,
          color: "white",
          font: {
            size: sizeText,
            weight: "bold",
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
    cutout: cutoutSize,

    resize: true,
  };

  return <Doughnut data={dataDoughnut} options={chartOptions} />;
};

export default DoughnutChart;
