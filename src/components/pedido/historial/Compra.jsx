import Info from "@/components/pedido/historial/Info";
import Detalle from "@/components/pedido/historial/Detalle";
import { paymentStatus } from "@/utils/payment-status";

export default function Compra({ pedido }) {
  const cancelled = !!pedido.pago;
  return (
    <>
      <div className="bg-gradient">
        <div className="max-w-screen-lg min-h-[70vh] mx-auto py-10 px-6 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold">
            Compra #{pedido.id}
          </h2>
          <p className="text-sm">
            Fecha: {pedido.fecha} -{" "}
            {cancelled
              ? paymentStatus[pedido.pago.status]
              : "El pago ha sido cancelado por el usuario"}
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-5">
            <Info pedido={pedido} />
            <Detalle pedido={pedido} />
          </div>
          <div className="w-full h-[1.5px] bg-white mt-12 hidden md:block"></div>

          {pedido.pago?.status === "approved" && (
            <div className="flex justify-between md:items-center mt-7 md:mt-5 gap-3">
              {pedido.envio ? (
                <p className="text-md font-semibold leading-tight">
                  Despacharemos tu producto en los próximos días
                  <br />
                  <span className="font-normal text-sm">
                    Te avisaremos por email
                  </span>
                </p>
              ) : (
                <p className="text-md font-semibold leading-tight">
                  Ya puedes pasar a retirar el producto por nuestro local
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
        </div>
      </div>
    </>
  );
}
