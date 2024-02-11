import { gql } from "@apollo/client";

export const GET_PROVINCIAS = gql`
  query GetProvincias {
    provincias {
      id
      nombre
    }
  }
`;
