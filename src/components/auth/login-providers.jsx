import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authProviders } from "@/components/auth/helpers/auth-provider";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { errorCodesFirebase } from "@/errors/firebase";
import { getApolloClient } from "./helpers/custom-client";
import { LOGIN_USUARIO } from "@/services/apollo/queries/usuario";
import { useRouter } from "next/router";
import { UserContext } from "../providers/UserProvider";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginProviders({ setError }) {
  const router = useRouter();
  const params = useSearchParams();
  const { onUserChange } = useContext(UserContext);

  async function onProvidersLogin(event) {
    try {
      const userCredential = await authProviders[event.target.id]();

      await onLogin(userCredential);
    } catch (e) {
      setError(errorCodesFirebase[e.code]);
      return;
    }
  }

  async function onLogin(userCredential) {
    const client = await getApolloClient(userCredential);

    const { data } = await client.query({ query: LOGIN_USUARIO });

    if (!data?.login) {
      router.push("/auth/register", {
        query: {
          authId: await userCredential.user.getIdToken(),
          email: userCredential.user.email,
        },
      });
    } else {
      onUserChange(data.login);
      router.push(params.get("redirectTo") ?? "/");
    }
  }

  return (
    <>
      <div className="flex gap-6 mt-3 justify-center">
        <button>
          <FontAwesomeIcon
            onClick={onProvidersLogin}
            id="google"
            icon={faGoogle}
            size="xl"
            className="text-chineseBlack"
          />
        </button>
        <button onClick={onProvidersLogin}>
          <FontAwesomeIcon
            id="github"
            icon={faGithub}
            size="xl"
            className="text-chineseBlack"
          />
        </button>
      </div>
    </>
  );
}
