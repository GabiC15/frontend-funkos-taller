import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ValoracionDialog from "./CommentDialog";

export default function Item({ item, aprobado }) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <div className="flex gap-3 h-28 md:h-32">
        <div className="basis-28 md:basis-32 min-w-[7rem] md:min-w-[8rem] rounded-md bg-black/20">
          <Image
            src={item.producto.imagenes[0].path}
            width={0}
            height={0}
            sizes="75vw"
            unoptimized
            className="w-full drop-shadow-lg hover:scale-110 transition rounded-md"
            alt="Imagen Harry Poter"
          />
        </div>
        <div className="flex flex-col w-[23rem]">
          <div className="flex content-between">
            <h3 className="text-lg md:text-xl font-extrabold uppercase mr-auto">
              {item.producto.titulo}
            </h3>
            {aprobado && (
              <button
                className=" bg-black/20 min-w-[1.75rem] h-7 pr-0.5 rounded-lg"
                onClick={() => setOpenDialog(true)}
              >
                <FontAwesomeIcon
                  icon={faComment}
                  size="md"
                  className="text-white ml-1"
                />
              </button>
            )}
          </div>
          <div className="mt-auto"></div>
          <div className="flex justify-between">
            <p className="text-sm font-normal">Cantidad: x{item.cantidad}</p>
            <p className="text-sm font-normal">Código #{item.producto.id}</p>
          </div>
          <div className="flex justify-between mt-2 items-center">
            <p className="text-xl font-bold">${item.precioProducto}</p>
            <Link
              className="text-sm font-normal underline"
              href={`/productos/${item.producto.id}`}
            >
              Ver producto
            </Link>
          </div>
        </div>

        <ValoracionDialog
          producto={item.producto}
          show={openDialog}
          setShow={setOpenDialog}
        />
      </div>
    </>
  );
}
