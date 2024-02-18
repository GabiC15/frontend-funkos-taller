import { gql } from "@apollo/client";

export const GET_CARACTERISTICAS = gql`
  query GetCaracteristicas {
    caracteristicas {
      id
      nombre
    }
  }
`;
