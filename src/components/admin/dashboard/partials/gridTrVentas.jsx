import { useState, useEffect } from "react";

const GridTrVentas = ({ props }) => {
  const { productoTitulo, cantidadItem, cantidadTotal } = props;
  const percentage = Math.round((cantidadItem / cantidadTotal) * 100);
  const [onPhone, setOnPhone] = useState(false);
  const [sizeText, setSizeText] = useState(54);

  // let sizeText = 54;

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
      <tr className="text-gray-700 dark:text-gray-100">
        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left overflow-scroll">
          {/* {productoTitulo.length >= sizeText ? productoTitulo.slice(0, 18) + "..." : productoTitulo} */}
          <div className="w-24 md:w-full h-full overflow-x-scroll">{productoTitulo}</div>
        </th>
        {!onPhone && (
          <td className="border-t-0 invisible md:visible px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {cantidadItem}
          </td>
        )}
        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="flex items-center">
            <span className="mr-2">{percentage}%</span>
            <div className="relative w-full">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${percentage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                ></div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default GridTrVentas;
