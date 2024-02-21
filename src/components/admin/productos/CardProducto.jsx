import { useEffect, useState } from "react";
import Image from "next/image";
import { BiSolidEditAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { UPDATE_PRODUCTO } from "@/services/apollo/mutations/carga_producto";
import { GET_PRODUCTOS } from "@/services/apollo/queries/producto";
import { useMutation } from "@apollo/client";
import DeleteModal from "@/components/common/deleteModal";

export default function CardProducto({ producto, refetch }) {
  const { imagenes, titulo, descripcion, precio } = producto;
  const [open, setOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const image = imagenes[0].path;
  const router = useRouter();

  const [updateProducto, { data, loading, error }] = useMutation(
    UPDATE_PRODUCTO,
    {
      onCompleted: (data) => {
        setIsDeleted(true);
      },
      refetchQueries: [{ query: GET_PRODUCTOS }],
    }
  );

  const handleDelete = () => {
    setOpen(true);
  };

  const input = {
    estado: false,
  };

  useEffect(() => {
    if (isDeleted) {
      refetch();
    }
  }, [isDeleted]);

  const handleProductoDelete = async () => {
    try {
      await updateProducto({
        variables: {
          id: producto.id,
          input: { estado: Boolean(input.estado) },
        },
      });
    } catch (error) {
      setIsDeleted(false);
      console.log(error);
    }
  };

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
          <button className="h-5" onClick={handleDelete}>
            <svg
              className="w-4 md:w-4"
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
              router.push(`/admin/carga_producto/${producto.id}`);
            }}
          >
            <BiSolidEditAlt className="w-full h-full" />
          </button>
        </div>
      </div>
      {open && (
        <DeleteModal
          open={open}
          onClose={() => setOpen(false)}
          yesFunction={handleProductoDelete}
          isDeleted={isDeleted}
        >
          <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">
            {/* <CheckCircle size={56} className="mx-auto text-green-500" /> */}
            {!isDeleted && (
              <div className="mx-auto my-4 w-72 ">
                <h3 className="text-lg font-black text-gray-800">
                  ¿Desea eliminar este producto?
                </h3>
                <p className="text-sm text-gray-500 pt-5">
                  Si elimina este producto no podra recuperarlo nuevamente.
                </p>
              </div>
            )}
            {isDeleted && (
              <div className="mx-auto my-4 w-72 ">
                <h3 className="text-lg font-black text-gray-800">
                  ¡Producto eliminado!
                </h3>
                <p className="text-sm text-gray-500 pt-5">
                  El producto ha sido eliminado exitosamente.
                </p>
              </div>
            )}
          </div>
        </DeleteModal>
      )}
    </>
  );
}
