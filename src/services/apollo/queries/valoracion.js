import { gql } from "@apollo/client";

export const GET_VALORACION = gql`
  query GetValoracion($productoId: Int!, $usuarioId: Int!) {
    valoracion(productoId: $productoId, usuarioId: $usuarioId) {
      id
      texto
      fecha
      cantidadEstrellas
    }
  }
`;

export const PROMEDIO_VALORACIONES = gql`
  query PromedioValoraciones($productoId: Int!) {
    promedioValoraciones(productoId: $productoId)
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
