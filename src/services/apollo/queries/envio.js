import { gql } from "@apollo/client";

export const GET_PRECIO_ENVIO = gql`
  query GetPrecioEnvio($input: PrecioEnvioInput!) {
    precioEnvio(input: $input)
  }
`;
