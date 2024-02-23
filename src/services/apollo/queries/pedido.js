import { gql } from "@apollo/client";

export const GET_PEDIDO = gql`
  query GetPedido($id: Int!) {
    pedido(id: $id) {
      id
      fecha
      despachado
      usuario {
        nombres
        apellidos
        email
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
        id
        codigoPostal
        entregado
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
      despachado
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
        id
        codigoPostal
        entregado
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
