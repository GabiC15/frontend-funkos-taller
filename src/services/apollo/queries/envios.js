import { gql } from "@apollo/client";

export const GET_CONTROL_DE_ENVIOS = gql`
  query CONTROL_DE_ENVIOS {
    controlDeEnvios {
      id
      entregado
      direccion
      provincia {
        nombre
      }
      costo
      pedido {
        fecha
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
