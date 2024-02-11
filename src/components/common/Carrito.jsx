import { useContext } from "react";
import { CarritoContext } from "@/components/providers/CarritoProvider";
import ItemCarrito from "@/components/common/ItemCarrito";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_LINEAS_CARRITO,
  GET_LINEAS_CARRITO,
  GET_LINEA_CARRITO,
} from "@/services/apollo/queries/linea-carrito";
import Loading from "../producto/loading";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Carrito() {
  const { show, showCarrito } = useContext(CarritoContext);

  const { data } = useQuery(GET_LINEAS_CARRITO);
  const [deleteLineasCarrito, { loading: deleteLineasLoading }] = useMutation(
    DELETE_LINEAS_CARRITO,
    {
      refetchQueries: [GET_LINEAS_CARRITO, GET_LINEA_CARRITO],
    }
  );

  return (
    <>
      <div
        id="drawer-navigation"
        className={`flex flex-col fixed top-0 right-0 z-40 w-full md:w-80 h-screen p-6 overflow-y-auto transition-transform bg-chineseBlack ${
          show ? "+" : ""
        }translate-x-full`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex justify-between">
          <h5
            id="drawer-navigation-label"
            className="text-2xl font-semibold text-white"
          >
            Carrito
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className=""
            onClick={() => showCarrito(false)}
          >
            <FontAwesomeIcon size="md" icon={faX} className="mt-0.5" />
          </button>
        </div>
        <div className="flex flex-col gap-3 py-4">
          {data?.lineasCarrito.length !== 0 ? (
            data?.lineasCarrito.map((lc) => (
              <ItemCarrito key={lc.id} itemCarrito={lc} />
            ))
          ) : (
            <p className="text-sm font-semibold">
              Aún no has agregado ningún producto al carrito
            </p>
          )}
        </div>
        {data?.lineasCarrito.length !== 0 && (
          <div className="flex justify-between mt-auto">
            <button
              className="bg-white w-32 text-chineseBlack font-bold text-sm h-10 rounded-lg"
              onClick={() => deleteLineasCarrito()}
            >
              {!deleteLineasLoading ? "Vaciar carrito" : <Loading />}
            </button>
            <Link
              href="/usuario/pedido"
              onClick={() => showCarrito(false)}
              className="bg-violet w-32 flex justify-center items-center text-white font-bold text-sm h-10 rounded-lg"
            >
              Comprar
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
