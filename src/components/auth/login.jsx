import { LOGIN_USUARIO } from "@/services/apollo/queries/usuario";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { errorCodesFirebase } from "./../../errors/firebase";
import { getApolloClient } from "@/components/auth/helpers/custom-client";
import LoginProviders from "@/components/auth/login-providers";
import Alert from "@/components/auth/alert";
import Loading from "../producto/loading";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onUserChange } = useContext(UserContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  }, [error]);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      await onLogin(userCredential);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(errorCodesFirebase[e.code]);
      return;
    }

    router.push(params.get("redirectTo") ?? "/");
  }

  async function onLogin(userCredential) {
    const client = await getApolloClient(userCredential);

    const { data } = await client.query({ query: LOGIN_USUARIO });

    onUserChange(data.login);
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-chineseBlack">Iniciar sesión</h2>
      <form action="submit" onSubmit={onSubmit} className="w-full">
        <label
          htmlFor="mail"
          className="block text-xs font-normal text-chineseBlack mt-2 self-start"
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
          htmlFor="password"
          className="block text-xs font-normal text-chineseBlack mt-4 self-start"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="bg-transparent border border-chineseBlack text-chineseBlack text-xs rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="py-1 h-8 w-full bg-chineseBlack text-sm rounded-md mt-7"
        >
          {!loading ? "Ingresar" : <Loading />}
        </button>
      </form>

      <div className="border-b border-chineseBlack w-full my-6"></div>

      <p className="text-xs text-chineseBlack">O ingresa a través de:</p>

      <LoginProviders setError={setError} />

      {error && <Alert message={error} />}
    </>
  );
}
