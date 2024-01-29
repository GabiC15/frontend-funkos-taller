import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CREATE_USUARIO } from "@/services/apollo/queries/usuario";
import { useContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/services/firebase/firebase";
import { UserContext } from "../providers/UserProvider";
import { useRouter } from "next/router";
import Alert from "@/components/auth/alert";
import { errorCodesFirebase } from "@/errors/firebase";
import { getApolloClient } from "@/components/auth/helpers/custom-client";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const { onUserChange } = useContext(UserContext);
  const [error, setError] = useState();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  }, [error]);

  async function onSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas deben coincidir");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await onRegister(userCredential);
    } catch (e) {
      setError(errorCodesFirebase[e.code]);
      return;
    }

    router.push("/");
  }

  async function onRegister(userCredential) {
    const client = await getApolloClient(userCredential);

    const { data } = await client.mutate({
      mutation: CREATE_USUARIO,
      variables: {
        input: {
          nombres,
          apellidos,
          email,
          password,
        },
      },
    });

    onUserChange(data.createUsuario);
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-chineseBlack">Registrarse</h2>
      <form action="submit" onSubmit={onSubmit} className="w-full">
        <label
          htmlFor="nombre"
          className="block text-xs font-normal text-chineseBlack mt-3 self-start"
        >
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="bg-transparent border border-chineseBlack text-chineseBlack text-xs rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
          placeholder="Ingrese su nombre"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          required
        />
        <label
          htmlFor="apellido"
          className="block text-xs font-normal text-chineseBlack mt-1.5 self-start"
        >
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          className="bg-transparent border border-chineseBlack text-chineseBlack text-xs rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
          placeholder="Ingrese su apellido"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
        <label
          htmlFor="mail"
          className="block text-xs font-normal text-chineseBlack mt-1.5 self-start"
        >
          Email
        </label>
        <input
          type="text"
          id="mail"
          className="bg-transparent border border-chineseBlack text-chineseBlack text-xs rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label
          htmlFor="password"
          className="block text-xs font-normal text-chineseBlack mt-1.5 self-start"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="bg-transparent border border-chineseBlack text-chineseBlack text-xs rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
          placeholder="Ingrese su contraseña"
          pattern=".{5,10}"
          title="Debe ingresa entre 5 y 10 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label
          htmlFor="password-confirm"
          className="block text-xs font-normal text-chineseBlack mt-1.5 self-start"
        >
          Repetir Contraseña
        </label>
        <input
          type="password"
          id="password-confirm"
          className="bg-transparent border border-chineseBlack text-chineseBlack text-xs rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
          placeholder="Ingrese nuevamente su contraseña"
          pattern=".{5,10}"
          title="Debe ingresa entre 5 y 10 caracteres"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="py-1 h-8 w-full bg-chineseBlack text-sm rounded-md mt-6"
        >
          Crear cuenta
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-200 animate-spin mx-auto dark:text-gray-400 fill-white hidden"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </button>
      </form>

      <div className="border-b border-chineseBlack w-full my-6"></div>

      <p className="text-xs text-chineseBlack">O ingresa a través de:</p>

      <div className="flex gap-6 mt-3">
        <FontAwesomeIcon
          icon={faGoogle}
          size="xl"
          className="text-chineseBlack"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          size="xl"
          className="text-chineseBlack"
        />
      </div>

      {error && <Alert message={error} />}
    </>
  );
}