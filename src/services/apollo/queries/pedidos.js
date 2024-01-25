import { gql } from "@apollo/client";

export const GET_TOTAL_PEDIDOS = gql`
  query {
    totalPedidos
  }
`;

export const GET_TOTAL_PEDIDOS_PAGOS = gql`
  query {
    totalPedidosPagos
  }
`;

export const GET_TOTAL_PEDIDOS_POR_ANIO = gql`
  query {
    totalVentasPorAnio(startYear: 2016, endYear: 2023) {
      year
      total
    }
  }
`;
