import { gql } from "@apollo/client";

export const GET_FAVORITOS = gql`
  query GetFavoritos{
    favoritos{
      id
      producto{
        id
        titulo
        descripcion
        precio
        imagenes{
            path
        }
      }
    }
  }
`;

export const GET_FAVORITO = gql`
  query GetFavorito($id: Int!) {
    favorito(id: $id) {
      id
      usuario_id
      producto_id
    }
  }
`;