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

export const CREATE_FAVORITO = gql`
  mutation CreateFavorito($productoId: Int!) {
    createFavorito(productoId: $productoId) {
      id
    }
  }
`;

export const DELETE_FAVORITO = gql`
  mutation DeleteFavorito($productoId: Int!) {
    deleteFavorito(productoId: $productoId)
  }
`;
