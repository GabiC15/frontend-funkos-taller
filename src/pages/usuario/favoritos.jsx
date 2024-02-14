import Layout from "@/components/common/layout";
import CardFavorito from "@/components/favoritos/CardFavorito";
import Loading from "@/components/producto/loading";
import { GET_FAVORITOS } from "@/services/apollo/queries/favoritos";
import { redirectRol } from "@/utils/redirect-rol";
import { useQuery } from "@apollo/client";

export default function Favoritos() {
  const { loading, data } = useQuery(GET_FAVORITOS);

  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">
              Favoritos
            </h1>
            <div className="grid grid-cols-1 gap-1 md:gap-5 mb-16">
              {!loading ? (
                data.favoritos.map((favorito, i) => (
                  <CardFavorito favorito={favorito} key={favorito.id} />
                ))
              ) : (
                <div className="mx-auto">
                  <Loading />
                </div>
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
