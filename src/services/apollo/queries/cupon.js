import { gql } from "@apollo/client";

export const GET_CUPON_POR_NOMBRE = gql`
  query GetCuponPorNombre($nombre: String!) {
    cuponPorNombre(nombre: $nombre) {
      id
      nombre
      porcentaje
      validoDesde
      validoHasta
    }
  }
`;
