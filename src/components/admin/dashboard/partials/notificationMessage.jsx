const NotificationMessage = ({ data }) => {
  // const { userName, profilePicture, message } = data;
  const { fecha, mensaje, usuario, pedido, producto } = data;
  let nombres = "";
  if (usuario) {
    const { nombres: name, apellidos: lastname } = usuario;
    nombres = name || "" + " " + lastname || "";
  }
  const { year, month, day } = fecha;

  return (
    <>
      <div className="w-9 h-9 rounded-full flex-shrink-0 bg-transparent my-2 mr-3">
        <img
          className="object-cover w-full h-full rounded-full"
          src={`${
            nombres === ""
              ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fpurple%2Fadministrator-xxl.png&f=1&nofb=1&ipt=80dfe87816a49d1e399fb4094d57bedbf443621855dde4acebc0fbea73875055&ipo=images"
              : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-circled-user-icon-2240.png&f=1&nofb=1&ipt=77478c8f18fb6b5b36e03daf8dc260cc2677aabbc6dd6424f6ee0767bc0d649c&ipo=images"
          }`}
          alt="Usuario"
          loading="lazy"
        />
      </div>
      <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-gray-600 dark:text-gray-100 py-2">
        <div className="flex-grow flex justify-between items-center">
          <div className="self-center">
            <a
              className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
              href="#0"
              style={{ outline: "none" }}
            >
              {nombres === "" ? "Admin" : nombres}
            </a>{" "}
            {mensaje.toLowerCase()}{" "}
            {/* <a
                          className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                          href="#0"
                          style={{ outline: "none" }}
                        >
                          Sara Smith
                        </a>{" "}
                        in a new post */}
          </div>
          <div className="flex-shrink-0 ml-2">
            <a
              className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
              href={`${pedido?.id || producto?.id || "#0"}`}
              style={{ outline: "none" }}
            >
              <div className="md:flex ">
                <p className="mr-1">Ver</p>
                <p>producto</p>
              </div>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="transform transition-transform duration-500 ease-in-out"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationMessage;
