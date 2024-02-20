import { gql } from "@apollo/client";

export const GET_TOTAL_PAGOS_POR_ANIO = gql`
  query GET_PAGOS_POR_ANIO ($input: PagosPorAnioInput!) {
    totalPagosPorAnio(input: $input) {
      year
      total
    }
  }
`;

export const GET_TOTAL_PAGOS_POR_MES = gql`
  query GET_PAGOS_POR_MES ($input: Int!) {
    totalPagosPorMes(year: $input ) {
      month
      brutto
      netto
    }
  }
`;