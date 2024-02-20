import { useContext, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGOUT_USUARIO } from "@/services/apollo/queries/usuario";
import { UserContext } from "../providers/UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faHistory,
  faRightFromBracket,
  faRightToBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function UserNavbar() {
  const router = useRouter();
  const { user, logout: logoutContext } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const sideNavRef = useRef(null);

  const [logout] = useMutation(LOGOUT_USUARIO, {
    onCompleted: () => {
      setShow(false);
      logoutContext();
      router.push("/auth/login");
    },
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setShow(false);
    }
  }

  return (
    <>
      <div className="my-auto" ref={sideNavRef}>
        <button
          id="dropdownInformationButton"
          data-dropdown-toggle="dropdownInformation"
          type="button"
          onClick={() => setShow(!show)}
        >
          <FontAwesomeIcon size="xl" icon={faUserCircle} className="my-auto" />
        </button>

        <div
          id="dropdownInformation"
          className={`z-10 mt-7 bg-chineseBlack divide-y divide-gray-100 rounded-lg shadow w-44 -translate-x-36 ${
            show ? "fixed" : "hidden"
          }`}
        >
          {user && (
            <div className="px-4 py-3 text-sm text-white">
              <Link
                href="/usuario/my-profile"
              >
                <div>
                  {user.nombres} {user.apellidos}
                </div>
                <div className="font-medium text-xs truncate">{user.email}</div>
              </Link>
              
            </div>
          )}
          {/* <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul> */}
          {user?.rol === "CLIENTE" && (
            <div className="px-4 py-2">
              <Link
                href="/usuario/historial"
                className="flex justify-between w-full"
              >
                <p className="text-sm">Pedidos</p>
                <FontAwesomeIcon
                  size="sm"
                  icon={faHistory}
                  className="my-auto"
                />
              </Link>
            </div>
          )}
          <div className="px-4 py-2">
            {user ? (
              <button
                onClick={() => logout()}
                className="flex justify-between w-full"
              >
                <p className="text-sm">Cerrar sesión</p>
                <FontAwesomeIcon
                  size="sm"
                  icon={faRightFromBracket}
                  className="my-auto"
                />
              </button>
            ) : (
              <Link href="/auth/login" className="flex justify-between w-full">
                <p className="text-sm">Iniciar sesión</p>
                <FontAwesomeIcon
                  size="sm"
                  icon={faRightToBracket}
                  className="my-auto"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
