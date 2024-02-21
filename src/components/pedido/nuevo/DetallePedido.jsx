import RadioButton from "@/components/pedido/nuevo/RadioButton";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_CIUDADES } from "@/services/apollo/queries/ciudad";
import { CREATE_PEDIDO } from "@/services/apollo/queries/pedido";
import { GET_TOTAL_CARRITO } from "@/services/apollo/queries/carrito";
import Loading from "@/components/producto/loading";
import { GET_CUPON_POR_NOMBRE } from "@/services/apollo/queries/cupon";
import { CallAfterDelay } from "@/utils/call-after-delay";
import { GET_PROVINCIAS } from "@/services/apollo/queries/provincia";
import { GET_PRECIO_ENVIO } from "@/services/apollo/queries/envio";
import { useRouter } from "next/router.js";
import Alert from "@/components/pedido/nuevo/Alert";

const callAfterDelay = new CallAfterDelay();

export default function DetallePedido() {
  const router = useRouter();
  const [envioType, setEnvioType] = useState(0);
  const [codigoPostal, setCodigoPostal] = useState();
  const [provincia, setProvincia] = useState();
  const [ciudad, setCiudad] = useState();
  const [calle, setCalle] = useState();
  const [numero, setNumero] = useState();
  const [piso, setPiso] = useState();
  const [cupon, setCupon] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const { data: provinciasData } = useQuery(GET_PROVINCIAS);
  const [
    getPrecioEnvio,
    {
      data: precioEnvioData,
      error: precioEnvioError,
      loading: precioEnvioLoading,
    },
  ] = useLazyQuery(GET_PRECIO_ENVIO);

  const { data: ciudadesData } = useQuery(GET_CIUDADES, {
    variables: { busqueda: ciudad },
  });
  const {
    data: totalCarritoData,
    loading: totalCarritoLoading,
    refetch: totalCarritoRefetch,
  } = useQuery(GET_TOTAL_CARRITO);

  const {
    data: cuponData,
    loading: cuponLoading,
    refetch: cuponRefetch,
  } = useQuery(GET_CUPON_POR_NOMBRE);

  const [
    addPedido,
    {
      data: createPedidoData,
      loading: createPedidoLoading,
      error: createPedidoError,
    },
  ] = useMutation(CREATE_PEDIDO);

  const onCuponChange = (e) => {
    callAfterDelay.callFunctionAfterDelay({
      functionCall: () => cuponRefetch({ nombre: e.target.value }),
      seconds: 1,
    });

    setCupon(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await addPedido({
      variables: {
        input: {
          envio:
            envioType == 1
              ? {
                  provinciaId: Number.parseInt(provincia),
                  codigoPostal: Number.parseInt(codigoPostal),
                  ciudad,
                  calle,
                  numero: Number.parseInt(numero),
                  piso: Number.parseInt(piso),
                }
              : undefined,
          cuponId: cuponData?.cuponPorNombre?.id,
        },
      },
    });
  };

  useEffect(() => {
    totalCarritoRefetch({ cuponId: cuponData?.cuponPorNombre?.id });
  }, [cuponData?.cuponPorNombre?.id, totalCarritoRefetch]);

  useEffect(() => {
    if (codigoPostal?.length === 4 && provincia) {
      callAfterDelay.callFunctionAfterDelay({
        functionCall: () =>
          getPrecioEnvio({
            variables: {
              input: {
                codigoPostalDestino: Number.parseInt(codigoPostal),
                provinciaIdDestino: Number.parseInt(provincia),
              },
            },
          }),
        seconds: 1,
      });
    }
  }, [codigoPostal, provincia, getPrecioEnvio]);

  useEffect(() => {
    if (createPedidoError) {
      setErrorMessage("Ha ocurrido un error al crear el pedido!");
      setTimeout(() => {
        setErrorMessage(null);
      }, 10000);
    }
  }, [createPedidoError]);

  useEffect(() => {
    if (createPedidoData)
      router.push(createPedidoData.createPedido.checkoutUrl);
  }, [createPedidoData, router]);

  const getLabelsClasses = () =>
    "block text-sm font-normal text-white mt-2 self-start";

  const getInputClasses = () =>
    "bg-transparent text-sm border placeholder-white/70 placeholder:text-sm border-white focus:border-white text-white rounded-md focus:outline-none block w-full p-1.5 mt-0.5";

  return (
    <>
      <form
        action="submit"
        className="flex flex-col md:w-1/2"
        onSubmit={onSubmit}
      >
        <h2 className="text-xl font-bold">Envío</h2>
        <div className="flex flex-col mt-3 gap-2">
          <RadioButton
            groupId={1}
            id={1}
            checked={envioType == 0}
            onClick={() => setEnvioType(0)}
          >
            Retiro en local
          </RadioButton>
          <RadioButton
            groupId={1}
            id={2}
            checked={envioType == 1}
            onClick={() => setEnvioType(1)}
          >
            Envío a domicilio
          </RadioButton>
        </div>

        <div className="flex flex-col mt-3 gap-2">
          {envioType == 1 && (
            <div className="flex flex-col">
              <label htmlFor="provincia" className={getLabelsClasses()}>
                Provincia
              </label>
              <select
                type="text"
                id="provincia"
                className={`${getInputClasses()} ${
                  !provincia ? "text-white/70" : ""
                }`}
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                required
              >
                <option value="">Seleccione su provincia</option>
                {provinciasData?.provincias.map((p) => (
                  <option key={p.id} className="text-chineseBlack" value={p.id}>
                    {p.nombre}
                  </option>
                ))}
              </select>

              <label htmlFor="cp" className={getLabelsClasses()}>
                Codigo postal
              </label>
              <input
                type="text"
                id="cp"
                className={getInputClasses()}
                placeholder="Ingrese su codigo postal"
                value={codigoPostal}
                minLength={4}
                maxLength={4}
                onChange={(e) => setCodigoPostal(e.target.value)}
                required
              />
              {precioEnvioError && (
                <span className="text-xs text-white/80 mr-2">
                  El código postal no es válido
                </span>
              )}

              <label htmlFor="ciudad" className={getLabelsClasses()}>
                Ciudad
              </label>
              <input
                type="text"
                list="ciudad"
                placeholder="Ingrese su ciudad"
                className={getInputClasses()}
                onChange={(e) => setCiudad(e.target.value)}
                value={ciudad}
                required
              />
              <datalist id="ciudad">
                {ciudadesData?.ciudades.map((c) => (
                  <option
                    key={c.id}
                    value={`${c.nombre}, ${c.provincia.nombre}`}
                  >
                    {c.nombre}, {c.provincia.nombre}
                  </option>
                ))}
              </datalist>

              <label htmlFor="calle" className={getLabelsClasses()}>
                Calle
              </label>
              <input
                type="text"
                id="calle"
                className={getInputClasses()}
                placeholder="Ingrese su calle"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
                required
              />
              <label htmlFor="numero" className={getLabelsClasses()}>
                Número
              </label>
              <input
                type="text"
                id="numero"
                className={getInputClasses()}
                placeholder="Ingrese su número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
              <label htmlFor="piso" className={getLabelsClasses()}>
                Piso
              </label>
              <input
                type="text"
                id="piso"
                className={getInputClasses()}
                placeholder="Ingrese su piso"
                value={piso}
                onChange={(e) => setPiso(e.target.value)}
              />
            </div>
          )}

          <div className="w-full h-[1px] bg-white mt-3"></div>

          <label htmlFor="cupon" className={getLabelsClasses()}>
            <p>Cupón</p>
          </label>
          <div className="w-full">
            <input
              type="text"
              id="cupon"
              className={getInputClasses()}
              placeholder="Ingrese un cupón"
              value={cupon}
              onChange={onCuponChange}
            />
            {cupon && !cuponData?.cuponPorNombre && (
              <span className="text-xs text-white/80 mr-2">
                El cupón no es válido
              </span>
            )}
          </div>
        </div>

        {!totalCarritoLoading ? (
          <div className="flex flex-col mt-5">
            <div className="flex items-center">
              <p className="text-sm mr-auto">Subtotal</p>
              <p className="text-2xl font-bold">
                ${totalCarritoData?.totalCarrito?.subtotal}
              </p>
            </div>

            {!!totalCarritoData?.totalCarrito?.descuento && (
              <div className="flex items-center">
                <p className="text-sm mr-auto">Descuento</p>
                <p className="text-2xl font-bold">
                  -${totalCarritoData?.totalCarrito?.descuento}
                </p>
              </div>
            )}

            {envioType == 1 && precioEnvioData && (
              <div className="flex items-center">
                <p className="text-sm mr-auto">Envio</p>
                <p className="text-2xl font-bold">
                  ${precioEnvioData?.precioEnvio}
                </p>
              </div>
            )}
            {precioEnvioLoading && <Loading className="mx-auto mt-3" />}

            <div className="w-full h-[1px] bg-white mt-3"></div>

            <div className="flex items-center mt-2">
              <p className="text-sm mr-auto">Total</p>
              <p className="text-3xl font-bold">
                $
                {totalCarritoData?.totalCarrito?.total +
                  ((envioType == 1 ? precioEnvioData?.precioEnvio : 0) ?? 0)}
              </p>
            </div>
          </div>
        ) : (
          <Loading className="mx-auto mt-3" />
        )}

        <button
          disabled={envioType == 1 && precioEnvioError}
          type="submit"
          className="w-full flex justify-center bg-chineseBlack h-10 items-center rounded-md text-lg font-semibold mt-4"
        >
          {!createPedidoLoading ? "Comprar" : <Loading className="mx-auto" />}
        </button>

        {errorMessage && <Alert message={errorMessage} />}
      </form>
    </>
  );
}
