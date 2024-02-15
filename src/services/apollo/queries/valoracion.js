import { gql } from "@apollo/client";

export const GET_VALORACION = gql`
  query GetValoracion($productoId: Int!) {
    valoracion(productoId: $productoId) {
      id
      texto
      fecha
      cantidadEstrellas
    }
  }
`;

export const CREATE_VALORACION = gql`
  mutation CreateValoracion($input: ValoracionInput!) {
    createValoracion(input: $input) {
      id
      texto
      fecha
      cantidadEstrellas
    }
  }
`;
