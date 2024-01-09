import { gql } from "@apollo/client";

export const GET_CARRITO = gql`
  query GetCarrito($id: Int!) {
    carrito(id: $id) {
      id
      lineas_carrito {
        id
        cantidad
        producto {
          id
          titulo
          precio
          imagenes {
            path
          }
        }
      }
    }
  }
`;
