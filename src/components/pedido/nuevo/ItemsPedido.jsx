import Loading from "@/components/producto/loading";
import { GET_LINEAS_CARRITO } from "@/services/apollo/queries/linea-carrito";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ItemsPedido() {
  const router = useRouter();
  const { data: lineasCarritoData } = useQuery(GET_LINEAS_CARRITO, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (lineasCarritoData?.lineasCarrito.length === 0) router.push("/");
  }, [lineasCarritoData, router]);

  console.log(lineasCarritoData);

  return (
    <>
      <div className="w-full">
        <h2 className="text-xl font-bold">Productos</h2>

        <div className="flex flex-col gap-4 mt-4">
          {lineasCarritoData ? (
            lineasCarritoData?.lineasCarrito.map((linea) => (
              <div className="flex gap-3" key={linea.id}>
                <div className="basis-28 min-w-[7rem] h-28 rounded-md bg-black/20">
                  <Image
                    src={linea.producto.imagenes[0].path}
                    width={0}
                    height={0}
                    sizes="100vw"
                    unoptimized
                    className="w-full drop-shadow-lg hover:scale-110 transition rounded-md"
                    alt="Imagen Harry Poter"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-base md:text-lg font-extrabold uppercase">
                    {linea.producto.titulo}
                  </h3>
                  <p className="text-xs font-normal mt-0.5">
                    #{linea.producto.id}
                  </p>
                  <p className="text-xs font-normal mt-1">
                    Cantidad: x{linea.cantidad}
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold mt-auto md:mt-0">
                    ${linea.producto.precio}
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <div className="m-auto">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
