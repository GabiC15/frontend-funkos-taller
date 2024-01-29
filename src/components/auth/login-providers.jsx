import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authProviders } from "@/components/auth/helpers/auth-provider";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginProviders() {
  async function onProvidersLogin(event) {
    const userCredentials = await authProviders[event.target.id]();
  }

  return (
    <>
      <div className="flex gap-6 mt-3">
        <FontAwesomeIcon
          id="google"
          icon={faGoogle}
          size="xl"
          className="text-chineseBlack"
          onClick={onProvidersLogin}
        />
        <FontAwesomeIcon
          id="github"
          icon={faFacebook}
          size="xl"
          className="text-chineseBlack"
          onClick={onProvidersLogin}
        />
      </div>
    </>
  );
}
