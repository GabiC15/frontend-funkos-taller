import { gql } from "@apollo/client";

export const GET_TOTAL_CARRITO = gql`
  query GetTotalCarrito($cuponId: Int) {
    totalCarrito(cuponId: $cuponId) {
      descuento
      subtotal
      total
    }
  }
`;
