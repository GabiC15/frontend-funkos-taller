import { useContext } from "react";
import { UserContext } from "@/components/providers/UserProvider";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PEDIDO } from "@/services/apollo/mutations/pedido";
import { GET_PEDIDOS } from "@/services/apollo/queries/pedido";
import { UPDATE_ENVIO } from "@/services/apollo/mutations/envio";
import { GET_ENVIOS } from "@/services/apollo/queries/envio";

export default function Detalle({ pedido }) {
  const { user } = useContext(UserContext);
  const subtotal = pedido.itemsPedido
    .map((item) => item.precioProducto * item.cantidad)
    .reduce((acc, cur) => acc + cur);

  const descuento = ((pedido?.cupon?.porcentaje ?? 0) / 100) * subtotal;
  const envio = pedido.envio?.costo ?? 0;
  const total = subtotal - descuento + envio;

  const [updatePedido, { data: updatedPedido, loading: updatePedidoLoading }] =
    useMutation(UPDATE_PEDIDO, { refetchQueries: [{query: GET_PEDIDOS}]}
      );

  const [updateEnvio, { data: updatedEnvio, loading: updateEnvioLoading }] =
    useMutation(UPDATE_ENVIO, { refetchQueries: [{query: GET_ENVIOS}],}
      );

  const handleClickEntrega = () => {
    if (user.rol === "ADMIN") {
      handleUpdatePedido();
      pedido.envio && handleUpdateEnvio();
    }
  };

  const handleUpdatePedido = async () => {
    try {
      const date = new Date();
      date.setMonth(date.getMonth() + 1);
      const dateFormatted = `${date.getFullYear()}-${
        date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
      }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
      await updatePedido({
        variables: {
          id: pedido.id,
          input: {
            fecha: dateFormatted,
            despachado: true
          },
        },
      });
    } catch (error) {
      console.error("Error in handleUpdatePedido:", error);
    }
  };

  const handleUpdateEnvio = async () => {
    try {
      await updateEnvio({
        variables: {
          id: pedido.envio?.id,
          input: {
            entregado: true,
          },
        },
      });
    } catch (error) {
      console.error("Error in handleUpdateEnvio:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full md:w-1/2 mt-7 md:mt-0">
        <h2 className="text-lg font-semibold">Detalle de compra</h2>
        <div className="flex justify-between mt-3">
          <p className="text-md font-normal">Subtotal</p>
          <p className="text-md font-normal">${subtotal}</p>
        </div>
        {pedido.cupon && (
          <div className="flex justify-between mt-3">
            <p className="text-md font-normal">
              Cupón <span className="italic">{pedido.cupon.nombre}</span>
            </p>
            <p className="text-md font-normal">-${descuento}</p>
          </div>
        )}
        {pedido.envio && (
          <div className="flex justify-between mt-3">
            <p className="text-md font-normal">Envío</p>
            <p className="text-md font-normal">${envio}</p>
          </div>
        )}
        <div className="h-[1.5px] w-full bg-white mt-3"></div>
        <div className="flex justify-between mt-2">
          <p className="text-md font-normal">Total</p>
          <p className="text-md font-normal">${total}</p>
        </div>
        {user?.rol === "ADMIN" && pedido?.pago?.status === "approved" && (
          <button
            className="bg-chineseBlack text-xs mt-5 md:text-base w-min h-min px-4 py-2 rounded-lg whitespace-nowrap"
            onClick={handleClickEntrega}
          >
            {(pedido.envio?.entregado || !pedido.envio) && pedido.despachado
              ? "Pedido entregado"
              : "Entregar pedido"}
          </button>
        )}
      </div>
    </>
  );
}
