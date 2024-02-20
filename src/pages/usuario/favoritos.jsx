import Layout from "@/components/common/layout";
import CardFavorito from "@/components/favoritos/CardFavorito";
import Loading from "@/components/producto/loading";
import { GET_FAVORITOS } from "@/services/apollo/queries/favoritos";
import { redirectRol } from "@/utils/redirect-rol";
import { useQuery } from "@apollo/client";

export default function Favoritos() {
  const { loading, data } = useQuery(GET_FAVORITOS, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="container max-w-5xl mx-auto flex flex-col px-4">
            <h1 className="text-3xl md:text-4xl font-black mt-14 mb-3 uppercase">
              Favoritos
            </h1>
            <div className="grid grid-cols-1 gap-1 md:gap-2 mb-16">
              {loading && (
                <div className="mx-auto">
                  <Loading />
                </div>
              )}
              {data?.favoritos.map((favorito, i) => (
                <CardFavorito favorito={favorito} key={favorito.id} />
              ))}
              {data?.favoritos.length === 0 && (
                <p>No se han encontrado favoritos</p>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: redirectRol(context, ["CLIENTE"]),
  };
}
