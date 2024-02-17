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
  mutation UpdateCupon($id: Int!, $input: CuponUpdateInput!) {
    updateCupon(
      id: $id
      input: $input
    )
  }
`;

export const DELETE_CUPON = gql`
  mutation DeleteCupon($id: Int!) {
    deleteCupon(
      id: $id
    ) 
  }
`