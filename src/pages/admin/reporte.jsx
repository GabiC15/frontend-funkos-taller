import { useState, useEffect } from "react";
import Layout from "@/components/common/layout";
import Sidebar from "@/components/common/sidebar";
import MainCards from "@/components/admin/dashboard/MainCards";
import SalesVolume from "@/components/admin/dashboard/SalesVolume";
import NotificationPanel from "@/components/admin/dashboard/NotificationPanel";
import OrdersControl from "@/components/admin/dashboard/OrdersControl";
import DoughnutChart from "@/components/admin/dashboard/partials/doughnutChart";
import ChartTable from "@/components/admin/dashboard/chartTable";

export default function Reporte() {
  const dataSalesVolume = [
    {
      productId: "74094",
      title: "Pop! Ichigo",
      totalProdSales: "122",
      totalSales: "287",
    },
    {
      productId: "74394",
      title: "Pop! Batman",
      totalProdSales: "73",
      totalSales: "287",
    },
    {
      productId: "74294",
      title: "Pop! Ichigo",
      totalProdSales: "28",
      totalSales: "287",
    },
    {
      productId: "74194",
      title: "Pop! Ichigo",
      totalProdSales: "24",
      totalSales: "287",
    },
  ];

  const dataCards = [
    {
      title: "Clientes",
      total: "1,467",
      img: [
        <svg
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>,
      ],
    },
    {
      title: "Ventas",
      total: "1,103",
      img: [
        <svg
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>,
      ],
    },
    {
      title: "Pedidos",
      total: "875",
      img: [
        <svg
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>,
      ],
    },
  ];

  const dataOrders = [
    {
      userName: "Rulia Joberts",
      profilePicture:
        "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "RuliaJoberts@gmail.com",
      shippingPrice: 155.03,
      shippingStatus: false,
      shippingDate: "13-11-2022",
    },
    {
      userName: "Hitney Wouston",
      profilePicture:
        "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HitneyWouston@gmail.com",
      shippingPrice: 314.33,
      shippingStatus: false,
      shippingDate: "07-08-2022",
    },
    {
      userName: "Hans Burger",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HansBurger@gmail.com",
      shippingPrice: 789.34,
      shippingStatus: true,
      shippingDate: "09-12-2021",
    },
    {
      userName: "Jolina Angeline",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6",
      userEmail: "JolinaAngelie@gmail.com",
      shippingPrice: 309.75,
      shippingStatus: true,
      shippingDate: "23-03-2021",
    },
    {
      userName: "Dave Li",
      profilePicture:
        "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5",
      userEmail: "DaveLi@gmail.com",
      shippingPrice: 775.45,
      shippingStatus: true,
      shippingDate: "09-02-2021",
    },
    {
      userName: "Rulia Joberts",
      profilePicture:
        "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "RuliaJoberts@gmail.com",
      shippingPrice: 155.03,
      shippingStatus: false,
      shippingDate: "13-11-2022",
    },
    {
      userName: "Hitney Wouston",
      profilePicture:
        "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HitneyWouston@gmail.com",
      shippingPrice: 314.33,
      shippingStatus: false,
      shippingDate: "07-08-2022",
    },
    {
      userName: "Hans Burger",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HansBurger@gmail.com",
      shippingPrice: 789.34,
      shippingStatus: true,
      shippingDate: "09-12-2021",
    },
    {
      userName: "Jolina Angeline",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6",
      userEmail: "JolinaAngelie@gmail.com",
      shippingPrice: 309.75,
      shippingStatus: true,
      shippingDate: "23-03-2021",
    },
    {
      userName: "Dave Li",
      profilePicture:
        "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5",
      userEmail: "DaveLi@gmail.com",
      shippingPrice: 775.45,
      shippingStatus: true,
      shippingDate: "09-02-2021",
    },
    {
      userName: "Rulia Joberts",
      profilePicture:
        "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "RuliaJoberts@gmail.com",
      shippingPrice: 155.03,
      shippingStatus: false,
      shippingDate: "13-11-2022",
    },
    {
      userName: "Hitney Wouston",
      profilePicture:
        "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HitneyWouston@gmail.com",
      shippingPrice: 314.33,
      shippingStatus: false,
      shippingDate: "07-08-2022",
    },
    {
      userName: "Hans Burger",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HansBurger@gmail.com",
      shippingPrice: 789.34,
      shippingStatus: true,
      shippingDate: "09-12-2021",
    },
    {
      userName: "Jolina Angeline",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6",
      userEmail: "JolinaAngelie@gmail.com",
      shippingPrice: 309.75,
      shippingStatus: true,
      shippingDate: "23-03-2021",
    },
    {
      userName: "Dave Li",
      profilePicture:
        "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5",
      userEmail: "DaveLi@gmail.com",
      shippingPrice: 775.45,
      shippingStatus: true,
      shippingDate: "09-02-2021",
    },
    {
      userName: "Rulia Joberts",
      profilePicture:
        "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "RuliaJoberts@gmail.com",
      shippingPrice: 155.03,
      shippingStatus: false,
      shippingDate: "13-11-2022",
    },
    {
      userName: "Hitney Wouston",
      profilePicture:
        "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HitneyWouston@gmail.com",
      shippingPrice: 314.33,
      shippingStatus: false,
      shippingDate: "07-08-2022",
    },
    {
      userName: "Hans Burger",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HansBurger@gmail.com",
      shippingPrice: 789.34,
      shippingStatus: true,
      shippingDate: "09-12-2021",
    },
    {
      userName: "Jolina Angeline",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6",
      userEmail: "JolinaAngelie@gmail.com",
      shippingPrice: 309.75,
      shippingStatus: true,
      shippingDate: "23-03-2021",
    },
    {
      userName: "Dave Li",
      profilePicture:
        "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5",
      userEmail: "DaveLi@gmail.com",
      shippingPrice: 775.45,
      shippingStatus: true,
      shippingDate: "09-02-2021",
    },
    {
      userName: "Rulia Joberts",
      profilePicture:
        "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "RuliaJoberts@gmail.com",
      shippingPrice: 155.03,
      shippingStatus: false,
      shippingDate: "13-11-2022",
    },
    {
      userName: "Hitney Wouston",
      profilePicture:
        "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HitneyWouston@gmail.com",
      shippingPrice: 314.33,
      shippingStatus: false,
      shippingDate: "07-08-2022",
    },
    {
      userName: "Hans Burger",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HansBurger@gmail.com",
      shippingPrice: 789.34,
      shippingStatus: true,
      shippingDate: "09-12-2021",
    },
    {
      userName: "Jolina Angeline",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6",
      userEmail: "JolinaAngelie@gmail.com",
      shippingPrice: 309.75,
      shippingStatus: true,
      shippingDate: "23-03-2021",
    },
    {
      userName: "Dave Li",
      profilePicture:
        "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5",
      userEmail: "DaveLi@gmail.com",
      shippingPrice: 775.45,
      shippingStatus: true,
      shippingDate: "09-02-2021",
    },
    {
      userName: "Rulia Joberts",
      profilePicture:
        "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "RuliaJoberts@gmail.com",
      shippingPrice: 155.03,
      shippingStatus: false,
      shippingDate: "13-11-2022",
    },
    {
      userName: "Hitney Wouston",
      profilePicture:
        "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HitneyWouston@gmail.com",
      shippingPrice: 314.33,
      shippingStatus: false,
      shippingDate: "07-08-2022",
    },
    {
      userName: "Hans Burger",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HansBurger@gmail.com",
      shippingPrice: 789.34,
      shippingStatus: true,
      shippingDate: "09-12-2021",
    },
    {
      userName: "Jolina Angeline",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6",
      userEmail: "JolinaAngelie@gmail.com",
      shippingPrice: 309.75,
      shippingStatus: true,
      shippingDate: "23-03-2021",
    },
    {
      userName: "Dave Li",
      profilePicture:
        "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5",
      userEmail: "DaveLi@gmail.com",
      shippingPrice: 775.45,
      shippingStatus: true,
      shippingDate: "09-02-2021",
    },
    {
      userName: "Rulia Joberts",
      profilePicture:
        "https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "RuliaJoberts@gmail.com",
      shippingPrice: 155.03,
      shippingStatus: false,
      shippingDate: "13-11-2022",
    },
    {
      userName: "Hitney Wouston",
      profilePicture:
        "https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HitneyWouston@gmail.com",
      shippingPrice: 314.33,
      shippingStatus: false,
      shippingDate: "07-08-2022",
    },
    {
      userName: "Hans Burger",
      profilePicture:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      userEmail: "HansBurger@gmail.com",
      shippingPrice: 789.34,
      shippingStatus: true,
      shippingDate: "09-12-2021",
    },
    {
      userName: "Jolina Angeline",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6",
      userEmail: "JolinaAngelie@gmail.com",
      shippingPrice: 309.75,
      shippingStatus: true,
      shippingDate: "23-03-2021",
    },
    {
      userName: "Dave Li",
      profilePicture:
        "https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5",
      userEmail: "DaveLi@gmail.com",
      shippingPrice: 775.45,
      shippingStatus: true,
      shippingDate: "09-02-2023",
    },
  ];

  const [hydrated, setHydrated] = useState(false);

  const dataDoughnut = {
    backgroundColor: [
      "rgb(2, 88, 255)",
      "rgb(249, 151, 0)",
      "rgb(255, 199, 0)",
      "rgb(32, 214, 152)",
    ],
    labels: ["Funko 1", "Funko 2", "Funko 3", "Funko 4"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 300],
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
  const options = {
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
        anchor: "end", // Align the label at the end of the arc
        align: "start", // Start the label at the start of the arc
        offset: 10, // Add space between the label and the doughnut
      },
      legend: {
        display: true,
        position: "right",
        align: "Start",
        labels: {
          boxWidth: 7,
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
        borderWidth: 3,
      },
    },
    cutout: 80,
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <div className="bg-gradient">
        <Layout>
          <div
            className="h-full ml-14 mt-14 mb-10 md:ml-64"
            // style={{maxWidth: '90%'}}
          >
            <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">
              Dashboard
            </h1>

            <Sidebar />

            {/* <!-- Statistics Cards --> */}
            <MainCards data={dataCards} />
            {/* <!-- ./Statistics Cards --> */}

            <div className="md:flex md:justify-between my-3 mr-8 md:mr-0">
              <div className="w-full md:h-fit h-full mx-4 px-5 py-5 rounded shadow-lg md:mb-0 mb-7 bg-gray-100 dark:bg-gray-800">
                <ChartTable />
              </div>
              <div className="md:w-fit w-full md:h-fit h-full mx-4 px-5 py-5 rounded shadow-lg bg-gray-100 dark:bg-gray-800">
                <DoughnutChart />
              </div>
            </div>

            <div className="md:flex">
              {/* <!-- ./Sales Traffic --> */}
              <SalesVolume data={dataSalesVolume} />
              {/* <!-- ./Sales Traffic --> */}

              {/* <!-- Recent Activities --> */}
              <NotificationPanel />
              {/* <!-- ./Recent Activities --> */}
            </div>

            {/* <!-- Orders Table --> */}
            {hydrated ? <OrdersControl data={dataOrders} /> : null}
            {/* <!-- Orders Table --> */}

            {/* <Doughnut /> */}
          </div>
        </Layout>
      </div>
    </>
  );
}
