import Layout from "@/components/common/layout";
import CardFunkoHistorial from "@/components/historial-compras/CardFunkoHistorial";
import Loading from "@/components/producto/loading";
import { GET_PEDIDOS } from "@/services/apollo/queries/pedido";
import { redirectRol } from "@/utils/redirect-rol";
import { useQuery } from "@apollo/client";

export default function HistorialPedidos() {
  const { data: pedidosData, loading: pedidosLoading } = useQuery(GET_PEDIDOS);

  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="container max-w-screen-lg mx-auto px-4 flex flex-col">
            <h1 className="text-xl md:text-3xl font-black mt-12 mb-2 md:mb-4 uppercase">
              Historial de compras
            </h1>
            <div className="grid grid-cols-1 gap-1 md:gap-2 mb-16">
              {pedidosData?.pedidos.map((compra, i) => (
                <CardFunkoHistorial compra={compra} key={i} />
              ))}
              {pedidosData?.pedidos.length === 0 && (
                <p>No hay compras disponibles</p>
              )}
              {pedidosLoading && <Loading className="mx-auto" />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["CLIENTE"]),
  };
}
