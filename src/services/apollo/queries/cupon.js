import { gql } from "@apollo/client";

export const GET_CUPONES = gql`
  query GetCupones {
    cupones {
      id
      nombre
      porcentaje
      validoDesde
      validoHasta
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
    }
  }
`;

