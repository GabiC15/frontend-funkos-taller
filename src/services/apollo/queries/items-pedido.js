import { gql } from "@apollo/client";

export const GET_ITEMS_MAS_VENDIDOS = gql`
  query ITEMS_MAS_PEDIDOS {
    itemsMasPedidos {
      productoId
      productoTitulo
      cantidad
    }
  }
`;

export const GET_VOLUMEN_ITEMS_PEDIDOS = gql`
  query VOLUMEN_ITEMS_PEDIDOS {
    volumenItemsPedidos {
      productoId
      productoTitulo
      cantidadItem
      cantidadTotal
    }
  }
`;
