import { gql } from "@apollo/client";

export const ADD_CUPON = gql`
  mutation CreateCupon($input: CuponInput!) {
    createCupon(
      input: $input
    ) {
      id
      nombre
      porcentaje
      validoDesde
      validoHasta
    }
  }
`;

export const UPDATE_CUPON = gql`
  mutation UpdateCupon($id: Int!, $input: CuponInput!) {
    updateCupon(
      id: $id
      input: $input
    ) {
      nombre
    }
  }
`;

export const DELETE_CUPON = gql`
  mutation DeleteCupon($id: Int!) {
    deleteCupon(
      id: $id
    ) 
  }
`