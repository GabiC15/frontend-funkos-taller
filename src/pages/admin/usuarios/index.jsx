import UsuariosSection from "@/components/admin/usuarios/Usuarios";
import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";

export default function Usuarios() {
  return (
    <>
      <Layout>
        <UsuariosSection />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["ADMIN"]),
  };
}
