import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ItemCarrito({ itemCarrito }) {
  const { producto } = itemCarrito;
  return (
    <>
      <Link className="flex gap-3" href={`/productos/${producto.id}`}>
        <div className="bg-fillGradient rounded-lg">
          <Image
            src={producto.imagenes[0].path}
            width={0}
            height={0}
            sizes="4.5rem"
            unoptimized
            className="min-w-[4.5rem] drop-shadow-lg hover:scale-110 transition rounded-md"
            alt="Imagen Harry Poter"
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="flex items-start justify-between gap-1">
            <h6 className="font-bold text-md leading-tight line-clamp-2">
              {producto.titulo}
            </h6>
          </div>

          <div className="flex justify-between">
            <p>${producto.precio}</p>
            <p>Cantidad: {itemCarrito.cantidad}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
