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


export const ADD_IMAGES_PRODUCT = gql`
  mutation CreateImagenProducto($input: ImagenProductoInput!) {
    createImagenProducto(
      input: $input
    ) {
      path
      producto {
        id
      }
    }
  }
`;
