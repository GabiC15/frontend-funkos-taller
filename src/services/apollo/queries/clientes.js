import { gql } from "@apollo/client";

export const GET_TOTAL_CLIENTES = gql`
  query {
    totalUsuarios
  }
`;
