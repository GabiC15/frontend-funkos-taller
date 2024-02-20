import UserDataForm from "@/components/user-profile/user-data-form";
import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";

export default function PerfilUsuario() {
  return (
    <>
      <Layout>
        <UserDataForm />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["CLIENTE", "ADMIN"]),
  };
}
