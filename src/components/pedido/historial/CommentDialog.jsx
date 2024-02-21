import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_VALORACION,
  GET_VALORACION,
} from "@/services/apollo/queries/valoracion";
import StarsPicker from "./StarsPicker";
import Image from "next/image";
import Loading from "@/components/producto/loading";
import { UserContext } from "@/components/providers/UserProvider";

export default function ValoracionDialog({ producto, show, setShow }) {
  const cancelButtonRef = useRef(null);
  const [stars, setStars] = useState(0);
  const [comentario, setComentario] = useState();
  const { user } = useContext(UserContext);

  const [createValoracion, { data: createValData, loading: createValLoading }] =
    useMutation(CREATE_VALORACION, { refetchQueries: [GET_VALORACION] });

  const { data: valoracionData } = useQuery(GET_VALORACION, {
    variables: { productoId: producto.id, usuarioId: user?.id },
  });

  const onSubmit = async () => {
    await createValoracion({
      variables: {
        input: {
          productoId: producto.id,
          cantidadEstrellas: stars,
          texto: comentario,
        },
      },
    });
  };

  useEffect(() => {
    if (valoracionData?.valoracion) {
      const { cantidadEstrellas, texto } = valoracionData.valoracion;
      setStars(cantidadEstrellas);
      setComentario(texto);
    }
  }, [valoracionData]);

  useEffect(() => {
    setShow(false);
  }, [createValData, setShow]);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setShow(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <Image
                        src={producto.imagenes[0].path}
                        width={0}
                        height={0}
                        sizes="10rem"
                        unoptimized
                        className="w-full drop-shadow-lg hover:scale-110 transition rounded-md"
                        alt="Imagen Harry Poter"
                      />
                    </div>
                    <div className="mt-3 w-full text-center sm:mx-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {!valoracionData?.valoracion
                          ? "Dejá una valoración"
                          : "Ya has dejado una valoración"}
                      </Dialog.Title>
                      <StarsPicker
                        onChange={setStars}
                        stars={stars}
                        enabled={!valoracionData?.valoracion}
                      />
                      <textarea
                        type=""
                        id="comentario"
                        className="bg-transparent w-full text-sm border-2 placeholder-violet/70 placeholder:text-sm border-violet placeholder-violet focus:border-violplaceholder-violet text-chineseBlack rounded-md focus:outline-none block p-1.5 mt-3 resize-none"
                        placeholder="Ingrese un comentario"
                        rows="5"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        disabled={!!valoracionData?.valoracion}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {!valoracionData?.valoracion && (
                    <button
                      type="button"
                      disabled={!comentario || stars == 0}
                      className="inline-flex justify-center rounded-md bg-violet hover:bg-purple-400 min-w-[5rem] h-9 items-center text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                      onClick={onSubmit}
                    >
                      {!createValLoading ? "Aceptar" : <Loading />}
                    </button>
                  )}

                  <button
                    type="button"
                    className="mt-3 inline-flex justify-center rounded-md bg-white min-w-[5rem] h-9 items-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setShow(false)}
                    ref={cancelButtonRef}
                  >
                    {!valoracionData?.valoracion ? "Cancelar" : "Cerrar"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
