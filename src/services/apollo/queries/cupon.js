import { gql } from "@apollo/client";

export const GET_CUPON_POR_NOMBRE = gql`
  query GetCuponPorNombre($nombre: String!) {
    cuponPorNombre(nombre: $nombre) {
      id
      nombre
      porcentaje
      validoDesde
      validoHasta
      estado
    }
  }
`;

export const GET_CUPONES = gql`
  query GetCupones {
    cupones {
      id
      nombre
      porcentaje
      validoDesde
      validoHasta
      estado
    }
  }
`;

export const GET_CUPON = gql`
  query GetCupon($id: Int!) {
    cupon(id: $id) {
      id
      nombre
      porcentaje
      validoDesde
      validoHasta
      estado
    }
  }
`;
