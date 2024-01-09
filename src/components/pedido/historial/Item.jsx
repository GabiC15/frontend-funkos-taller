import Image from "next/image";

export default function Item({ producto }) {
  return (
    <>
      <div className="flex gap-3 h-28 md:h-32">
        <div className="basis-28 md:basis-32 min-w-[7rem] md:min-w-[8rem] rounded-md bg-black/20">
          <Image
            src={producto.images[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full drop-shadow-lg hover:scale-110 transition rounded-md"
            alt="Imagen Harry Poter"
          />
        </div>
        <div className="flex flex-col w-[23rem]">
          <h3 className="text-lg md:text-xl font-extrabold uppercase">
            {producto.title}
          </h3>
          <div className="mt-auto"></div>
          <div className="flex justify-between">
            <p className="text-sm font-normal">21/12/2023</p>
            <p className="text-sm font-normal">Pedido #123456</p>
          </div>
          <div className="flex justify-between mt-2 items-center">
            <p className="text-xl font-bold">$5500</p>
            <p className="text-sm font-normal underline">Ver factura</p>
          </div>
        </div>
      </div>
    </>
  );
}
