import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export default function CardFunkoHistorial({ compra }) {
  const cantidadProductos = compra.itemsPedido
    .map((item) => item.cantidad)
    .reduce((acc, cur) => acc + cur);
  const { user } = useContext(UserContext);

  return (
    <>
      <Link
        className="bg-black/20 mt-2 p-3 md:p-4 flex flex-col gap-4 rounded-[8px] align-center border-[1px] border-[#282828]"
        href={`/usuario/historial/${compra.id}`}
      >
        <>
          <div className="flex flex-row">
            <div className="bg-white/20 px-3 md:h-min md:p-5 rounded-lg flex items-center">
              <Image
                src={compra.itemsPedido[0].producto.imagenes[0].path}
                width={0}
                height={0}
                sizes="100vh"
                unoptimized
                className="cursor-pointer w-6 md:w-9 mx-auto scale-[1.6] md:scale-[1.7] hover:scale-[1.87] transition-all drop-shadow-lg hover:drop-shadow-2xl"
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
                    <p>x{cantidadProductos} productos</p>
                  ) : (
                    <p>
                      Usuario: {user?.nombres} {user?.apellidos}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button className="bg-chineseBlack ml-auto text-xs md:text-base my-auto w-min h-min px-4 py-2 rounded-lg whitespace-nowrap">
              Mas detalles
            </button>
          </div>
        </>
      </Link>
    </>
  );
}
