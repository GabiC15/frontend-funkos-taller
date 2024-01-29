import { gql } from "@apollo/client";

export const GET_COMENTARIOS = gql`
  query GetComentarios($productoId: Int) {
    valoraciones(productoId: $productoId) {
      cantidadEstrellas
      id
      texto
    }
  }
`;
