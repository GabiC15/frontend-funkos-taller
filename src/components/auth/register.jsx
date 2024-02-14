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
import { useSearchParams } from "next/navigation";
import LoginProviders from "./login-providers";
import Loading from "../producto/loading";

export default function Register() {
  const params = useSearchParams();
  const authId = params.get("authId");
  const router = useRouter();
  const [email, setEmail] = useState(params.get("email") ?? "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const { onUserChange } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      let userCredential;
      if (!authId) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      await onRegister(userCredential);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(errorCodesFirebase[e.code]);
      return;
    }

    router.push("/");
  }

  async function onRegister(userCredential) {
    const client = await getApolloClient(userCredential, authId);

    const { data, error } = await client.mutate({
      mutation: CREATE_USUARIO,
      variables: {
        input: {
          nombres,
          apellidos,
          email,
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
          htmlFor="mail"
          className="block text-xs font-normal text-chineseBlack mt-1.5 self-start"
        >
          Email
        </label>
        <input
          type="email"
          id="mail"
          className="bg-transparent border border-chineseBlack text-chineseBlack text-xs rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
        {!authId && (
          <div>
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
          </div>
        )}

        <button
          type="submit"
          className="py-1 h-8 w-full bg-chineseBlack text-sm rounded-md mt-6"
        >
          {!loading ? "Crear cuenta" : <Loading />}
        </button>
      </form>

      <div className="border-b border-chineseBlack w-full my-6"></div>

      {!authId && (
        <div>
          <p className="text-xs text-chineseBlack">O ingresa a través de:</p>

          <LoginProviders setError={setError} />
        </div>
      )}

      {error && <Alert message={error} />}
    </>
  );
}
