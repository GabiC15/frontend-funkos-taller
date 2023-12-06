import AuthLayout from "@/components/auth/layout";
import LoginComponent from "@/components/auth/login";

export default function Login() {
  return (
    <div>
      <AuthLayout>
        <LoginComponent />
      </AuthLayout>
    </div>
  );
}
