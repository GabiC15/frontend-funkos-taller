import { gql } from "@apollo/client";

export const GET_CONTROL_DE_ENVIOS = gql`
  query CONTROL_DE_ENVIOS {
    controlDeEnvios {
      id
      entregado
      costo
      pedido {
        fecha {
          year
          month
          day
        }
        usuario {
          id
          nombres
          apellidos
          email
        }
      }
    }
  }
`;
