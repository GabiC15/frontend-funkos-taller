import { gql } from "@apollo/client";

export const ADD_PRODUCTO = gql`
  mutation CreateProducto($input: ProductoInput!) {
    createProducto(
      input: $input
    ) {
      titulo
      descripcion
      stock
      precio
      categoria {
        id
      }
    }
  }
`;
