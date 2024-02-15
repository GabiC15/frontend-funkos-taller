export default function Detalle({ pedido }) {
  const subtotal = pedido.itemsPedido
    .map((item) => item.precioProducto * item.cantidad)
    .reduce((acc, cur) => acc + cur);

  const descuento = ((pedido?.cupon?.porcentaje ?? 0) / 100) * subtotal;
  const envio = pedido.envio?.costo ?? 0;
  const total = subtotal - descuento + envio;

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
      </div>
    </>
  );
}
