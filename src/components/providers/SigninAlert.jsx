import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function SigninAlert() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div
        className="bg-red-100 border-2 border-green-400 text-chineseBlack px-2 py-1 rounded absolute mt-3 mx-24 bottom-4 leading-tight"
        role="alert"
      >
        <span className="block sm:inline font-medium text-sm">
          Bienvenido ${user.nombre}!
        </span>
      </div>
    </>
  );
}
