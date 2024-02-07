import { gql } from "@apollo/client";

export const GET_FAVORITOS = gql`
  query GetFavoritos {
    favoritos {
      id
      producto {
        id
        titulo
        descripcion
        precio
        imagenes {
          path
        }
      }
    }
  }
`;

export const GET_FAVORITO = gql`
  query GetFavorito($productoId: Int!) {
    favorito(productoId: $productoId) {
      id
    }
  }
`;

export const DELETE_FAVORITO = gql`
  mutation DeleteFavorito($id: Int!) {
    deleteFavorito(id: $id)
  }
`;
