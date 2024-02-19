import {
  faMinus,
  faPlus,
  faShoppingCart,
  faStar as faStarSolid,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_LINEA_CARRITO,
  DELETE_LINEA_CARRITO,
  GET_LINEAS_CARRITO,
  GET_LINEA_CARRITO,
} from "@/services/apollo/queries/linea-carrito";
import { useRouter } from "next/router";
import { CarritoContext } from "@/components/providers/CarritoProvider";
import Breadcrumb from "@/components/producto/breadcrumb";
import Image from "next/image";
import Loading from "./loading";
import {
  GET_FAVORITO,
  CREATE_FAVORITO,
  DELETE_FAVORITO,
} from "@/services/apollo/queries/favoritos";
import { urlWithSize } from "@/utils/url-with-size";
import { UserContext } from "../providers/UserProvider";
import { IoSparklesOutline } from "react-icons/io5";

export default function Detalle({ funko }) {
  const router = useRouter();
  const [image, setImage] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const { showCarrito } = useContext(CarritoContext);
  const { user } = useContext(UserContext);

  const { data, refetch } = useQuery(GET_LINEA_CARRITO, {
    variables: { productoId: funko.id },
  });

  const { data: favoritoData } = useQuery(GET_FAVORITO, {
    variables: { productoId: funko.id },
  });

  const [createFavorito] = useMutation(CREATE_FAVORITO, {
    refetchQueries: [GET_FAVORITO],
  });
  const [deleteFavorito] = useMutation(DELETE_FAVORITO, {
    refetchQueries: [GET_FAVORITO],
  });

  const [addLineaCarrito, { loading: loadingCreate, data: dataCreate }] =
    useMutation(CREATE_LINEA_CARRITO, { refetchQueries: [GET_LINEAS_CARRITO] });
  const [deleteLineaCarrito, { loading: loadingDelete, data: dataDelete }] =
    useMutation(DELETE_LINEA_CARRITO, { refetchQueries: [GET_LINEAS_CARRITO] });

  useEffect(() => {
    refetch({ productoId: funko.id });
  }, [dataCreate, dataDelete, refetch, funko.id]);

  useEffect(() => {
    if (dataCreate) showCarrito(true);
  }, [dataCreate, showCarrito]);

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-8">
        <div className="flex flex-col px-4 md:px-0">
          <div className="md:hidden">
            <Breadcrumb producto={funko} />
          </div>
          <div className="w-full md:w-96 h-min md:h-96 mt-3 md:mt-0 bg-black/20 rounded-md overflow-hidden">
            <Image
              src={urlWithSize(funko.imagenes[image].path, 500, 500)}
              width={0}
              height={0}
              unoptimized
              priority
              className="w-full drop-shadow-lg hover:scale-110 transition-transform rounded-md"
              alt={funko.titulo}
            />
          </div>
          <div className="flex gap-3 mt-3">
            {funko.imagenes.map((img, i) => (
              <div
                className={`w-20 h-20 rounded-md hover:bg-black/20 transition-colors ${
                  i == image
                    ? "bg-black/20 border border-chineseBlack"
                    : "bg-black/10"
                }`}
                key={i}
                onClick={() => setImage(i)}
              >
                <Image
                  src={urlWithSize(img.path, 100, 100)}
                  width={0}
                  height={0}
                  unoptimized
                  priority
                  sizes="100vw"
                  className="w-full drop-shadow-lg hover:scale-110 transition rounded-md"
                  alt={funko.titulo}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[26rem] px-4 md:px-0">
          <div className="hidden md:block">
            <Breadcrumb producto={funko} />
          </div>

          <h1 className="text-2xl md:text-3xl font-black uppercase md:mt-2">
            {funko.titulo}
          </h1>

          <p className="mt-1 text-sm">{funko.descripcion}</p>

          <div className="flex gap-4 items-center mt-5">
            {funko?.caracteristica && (
              <div className="flex gap-3">
                <IoSparklesOutline className="text-2xl" />
                <p className="font-semibold mt-[1px]">
                  {funko.caracteristica.nombre}
                </p>
              </div>
            )}

            <div className="flex gap-1 mb-1">
              <FontAwesomeIcon
                icon={faStarSolid}
                className="text-yellow-500 text-2xl"
              />
              <FontAwesomeIcon
                icon={faStarSolid}
                className="text-yellow-500 text-2xl"
              />
              <FontAwesomeIcon
                icon={faStarSolid}
                className="text-yellow-500 text-2xl"
              />
              <FontAwesomeIcon
                icon={faStarSolid}
                className="text-yellow-500 text-2xl"
              />
              <FontAwesomeIcon
                icon={faStarRegular}
                className="text-yellow-500 text-2xl"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-5">
            <h3 className="text-3xl font-bold">${funko.precio}</h3>
            {user?.rol !== "ADMIN" && (
              <button
                onClick={() =>
                  user
                    ? favoritoData?.favorito
                      ? deleteFavorito({
                          variables: { productoId: funko.id },
                        })
                      : createFavorito({
                          variables: { productoId: funko.id },
                        })
                    : router.push("/auth/login", {
                        query: {
                          redirectTo: `/productos/${funko.id}`,
                        },
                      })
                }
              >
                <FontAwesomeIcon
                  icon={favoritoData?.favorito ? faHeartSolid : faHeartRegular}
                  className={`text-3xl ${
                    favoritoData?.favorito ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
            )}
          </div>

          {user?.rol !== "ADMIN" && (
            <div className="flex gap-2 mt-5">
              {!data?.lineaCarrito && (
                <div className="bg-black/20 flex items-center rounded-lg">
                  <button
                    onClick={
                      cantidad > 1 ? () => setCantidad(cantidad - 1) : () => {}
                    }
                  >
                    <FontAwesomeIcon
                      className="text-white text-lg mt-1 px-1.5"
                      icon={faMinus}
                    />
                  </button>
                  <div className="h-full flex items-center bg-chineseBlack px-4 rounded-lg">
                    <p className="text-lg">{cantidad}</p>
                  </div>
                  <button
                    onClick={
                      cantidad < 9 ? () => setCantidad(cantidad + 1) : () => {}
                    }
                  >
                    <FontAwesomeIcon
                      className="text-white text-lg mt-1 px-1.5"
                      icon={faPlus}
                    />
                  </button>
                </div>
              )}
              <button
                className="w-full h-10 bg-chineseBlack rounded-lg flex items-center justify-center"
                onClick={() =>
                  user
                    ? data?.lineaCarrito
                      ? deleteLineaCarrito({
                          variables: { productoId: funko.id },
                        })
                      : addLineaCarrito({
                          variables: {
                            input: { cantidad, productoId: funko.id },
                          },
                        })
                    : router.push("/auth/login", {
                        query: {
                          redirectTo: `/productos/${funko.id}`,
                        },
                      })
                }
              >
                {!loadingCreate &&
                  !loadingDelete &&
                  (data?.lineaCarrito
                    ? "Quitar del carrito"
                    : "Agregar al carrito")}

                {(loadingCreate || loadingDelete) && <Loading />}
              </button>

              <button
                className="min-w-[3rem] bg-chineseBlack rounded-lg"
                onClick={() => router.push("/usuario/pedido")}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-white text-xl mt-1"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
