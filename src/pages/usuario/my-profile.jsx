import UserDataForm from "@/components/user-profile/user-data-form";
import Layout from "@/components/common/layout";
import { redirectRol } from "@/utils/redirect-rol";
import { getClient } from "@/services/apollo/client";
import { GET_USUARIO } from "@/services/apollo/queries/usuario";



export default function PerfilUsuario() {
  return (
    <>
      <Layout>
        <UserDataForm/>
      </Layout>
    </>
  );
}


export async function getServerSideProps(context) {
  // const { data } = await getClient(context).query({
  //   query: GET_USUARIO,
  // });

  return{ 
    props: {},
    redirect: redirectRol(context, ["CLIENTE", "ADMIN"]),
  } 
}
