import { gql } from "@apollo/client";

export const GET_CATEGORIAS = gql`
  query GetCategorias {
    categorias {
      id
      nombre
      padre {
        id
        nombre
      }
    }
  }
`;

export const GET_CATEGORIA = gql`
  query GetCategoria($id: Int!) {
    categoria(id: $id) {
      id
      nombre
      padre {
        id
        nombre
      }
    }
  }
`;
