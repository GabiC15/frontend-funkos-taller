import Sidebar from "@/components/common/sidebar";
import CardFunkoHistorial from "@/components/historial-compras/CardFunkoHistorial";
import Loading from "@/components/producto/loading";
import { GET_PEDIDOS } from "@/services/apollo/queries/pedido";
import { useQuery } from "@apollo/client";

export default function PedidosSection() {
  const { data: pedidosData, loading: pedidosLoading } = useQuery(GET_PEDIDOS);

  return (
    <>
      <div className="flex bg-gradient min-h-screen">
        <Sidebar />

        <div className="container mx-8 flex flex-col ml-20 md:ml-72">
          <h1 className="text-xl md:text-3xl font-black mt-12 mb-2 md:mb-4 uppercase">
            Pedidos
          </h1>
          <div className="grid grid-cols-1 gap-1 md:gap-2 mb-16">
            {pedidosLoading && <Loading className="mx-auto" />}
            {pedidosData?.pedidos.map((compra, i) => (
              <CardFunkoHistorial compra={compra} key={i} />
            ))}
            {pedidosData?.pedidos.length === 0 && (
              <p>No hay comrpas disponibles</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
