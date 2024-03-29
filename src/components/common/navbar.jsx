import Image from "next/image";
import Link from "next/link";
import Carrito from "@/components/common/Carrito";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarritoContext } from "@/components/providers/CarritoProvider";
import { useRouter } from "next/router";
import { UserContext } from "../providers/UserProvider";
import {
  faCartShopping,
  faHeart,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import UserNavbar from "./UserNavbar";
import { useMutation } from "@apollo/client";
import { LOGOUT_USUARIO } from "@/services/apollo/queries/usuario";

export default function Navbar() {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const { showCarrito } = useContext(CarritoContext);
  const [search, setSearch] = useState();
  const { user, logout: logoutContext } = useContext(UserContext);

  const [logout] = useMutation(LOGOUT_USUARIO, {
    onCompleted: () => {
      setDropdown(false);
      logoutContext();
      router.push("/auth/login");
    },
  });

  const getClassNameByPage = (pathname) => {
    return `block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ${
      router.pathname === pathname ? "bg-palatinateBlue md:bg-transparent" : ""
    }`;
  };

  return (
    <>
      <nav className="relative bg-chineseBlack border-gray-200 px-2 z-40">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.svg"
              width={0}
              height={0}
              className="h-5 w-full me-3"
              alt="Logo"
              priority
            />
          </Link>
          <div className="flex md:order-2">
            <div className="flex flex-row gap-8">
              <div className="relative hidden md-block md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="search"
                  id="search-navbar-1"
                  className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Buscar..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key == "Enter")
                      return router.push("/productos", {
                        query: { busqueda: e.target.value },
                      });
                  }}
                />
              </div>
              <div className="md:flex flex-row md:order-3 items-center gap-8 hidden">
                {user?.rol === "CLIENTE" && (
                  <Link href="/usuario/favoritos">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faHeart}
                      className="my-auto"
                    />
                  </Link>
                )}
                {user?.rol === "ADMIN" && (
                  <Link href="/admin/reportes">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faScrewdriverWrench}
                      className="my-auto"
                    />
                  </Link>
                )}

                {user?.rol === "CLIENTE" && (
                  <button onClick={() => showCarrito(true)}>
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCartShopping}
                      className="my-auto"
                    />
                  </button>
                )}

                <UserNavbar />
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => setDropdown(!dropdown)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between md:opacity-100 w-full 
              md:flex md:w-auto md:order-1 
              ${dropdown ? "" : "hidden"}`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar-2"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className={getClassNameByPage("/")}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className={getClassNameByPage("/productos")}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className={getClassNameByPage("/#contacto")}
                >
                  Contacto
                </Link>
              </li>
              <li className="md:hidden">
                <div className="w-full h-[1px] bg-white my-2"></div>
              </li>
              {user?.rol === "ADMIN" && (
                <li className="md:hidden">
                  <Link
                    href="/admin/reportes"
                    className={getClassNameByPage("/admin/reportes")}
                  >
                    Administración
                  </Link>
                </li>
              )}
              {user?.rol === "CLIENTE" && (
                <li className="md:hidden">
                  <button
                    onClick={() => showCarrito(true)}
                    className={getClassNameByPage("/carrito")}
                  >
                    Carrito
                  </button>
                </li>
              )}
              {user?.rol === "CLIENTE" && (
                <li className="md:hidden">
                  <Link
                    href="/usuario/historial"
                    className={getClassNameByPage("/usuario/historial")}
                  >
                    Compras
                  </Link>
                </li>
              )}
              {user?.rol === "CLIENTE" && (
                <li className="md:hidden">
                  <Link
                    href="/usuario/favoritos"
                    className={getClassNameByPage("/usuario/favoritos")}
                  >
                    Favoritos
                  </Link>
                </li>
              )}
              {user?.rol === "CLIENTE" && (
                <li className="md:hidden">
                  <Link
                    href="/usuario/my-profile"
                    className={getClassNameByPage("/usuario/my-profile")}
                  >
                    Perfil
                  </Link>
                </li>
              )}
              <li className="mt-2 md:hidden">
                {!user ? (
                  <Link
                    href="/auth/login"
                    className="flex justify-center w-full py-2 px-3 text-white rounded md:hover:bg-transparent bg-violet md:hover:text-blue-700 md:p-0"
                  >
                    Iniciar sesión
                  </Link>
                ) : (
                  <button
                    onClick={() => logout()}
                    className="block w-full py-2 px-3 text-white rounded md:hover:bg-transparent bg-red-500 md:hover:text-blue-700 md:p-0"
                  >
                    Cerrar sesión
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        {user && <Carrito />}
      </nav>
    </>
  );
}
