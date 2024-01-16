const NotificationMessage = ({ data }) => {
  const { userName, profilePicture, message } = data;
  return (
    <>
      <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
        <img
          className="object-cover w-full h-full rounded-full"
          src={profilePicture}
          alt=""
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
              {userName}
            </a>{" "}
            {message}{" "}
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
              href="#0"
              style={{ outline: "none" }}
            >
              Ver
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
