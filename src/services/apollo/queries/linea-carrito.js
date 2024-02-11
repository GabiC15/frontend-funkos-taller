import { gql } from "@apollo/client";

export const GET_LINEA_CARRITO = gql`
  query GetLineaCarrito($productoId: Int!) {
    lineaCarrito(productoId: $productoId) {
      id
      cantidad
    }
  }
`;

export const GET_LINEAS_CARRITO = gql`
  query GetLineasCarrito {
    lineasCarrito {
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
`;

export const CREATE_LINEA_CARRITO = gql`
  mutation CreateLineaCarrito($input: LineaCarritoInput!) {
    createLineaCarrito(input: $input) {
      id
    }
  }
`;

export const DELETE_LINEA_CARRITO = gql`
  mutation DeleteLineaCarrito($productoId: Int!) {
    deleteLineaCarrito(productoId: $productoId)
  }
`;

export const DELETE_LINEAS_CARRITO = gql`
  mutation DeleteLineasCarrito {
    deleteLineasCarrito
  }
`;
