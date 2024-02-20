import { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";

const GridTrEnvios = ({ props }) => {
  const { pedido, costo, entregado, direccion, provincia } = props;
  const { fecha, usuario } = pedido;
  const { nombre: nombreProvincia } = provincia;
  const { id, nombres, apellidos, email } = usuario;

  const [onPhone, setOnPhone] = useState(false);

  const [sizeText, setSizeText] = useState(54);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const handleMediaQueryChange = (e) => {
      setOnPhone(e.matches);
      setSizeText(e.matches ? 20 : 54);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <tr className="bg-gray-50 h-8 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full h-full rounded-full"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-circled-user-icon-2240.png&f=1&nofb=1&ipt=77478c8f18fb6b5b36e03daf8dc260cc2677aabbc6dd6424f6ee0767bc0d649c&ipo=images"
                alt="Usuario"
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div className="flex-col flex-shrink-0 pr-5 ">
              <p className="font-semibold w-20 md:w-full overflow-x-scroll">
                {nombres} {apellidos}
              </p>
              <p className="text-xs w-20 md:w-full overflow-x-scroll text-gray-600 dark:text-gray-400">
                {/* {email.length > 10 ? email.slice(0, 10) + "..." : email} */}
                {email}
              </p>
            </div>
          </div>
        </td>
        {!onPhone && <td className="px-4 py-3 text-xs md:text-sm">${costo}</td>}
        <td className="px-4 py-3 text-xs md:text-sm">
          <span
            className={`px-2 py-1 font-base md:font-semibold leading-tight text-xs whitespace-nowrap ${
              entregado
                ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                : "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700"
            } rounded-full`}
          >
            {" "}
            {entregado ? "Entregado" : "Sin entregar"}
          </span>
        </td>
        {/* <td className="px-4 py-3 text-xs md:text-sm">
          {direccion}
        </td> */}
        <td className="px-4 py-3 text-xs md:text-sm">
          {nombreProvincia}
        </td>
        <td className="px-4 py-3 text-xs md:text-sm">
          {fecha}
        </td>
        {onPhone && <td className="px-4 py-3 text-xs md:text-sm"></td>}
      </tr>
    </>
  );
};

export default GridTrEnvios;
