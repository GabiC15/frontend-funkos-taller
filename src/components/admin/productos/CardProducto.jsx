import Image from "next/image";
import { BiSolidEditAlt } from "react-icons/bi";
import { useRouter } from "next/router";

export default function CardFavorito({ producto }) {
  const { imagenes, titulo, descripcion, precio } = producto;
  const image = imagenes[0].path;
  const router = useRouter();
  return (
    <>
      <div className="bg-black/20 mt-2 p-4 flex flex-row rounded-[8px] justify-between mx-4 border-[1px] border-[#282828]">
        <div className="flex flex-row">
          <div className="bg-white/20 px-6 md:h-32 md:p-6 rounded-[18px] flex items-center">
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

          <div className="ml-4">
            <div>
              <a href="#">
                <h3 className="font-bold text-[0.9rem] max-w-[11.5rem]  sm:max-w-lg md:max-w-none md:text-xl uppercase pb-2">
                  {titulo}
                </h3>
              </a>

              <div className="text-xs mr-3 md:text-sm pb-5 lg:text-base max-w-[16rem] sm:max-w-md md:max-w-lg lg:max-w-4xl">
                <p className="text-slate-300 line-clamp-2">{descripcion}</p>
              </div>

              <div>
                <p className="mt-2 text-lg sm:text-xl md:text-2xl pb-5">
                  <b>${precio}</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1">
          <button className="h-6">
            <svg
              className="w-4 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 40"
              fill="none"
            >
              <path
                d="M36.8179 4.86647C37.8669 3.7532 37.8669 1.94823 36.8179 0.834955C35.769 -0.278318 34.0682 -0.278318 33.0193 0.834955L18.8023 15.9235L4.58537 0.834955C3.5364 -0.278318 1.83569 -0.278318 0.786725 0.834955C-0.262242 1.94823 -0.262242 3.7532 0.786725 4.86647L15.0037 19.955L0.786725 35.0435C-0.262242 36.1568 -0.262242 37.9618 0.786725 39.075C1.83569 40.1883 3.5364 40.1883 4.58537 39.075L18.8023 23.9865L33.0193 39.075C34.0682 40.1883 35.769 40.1883 36.8179 39.075C37.8669 37.9618 37.8669 36.1568 36.8179 35.0435L22.601 19.955L36.8179 4.86647Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="h-7"
            onClick={() => {
              router.push(`/admin/add_producto/${producto.id}`);
            }}
          >
            <BiSolidEditAlt className="w-full h-full" />
          </button>
        </div>
      </div>
    </>
  );
}
