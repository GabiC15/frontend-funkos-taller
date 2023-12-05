import AuthLayout from "@/components/auth/layout";
import RegisterComponent from "@/components/auth/register";

export default function Register() {
  return (
    <>
      <AuthLayout>
        <RegisterComponent />
      </AuthLayout>
    </>
  );
}
