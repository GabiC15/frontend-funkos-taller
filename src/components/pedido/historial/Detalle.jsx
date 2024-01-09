export default function Detalle() {
  return (
    <>
      <div className="flex flex-col w-full md:w-1/2 mt-7 md:mt-0">
        <h2 className="text-lg font-semibold">Detalle de compra</h2>
        <div className="flex justify-between mt-3">
          <p className="text-md font-normal">Producto x2</p>
          <p className="text-md font-normal">$10000</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-md font-normal">Envío</p>
          <p className="text-md font-normal">$5000</p>
        </div>
        <div className="h-[1.5px] w-full bg-white mt-3"></div>
        <div className="flex justify-between mt-2">
          <p className="text-md font-normal">Total</p>
          <p className="text-md font-normal">$15000</p>
        </div>
      </div>
    </>
  );
}
