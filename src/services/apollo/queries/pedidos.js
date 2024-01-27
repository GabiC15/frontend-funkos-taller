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
  query GET_TOTAL_PEDIDOS_POR_ANIO ($input: VentasPorAnioInput!) {
    totalVentasPorAnio(input: $input) {
      year
      total
    }
  }
`;

export const GET_TOTAL_PEDIDOS_POR_MES = gql`
  query GET_VENTAS_POR_MES ($input: Int!) {
    totalVentasPorMes(year: $input ) {
      month
      brutto
      commission
    }
  }
`;
