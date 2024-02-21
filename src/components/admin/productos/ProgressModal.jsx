import { X } from "react-feather";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProgressModal = ({
  open,
  onClose,
  children,
  progress,
  word,
  routeNew,
  routeView,
  handleClearForm,
}) => {
  const router = useRouter();
  const handleClickAgregar = () => {
    handleClearForm();
    onClose();
  };

  // const handleClickVerProducto = (e) => {
  //   router.push(`${(routeNew, routeView)}`);
  // };

  return (
    <>
      {progress === 0 && (
        <div
          onClick={onClose}
          className={`fixed inset-0 flex justify-center items-center transition-colors ${
            open ? "visible bg-black/30" : "invisible"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-xl shadow p-5 md:p-6 ml-14 md:mx-auto transition-all mx-auto ${
              open
                ? "scale-75 md:scale-100 opacity-100"
                : "scale-125 opacity-0}"
            }`}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            >
              <X />
            </button>
            <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">
              <div className="mx-auto my-4 w-72 ">
                <h3 className="text-lg font-black text-gray-800">
                  ¡Se ha producido un error al cargar el {word}!
                </h3>
                <div className="flex mx-20 justify-between">
                  {/* <p className="text-sm text-gray-500 pt-5">
                    Error: 
                  </p> */}
                  {/* <p className="text-sm text-gray-500 pt-5">
                    {progress}%
                  </p> */}
                </div>
                <p className="text-sm text-gray-500 pt-5">
                  Por favor intente nuevamente
                </p>
              </div>
            </div>
            <div className="flex justify-between"></div>
          </div>
        </div>
      )}

      {progress >= 1 && progress <= 99 && (
        <div
          onClick={onClose}
          className={`fixed inset-0 flex justify-center items-center transition-colors ${
            open ? "visible bg-black/30" : "invisible"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-xl shadow p-5 md:p-6 ml-14 md:mx-auto transition-all mx-auto ${
              open
                ? "scale-75 md:scale-100 opacity-100"
                : "scale-125 opacity-0}"
            }`}
          >
            <button
              onClick={onClose}
              className="invisible absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            >
              <X />
            </button>
            <div className="text-center md:w-72 md:mx-12 py-2 mx-4 w-72">
              <div className="mx-auto my-4 w-72 ">
                <h3 className="text-lg font-black text-gray-800">
                  ¡Cargando {word}...!
                </h3>
                <div className="flex mx-20 justify-between">
                  <p className="text-sm text-gray-500 pt-5">Subiendo ...</p>
                  <p className="text-sm text-gray-500 pt-5">{progress}%</p>
                </div>
                <p className="text-sm text-gray-500 pt-5">
                  Por favor aguarde un momento
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              {/* <button
                className="text-white font-medium text-sm bg-black border-2 border-black hover:border-black/70 hover:bg-black/90 rounded-xl p-2 mx-3 transition-all duration-150"
                onClick={handleClickAgregar}
              >
                Agregar nuevo
              </button>
              <button
                className="text-white font-medium text-sm bg-indigo-600 border-2 border-indigo-600 hover:border-indigo-700 hover:bg-indigo-700 rounded-xl p-2 mx-3 transition-all duration-150"
                onClick={handleClickVerProducto}
              >
                Ver producto
              </button> */}
            </div>
          </div>
        </div>
      )}

      {progress === 100 && (
        <div
          onClick={onClose}
          className={`fixed inset-0 flex justify-center items-center transition-colors ${
            open ? "visible bg-black/30" : "invisible"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-xl shadow p-5 md:p-6 ml-14 md:mx-auto transition-all mx-auto ${
              open
                ? "scale-75 md:scale-100 opacity-100"
                : "scale-125 opacity-0}"
            }`}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            >
              <X />
            </button>
            {children}
            <div className="flex justify-between">
              <Link href={routeNew}>
                <button
                  className="text-white font-medium text-sm bg-black border-2 border-black hover:border-black/70 hover:bg-black/90 rounded-xl p-2 mx-3 transition-all duration-150"
                  onClick={handleClickAgregar}
                >
                  Agregar nuevo
                </button>
              </Link>
              <Link href={(routeNew, routeView)}>
                <button
                  className="text-white font-medium text-sm bg-indigo-600 border-2 border-indigo-600 hover:border-indigo-700 hover:bg-indigo-700 rounded-xl p-2 mx-3 transition-all duration-150"
                  // onClick={handleClickVerProducto}
                >
                  Ver {word === "cupón" ? "cupones" : word}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressModal;
