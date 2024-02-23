import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export default function CardFunkoHistorial({ compra }) {
  const cantidadProductos = compra.itemsPedido
    .map((item) => item.cantidad)
    .reduce((acc, cur) => acc + cur);
  const { user } = useContext(UserContext);
  const usuario = compra?.usuario;

  return (
    <>
      <div className="bg-black/20 mt-2 p-3 md:p-4 flex flex-col gap-4 rounded-[8px] align-center border-[1px] border-[#282828]">
        <>
          <div className="flex flex-row justify-between">
            <div className="flex">
              <div className="bg-white/20 px-3 md:h-min md:p-5 rounded-lg flex items-center">
                <Image
                  src={compra.itemsPedido[0].producto.imagenes[0].path}
                  width={0}
                  height={0}
                  sizes="100vh"
                  unoptimized
                  className=" w-6 md:w-9 mx-auto scale-[1.6] md:scale-[1.7] transition-all drop-shadow-lg hover:drop-shadow-2xl"
                  alt={compra.itemsPedido[0].producto.titulo}
                />
              </div>

              <div className="ml-4 lg:mr-3">
                <div>
                  <p>
                    <h3 className="font-bold text-xs max-w-[11.5rem] sm:max-w-lg md:max-w-none md:text-lg uppercase">
                      Compra #{compra.id} - {compra.fecha}
                    </h3>
                  </p>
                  <div className="text-xs mr-3 md:text-sm lg:text-base max-w-[16rem] sm:max-w-md md:max-w-lg lg:max-w-4xl text-slate-200 line-clamp-2">
                    <p>
                      {compra?.envio ? "Envío a domicilio" : "Retiro en local"}
                    </p>
                    {user?.rol === "CLIENTE" ? (
                      <div>
                        <p>x{cantidadProductos} productos</p>
                      </div>
                    ) : (
                      <p>
                        Usuario: {usuario?.nombres} {usuario?.apellidos}
                      </p>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex mx-auto my-auto block invisible absolute md:visible md:relative">
              <span
                className={`px-2 py-1 font-base md:font-semibold leading-tight text-xs whitespace-nowrap ${
                  compra.despachado
                    ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                    : "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700"
                } rounded-full`}
              >
                {" "}
                {compra.despachado ? "Entregado" : "Sin entregar"}
              </span>
            </div>
            <div className="md:flex justify-between">
            <div className="mx-auto mb-2 ml-2 md:ml-0 md:my-auto block visible relative md:invisible md:absolute">
                <span
                  className={`px-2 py-0 font-base md:font-semibold leading-tight text-xs whitespace-nowrap ${
                    compra.despachado
                      ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 ml-1 md:ml-0"
                      : "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700"
                  } rounded-full`}
                >
                  {" "}
                  {compra.despachado ? "Entregado" : "Sin entregar"}
                </span>
              </div>
            <Link
                href={`/usuario/historial/${compra.id}`}
                className="my-auto ml-auto"
              >
                <button className="bg-chineseBlack  text-xs md:text-base w-min h-min px-4 py-2 rounded-lg whitespace-nowrap z-10">
                  Mas detalles
                </button>
              </Link>
          

            
            </div>
          </div>
        </>
      </div>
    </>
  );
}
