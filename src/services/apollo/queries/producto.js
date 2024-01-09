import { gql } from "@apollo/client";

export const GET_PRODUCTOS = gql`
  query GetProductos($input: ProductoQueryInput) {
    productos(input: $input) {
      titulo
      imagenes {
        path
      }
      categoria {
        nombre
        padre {
          nombre
        }
      }
    }
  }
`;

export const GET_PRODUCTO = gql`
  query GetProducto($id: Int!) {
    producto(id: $id) {
      titulo
      descripcion
      precio
      imagenes {
        path
      }
      categoria {
        nombre
        padre {
          nombre
        }
      }
    }
  }
`;
