import { gql } from "@apollo/client";

export const ADD_PRODUCTO = gql`
  mutation CreateProducto($input: ProductoInput!) {
    createProducto(
      input: $input
    ) {
      id
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

export const UPDATE_PRODUCTO = gql`
  mutation UpdateProducto($id: Int!, $input: ProductoInput!) {
    updateProducto(
      id: $id
      input: $input
    ) {
      id
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
