import { gql } from "@apollo/client";

export const ADD_PRODUCTO = gql`
  mutation AddProducto($input: ProductoInput!) {
    createProducto(input: { 
      titulo: $titulo, 
      descripcion: $descripcion, 
      # stock: $stock 
    }) {
      titulo
      descripcion
      # stock
    }
  }
`;