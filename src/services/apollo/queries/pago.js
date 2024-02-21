import { gql } from "@apollo/client";

export const GET_TOTAL_PAGOS_POR_ANIO = gql`
  query GET_PAGOS_POR_ANIO {
    totalPagosPorAnio {
      year
      total
    }
  }
`;

export const GET_TOTAL_PAGOS_POR_MES = gql`
  query GET_PAGOS_POR_MES {
    totalPagosPorMes {
      month
      brutto
      netto
    }
  }
`;