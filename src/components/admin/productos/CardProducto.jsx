import Image from "next/image";
import { BiSolidEditAlt } from "react-icons/bi";
import { useRouter } from "next/router";

export default function CardProducto({ producto }) {
  const { imagenes, titulo, descripcion, precio } = producto;
  const image = imagenes[0].path;
  const router = useRouter();

  return (
    <>
      <div className="bg-black/20 p-4 flex flex-row rounded-[8px] justify-between border-[1px] border-[#282828]">
        <div className="flex flex-row">
          <div className="bg-white/20 px-4 h-20 md:h-32 md:p-6 rounded-[18px] flex items-center">
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100vh"
              unoptimized
              className="cursor-pointer w-12 md:w-20 mx-auto scale-[1.6] md:scale-[1.7] hover:scale-[1.87] transition-all drop-shadow-lg hover:drop-shadow-2xl"
              alt={titulo}
            />
          </div>

          <div className="ml-4 flex flex-col">
            <div>
              <h3 className="font-bold text-xs max-w-[11.5rem] sm:max-w-lg md:max-w-none md:text-xl uppercase !leading-tight line-clamp-2">
                {titulo}
              </h3>
            </div>

            <div className="text-[0.6rem] mr-3 md:mt-1 md:text-sm lg:text-base max-w-[16rem] sm:max-w-md md:max-w-lg lg:max-w-4xl">
              <p className="text-slate-300 line-clamp-2 leading-tight">
                {descripcion}
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-md sm:text-xl md:text-2xl">
                <b>${precio}</b>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1">
          <button
            className="h-7"
            onClick={() => {
              router.push(`/admin/carga_producto/${producto.id}`);
            }}
          >
            <BiSolidEditAlt className="w-full h-full" />
          </button>
        </div>
      </div>
    </>
  );
}
