import MainSalesCard from "@/components/admin/dashboard/partials/MainSalesCard";
import { MdOutlineSmartToy } from "react-icons/md";
import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_TOTAL_CLIENTES } from "@/services/apollo/queries/clientes";
import {
  GET_TOTAL_PEDIDOS_PAGOS,
  GET_TOTAL_PEDIDOS,
} from "@/services/apollo/queries/pedidos";
import { GET_TOTAL_PRODUCTOS } from "@/services/apollo/queries/producto";

const MainCards = () => {

  const {
    data: dataTotalUsuarios,
    errorTotalUsuarios,
    loadingTotalUsuarios,
  } = useQuery(GET_TOTAL_CLIENTES);

  const {
    data: dataTotalPedidosPagos,
    error: errorTotalPedidosPagos,
    loading: loadingTotalPedidosPagos,
  } = useQuery(GET_TOTAL_PEDIDOS_PAGOS);

  const {
    data: dataTotalPedidos,
    error: errorTotalPedidos,
    loading: loadingTotalPedidos,
  } = useQuery(GET_TOTAL_PEDIDOS);

  const {
    data: dataTotalProductos,
    error: errorTotalProductos,
    loading: loadingTotalProductos,
  } = useQuery(GET_TOTAL_PRODUCTOS);

  // useEffect(() => {
  //   // if (loading) return 'Loading...';
  //   // if (error) return `No data! ${error.message}`;
  //   console.log(data);
  // }, [data, error, loading]);

  if (loadingTotalUsuarios || loadingTotalPedidos || loadingTotalPedidosPagos || loadingTotalProductos)
    return "Loading...";
  if (
    errorTotalUsuarios ||
    errorTotalPedidos ||
    errorTotalPedidosPagos ||
    errorTotalProductos
  )
    return `No data! ${
      (errorTotalUsuarios?.message,
      errorTotalPedidos?.message,
      errorTotalPedidosPagos?.message,
      errorTotalPedidosPagos?.message,
      errorTotalProductos?.message)
    }`;


  const dataCards = [
    {
      title: "Clientes",
      total: dataTotalUsuarios?.totalUsuarios,
      img: [
        <svg
          key={0}
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>,
      ],
    },
    {
      title: "Ventas",
      total: dataTotalPedidosPagos?.totalPedidosPagos,
      img: [
        <svg
          key={1}
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>,
      ],
    },
    {
      title: "Pedidos",
      total: dataTotalPedidos?.totalPedidos,
      img: [
        <svg
          key={2}
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>,
      ],
    },
    {
      title: "Productos",
      total: dataTotalProductos?.totalProductos,
      img: [ <MdOutlineSmartToy key={3} className="text-black w-8 h-8" />
        // <svg
        //   width="30"
        //   height="30"
        //   fill="none"
        //   viewBox="0 0 24 24"
        //   stroke="currentColor"
        //   className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        // >
        //   <path
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //     strokeWidth="2"
        //     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        //   ></path>
        // </svg>,
      ],
    },
  ];


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        {dataCards.map((data, i) => (
          <MainSalesCard props={data} key={i} />
        ))}
      </div>
    </>
  );
};

export default MainCards;
