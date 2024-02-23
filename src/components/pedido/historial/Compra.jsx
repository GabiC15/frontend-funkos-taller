import Info from "@/components/pedido/historial/Info";
import Detalle from "@/components/pedido/historial/Detalle";
import { paymentStatus } from "@/utils/payment-status";
import { GET_PEDIDO } from "@/services/apollo/queries/pedido";
import { useRouter } from "next/router";
import Loading from "@/components/producto/loading";
import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { UserContext } from "@/components/providers/UserProvider";

export default function Compra() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const { data: pedidoData, loading: loadingData } = useQuery(GET_PEDIDO, {
    variables: {
      id: Number.parseInt(router.query.id),
    },
  });

  const pedido = pedidoData?.pedido;
  const originalDate = pedido?.fecha;
  const replacedDate = originalDate?.replace(/-/g, "/"); // Replace all occurrences of '-' with '/'
  const usuario = pedido?.usuario;
  return (
    <>
      <div className="bg-gradient">
        <div className="max-w-screen-lg w-full flex min-h-[85vh] mx-auto py-10 px-6 md:px-0">
          {pedido ? (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Compra #{pedido.id}
              </h2>
              <p className="text-sm">
                Fecha: {pedido.fecha} -{" "}
                {!!pedido.pago
                  ? paymentStatus[pedido.pago.status]
                  : "El pago está pendiente"}
              </p>
              {user?.rol === "ADMIN" && (
                <p className="text-sm">
                  {usuario?.email} - {usuario?.nombres} {usuario?.apellidos}
                </p>
              )}
              <div className="flex flex-col md:flex-row justify-between mt-5">
                <Info pedido={pedido} />
                <Detalle pedido={pedido} />
              </div>
              <div className="w-full h-[1.5px] bg-white mt-12 hidden md:block"></div>

              {pedido.pago?.status === "approved" && (
                <div className="flex justify-between md:items-center mt-7 md:mt-5 gap-3">
                  {pedido.envio ? (
                    !pedido.envio?.entregado ? (
                      <p className="text-md font-semibold leading-tight">
                        Despacharemos tu producto en los próximos días
                        <br />
                        <span className="font-normal text-sm">
                          Te avisaremos por email
                        </span>
                      </p>
                    ) : (
                      <p className="text-md font-semibold leading-tight">
                        Tu pedido ya ha sido despachado por nuestro local el{" "}
                        {replacedDate}
                      </p>
                    )
                  ) : !pedido.despachado ? (
                    <p className="text-md font-semibold leading-tight">
                      Ya puedes pasar a retirar el producto por nuestro local
                    </p>
                  ) : (
                    <p className="text-md font-semibold leading-tight">
                      Tu pedido ha sido retirado por nuestro local el{" "}
                      {replacedDate}
                    </p>
                  )}

                  {pedido.envio && (
                    <div>
                      <p className="text-md">
                        {pedido.envio.direccion} - {pedido.envio.ciudad} (
                        {pedido.envio.codigoPostal})
                      </p>
                      <p className="text-sm leading-tight">
                        {pedido.envio.provincia.nombre}
                      </p>
                    </div>
                  )}
                </div>
              )}
              {pedido?.pago?.status !== "approved" && (
                <div className="flex justify-between md:items-center mt-7 md:mt-5 gap-3">
                  <p className="text-md font-semibold leading-tight">
                    El pago no se ha realizado correctamente
                  </p>
                </div>
              )}
            </div>
          ) : (
            <Loading className="m-auto" />
          )}
        </div>
      </div>
    </>
  );
}
