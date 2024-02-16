import { gql } from "@apollo/client";

export const GET_PEDIDO = gql`
  query GetPedido($id: Int!) {
    pedido(id: $id) {
      id
      fecha
      pago {
        id
        monto
        status
      }
      cupon {
        nombre
        porcentaje
      }
      envio {
        codigoPostal
        provincia {
          nombre
        }
        ciudad
        direccion
        costo
      }
      itemsPedido {
        id
        cantidad
        precioProducto
        producto {
          id
          titulo
          imagenes {
            path
          }
        }
      }
    }
  }
`;

export const GET_PEDIDOS = gql`
  query GetPedidos {
    pedidos {
      id
      fecha
      usuario {
        nombres
        apellidos
      }
      pago {
        id
        monto
        status
      }
      cupon {
        nombre
        porcentaje
      }
      envio {
        codigoPostal
        provincia {
          nombre
        }
        ciudad
        direccion
        costo
      }
      itemsPedido {
        id
        cantidad
        precioProducto
        producto {
          id
          titulo
          imagenes {
            path
          }
        }
      }
    }
  }
`;

export const CREATE_PEDIDO = gql`
  mutation CreatePedido($input: PedidoInput!) {
    createPedido(input: $input) {
      pedidoId
      checkoutUrl
    }
  }
`;
