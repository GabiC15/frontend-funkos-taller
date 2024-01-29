const GridTrVentas = ({ props }) => {
  const { productoTitulo, cantidadItem, cantidadTotal } = props;
  const percentage = Math.round((cantidadItem / cantidadTotal) * 100);

  return (
    <>
      <tr className="text-gray-700 dark:text-gray-100">
        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
          {productoTitulo}
        </th>
        <td className="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {cantidadItem}
        </td>
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
