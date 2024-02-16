import { X } from "react-feather";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DeleteModal = ({ open, onClose, children, isDeleted, yesFunction }) => {
  const router = useRouter();
  const handleReload = () => {
    router.reload();
  }

  return (
    <>
      {!isDeleted && (
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
              <button
                className="text-white font-medium text-sm bg-black border-2 border-black hover:border-black/70 hover:bg-black/90 rounded-xl p-2 mx-3 transition-all duration-150"
                onClick={yesFunction}
              >
                Eliminar
              </button>
              <button className="text-white font-medium text-sm bg-indigo-600 border-2 border-indigo-600 hover:border-indigo-700 hover:bg-indigo-700 rounded-xl p-2 mx-3 transition-all duration-150">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleted && (
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
            {/* <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            >
              <X />
            </button> */}
            {children}
            <div className="flex justify-center">
              {/* <button
                className="text-white font-medium text-sm bg-black border-2 border-black hover:border-black/70 hover:bg-black/90 rounded-xl p-2 mx-3 transition-all duration-150"
                onClick={yesFunction}
              >
                Ok
              </button> */}
              <button 
              className="text-white font-medium text-sm bg-indigo-600 border-2 border-indigo-600 hover:border-indigo-700 hover:bg-indigo-700 rounded-xl p-3 mx-3 transition-all duration-150"
              onClick={handleReload}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
