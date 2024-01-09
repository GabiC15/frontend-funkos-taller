import ItemsPedido from "@/components/pedido/nuevo/ItemsPedido";
import DetallePedido from "@/components/pedido/nuevo/DetallePedido";

export default function NuevoPedido({ carrito }) {
  return (
    <>
      <div className="bg-gradient">
        <div className="container md:max-w-screen-xl mx-auto pt-10 pb-16 px-5 md:px-32">
          <h1 className="text-2xl md:text-3xl font-extrabold">Pedido</h1>
          <div className="flex flex-col md:flex-row mt-3 md:mt-4 justify-between">
            <ItemsPedido lineasCarrito={carrito.lineas_carrito} />
            <div className="w-full md:w-0.5 min-h-[0.1rem] md:min-h-full bg-white md:mx-10 my-5 md:my-0"></div>
            <DetallePedido />
          </div>
        </div>
      </div>
    </>
  );
}
