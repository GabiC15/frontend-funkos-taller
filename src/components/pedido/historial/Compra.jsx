import Info from "@/components/pedido/historial/Info";
import Detalle from "@/components/pedido/historial/Detalle";

export default function Compra() {
  return (
    <>
      <div className="bg-gradient">
        <div className="max-w-screen-lg mx-auto py-10 md:py-12 px-6 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold">Compra #12345</h2>
          <div className="flex flex-col md:flex-row justify-between mt-5">
            <Info />
            <Detalle />
          </div>
          <div className="w-full h-[1.5px] bg-white mt-12 hidden md:block"></div>
          <div className="flex justify-between md:items-center mt-7 md:mt-5 gap-3">
            <p className="text-md font-semibold">
              Entregado - Lo retiraste el 6 de septiembre
            </p>
            <div className="bg-chineseBlack h-min px-7 py-1.5 rounded-lg text-md font-semibold whitespace-nowrap">
              Da tu opinión
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
