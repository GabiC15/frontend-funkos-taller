import { gql } from "@apollo/client";

export const GET_TOTAL_PRODUCTOS = gql`
  query {
    totalProductos
  }
`;

export const GET_PRODUCTOS = gql`
  query GetProductos($input: ProductoQueryInput) {
    productos(input: $input) {
      id
      titulo
      descripcion
      precio
      stock
      imagenes {
        path
      }
      categoria {
        nombre
        padre {
          nombre
        }
      }
      caracteristica {
        nombre
      }
      estado
    }
  }
`;

export const GET_PRODUCTO = gql`
  query GetProducto($id: Int!) {
    producto(id: $id) {
      id
      titulo
      descripcion
      stock
      precio
      caracteristica {
        id
        nombre
      }
      imagenes {
        path
      }
      categoria {
        id
        nombre
        padre {
          id
          nombre
        }
      }
    }
  }
`;

export const GET_MAX_PRODUCTO_ID = gql`
  query GetMaxProductoId {
    maxProductoId {
      maxId
    }
  }
`;
