import { useState } from "react";
import { GET_CUPONES } from "@/services/apollo/queries/cupon";
import {
  UPDATE_CUPON,
} from "@/services/apollo/mutations/carga_cupon";
import { useMutation } from "@apollo/client";
import DeleteModal from "@/components/common/deleteModal";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export default function CardCupon({ cupon }) {
  const router = useRouter();
  const {id, nombre, porcentaje, validoDesde, validoHasta } = cupon;
  const [open, setOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const randomId = uuidv4();

  const [updateCupon, { data, loading, error }] = useMutation(
    UPDATE_CUPON,
    {
      onCompleted: (data) => {
        if (data) setIsDeleted(true);
      },
      refetchQueries: [{ query: GET_CUPONES }],
    },
  );

  const handleDelete = () => {
    setOpen(true);
  };

  const input = {
    estado: false,
    nombre: `DELETED_${nombre}_${id, randomId}`,
  };

  const handleCuponDelete = async () => {
    try {
      await updateCupon({
        variables: {
          id: cupon.id,
          input: { estado: Boolean(input.estado), nombre: input.nombre },
        },
      });
    } catch (error) {
      setIsDeleted(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-row md:flex-col mx-4 my-1 md:my-0 md:mx-2">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow md:p-6 dark:bg-gray-800/50 dark:border-gray-700">
          <div className="grid grid-rows-1 justify-end">
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
          </div>
          <h5 className="mb-4 text-xl font-medium md:font-bold text-white dark:text-white ">
            {nombre}
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
            <span className="text-6xl font-extrabold tracking-tight">
              {porcentaje}
            </span>
            <span className="text-3xl font-semibold">%</span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              off
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-300 ms-3">
                {validoDesde}
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-300 ms-3">
                {validoHasta}
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            onClick={() => {
              router.push(`/admin/carga_cupon/${cupon.id}`);
            }}
          >
            Editar
          </button>
        </div>
      </div>

      {open && (
        <DeleteModal
          open={open}
          onClose={() => setOpen(false)}
          yesFunction={handleCuponDelete}
          isDeleted={isDeleted}
        >
          <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">
            {/* <CheckCircle size={56} className="mx-auto text-green-500" /> */}
            {!isDeleted && (
              <div className="mx-auto my-4 w-72 ">
                <h3 className="text-lg font-black text-gray-800">
                  ¿Desea eliminar este cupón?
                </h3>
                <p className="text-sm text-gray-500 pt-5">
                  Si elimina este cupón no podra recuperarlo nuevamente.
                </p>
              </div>
            )}
            {isDeleted && (
              <div className="mx-auto my-4 w-72 ">
                <h3 className="text-lg font-black text-gray-800">
                  ¡Cupón eliminado!
                </h3>
                <p className="text-sm text-gray-500 pt-5">
                  El cupón ha sido eliminado exitosamente.
                </p>
              </div>
            )}
          </div>
        </DeleteModal>
      )}
    </>
  );
}
