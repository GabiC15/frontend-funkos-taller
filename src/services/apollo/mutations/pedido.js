import { gql } from "@apollo/client";

export const UPDATE_PEDIDO = gql`
  mutation UpdatePedido($id: Int!, $input: PedidoInput!) {
    updatePedido(id: $id, input: $input)
  }
`;