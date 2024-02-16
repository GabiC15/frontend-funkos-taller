import Producto from "@/components/home/Producto";
import Link from "next/link";

export default function Recientes({ funkos }) {
  return (
    <>
      <div className="bg-gradient">
        <div className="container mx-auto flex flex-col text-center items-center">
          <h2 className="text-4xl font-black mt-20">
            MÁS QUE UN COLLECIONABLE
          </h2>
          <h3 className="text-2xl font-semibold mt-1">
            Tener todos los personajes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-8 mx-4">
            {funkos.map((d, i) => (
              <Producto producto={d} key={i} />
            ))}
          </div>
          <Link
            href="/productos"
            className="bg-chineseBlack my-10 py-2 px-14 rounded-full hover:bg-white/20 transition-colors"
          >
            <p className="text-lg font-semibold">Ver todos los productos</p>
          </Link>
        </div>
      </div>
    </>
  );
}
