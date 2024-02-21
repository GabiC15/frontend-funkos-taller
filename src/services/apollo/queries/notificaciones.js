import { gql } from "@apollo/client";

export const GET_NOTIFICACIONES = gql`
  query GetNotificaciones {
    notificaciones {
      id
      fecha {
        year
        month
        day
      }
      mensaje
      usuario {
        id
        nombres
        apellidos
      }
      pedido {
        id
      }
      producto {
        id
      }
      cupon {
        id
      }
    }
  }
`;
