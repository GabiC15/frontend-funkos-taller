import { X } from "react-feather";
import { useRouter } from "next/router";

const Modal = ({ open, onClose, children, producto_id }) => {
  const router = useRouter();
  const handleClickAgregar = () => {
    router.reload("/admin/add_producto/nuevo");
  };

  const handleClickVerProducto = (e) => {
    router.push(`/productos/${producto_id}`);
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 flex justify-center items-center transition-colors ${
          open ? "visible bg-black/30" : "invisible"
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
            <button
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
