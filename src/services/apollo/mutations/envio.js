import { gql } from "@apollo/client";

export const UPDATE_ENVIO = gql`
  mutation UpdateEnvio($id: Int!, $input: EnvioInput!) {
    updateEnvio(id: $id, input: $input) {
      id
    }
  }
`;