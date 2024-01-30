import { X } from "react-feather";
import { FaArrowRightLong } from "react-icons/fa6";

const Modal = ({ open, onClose, children }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 flex justify-center items-center transition-colors ${
          open ? "visible bg-black/20" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-xl shadow p-5 md:p-6 ml-14 md:mx-auto transition-all mx-auto ${
            open ? "scale-75 md:scale-100 opacity-100" : "scale-125 opacity-0}"
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
            <button className="text-white font-medium text-sm bg-black border-2 border-black hover:border-black/70 hover:bg-black/90 rounded-xl p-2 mx-5 transition-all duration-150">Agregar otro</button>
            <button className="text-black font-medium text-sm bg-teal-400 border-2 border-teal-400 hover:border-teal-500/70 hover:bg-teal-500/70 rounded-xl p-2 mx-5 transition-all duration-150">Ver producto</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
