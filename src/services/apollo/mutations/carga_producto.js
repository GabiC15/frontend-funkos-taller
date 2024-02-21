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
    )
  }
`;



export const ADD_IMAGES_PRODUCTO = gql`
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

export const UPDATE_IMAGES_PRODUCTO_BY_PATH = gql`
  mutation UpdateImagenProductoByPath($productoId: Int!, $path: String!, $input: ImagenProductoUpdateInput!) {
    updateImagenProductoByPath(
      productoId: $productoId
      path: $path
      input: $input
    )
  }
`;
