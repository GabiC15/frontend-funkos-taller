import Layout from "@/components/common/layout";
import CardFavorito from "@/components/favoritos/CardFavorito";

import client from "@/services/apollo/client";
import { GET_FAVORITOS } from "@/services/apollo/queries/favoritos";
import { NetworkStatus, useQuery } from "@apollo/client";

export default function Favoritos({favoritos}) {
  return (
    <>
      <Layout>
        <div className="bg-gradient min-h-screen">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black mt-12 mb-4 mx-4 uppercase">Favoritos</h1>
            <div className="grid grid-cols-1 gap-1 md:gap-5 mb-16">
              
              {favoritos.map((favorito, i) => (<CardFavorito producto={favorito.producto} key={favorito.id}/>) 
              )}
            
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}


export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: GET_FAVORITOS,
  });
  return { props: { favoritos: data.favoritos } };
}
