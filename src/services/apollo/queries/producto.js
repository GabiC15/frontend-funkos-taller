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
