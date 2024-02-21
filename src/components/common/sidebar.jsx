import { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { GrDeliver } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useRouter } from "next/router";
import { LOGOUT_USUARIO } from "@/services/apollo/queries/usuario";
import { useMutation } from "@apollo/client";
import { UserContext } from "../providers/UserProvider";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const [showSubcategoriesProducto, setShowSubcategoriesProducto] =
    useState(false);
  const [showSubcategoriesCupon, setShowSubcategoriesCupon] = useState(false);
  const { user, logout: logoutContext } = useContext(UserContext);

  const [logout] = useMutation(LOGOUT_USUARIO, {
    onCompleted: () => {
      logoutContext();
      router.push("/auth/login");
    },
  });

  return (
    <>
      <div className="flex flex-col flex-auto flex-shrink-0 mr-50 antialiased bg-chineseBlack text-black dark:text-white">
        {/* <!-- Sidebar --> */}
        <div className="fixed md:absolute flex flex-col top-32 md:top-20 left-0 bottom-12 w-14 hover:w-64 md:w-64 bg-chineseBlack max-h-fit h-fit py-3 md:py-2 text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-2 md:space-y-1">
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                    Administrador
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/admin/reportes"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li
                className="group relative"
                onClick={() =>
                  setShowSubcategoriesProducto(!showSubcategoriesProducto)
                }
              >
                <a className="relative cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-3">
                    <FiShoppingCart className="w-5 h-5" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Productos
                  </span>
                </a>
                <div
                  className={`relative z-10 pb-2 bg-gray-800/30 w-full shadow-lg rounded mt-1 ${
                    showSubcategoriesProducto ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/admin/productos"
                    className="block px-4 py-2 text-sm focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800"
                  >
                    Ver productos
                  </Link>
                  <Link
                    href="/admin/carga_producto/nuevo"
                    className="block px-4 py-2 text-sm focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800"
                  >
                    Agregar productos
                  </Link>
                </div>
              </li>
              <li
                className="group relative"
                onClick={() =>
                  setShowSubcategoriesCupon(!showSubcategoriesCupon)
                }
              >
                <a className="relative cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-3">
                    <MdOutlineLocalOffer className="w-5 h-5" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Cupones
                  </span>
                </a>
                <div
                  className={`relative z-10 pb-2 bg-gray-800/30 w-full shadow-lg rounded mt-1 ${
                    showSubcategoriesCupon ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/admin/cupones"
                    className="block px-4 py-2 text-sm focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800"
                  >
                    Ver cupones
                  </Link>
                  <Link
                    href="/admin/carga_cupon/nuevo"
                    className="block px-4 py-2 text-sm focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800"
                  >
                    Agregar cupones
                  </Link>
                </div>
              </li>
              {/* <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                    Notificaciones
                  </div>
                </div>
              </li> */}
              <li>
                <Link
                  href="/admin/pedidos"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-3">
                    <GrDeliver className="w-5 h-5" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Pedidos
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/usuarios"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-3">
                    <FiUsers className="w-5 h-5" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Usuarios
                  </span>
                </Link>
              </li>
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center mt-5 h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                    Perfil
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/usuario/my-profile"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <p className="ml-2 text-xs tracking-wide truncate leading-tight">
                    {user?.email}
                  </p>
                </Link>
              </li>
              <li className="md:hidden">
                <a
                  onClick={() => logout()}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-3">
                    <LuLogOut className="text-xl" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Cerrar sesión
                  </span>
                </a>
              </li>
            </ul>
            <button
              className="mb-8 px-5 py-3 font-semibold hidden md:block text-center text-xs md:mt-5 md:bg-white hover:bg-white/90 transition-colors duration-150 md:text-black md:rounded-lg md:mx-4"
              onClick={() => logout()}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
