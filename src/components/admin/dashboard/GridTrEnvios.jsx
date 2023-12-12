const GridTrEnvios = ({ props }) => {
  const { userName, profilePicture, userEmail, shippingPrice, shippingStatus, shippingDate } = props;

  return (
    <>
      <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full h-full rounded-full"
                src={profilePicture}
                alt=""
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold">{userName}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {userEmail}
              </p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-sm">${shippingPrice}</td>
        <td className="px-4 py-3 text-xs">
          <span
            className={`px-2 py-1 font-semibold leading-tight ${
              shippingStatus
                ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100"
                : "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700"
            } rounded-full`}
          >
            {" "}
            {shippingStatus ? "Entregado" : "Sin entregar"}
          </span>
        </td>
        <td className="px-4 py-3 text-sm">{shippingDate}</td>
      </tr>
    </>
  );
};

export default GridTrEnvios;
