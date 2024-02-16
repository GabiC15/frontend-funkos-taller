import { gql, useQuery } from "@apollo/client";

export const LOGIN_USUARIO = gql`
  query Login {
    login {
      id
      nombres
      apellidos
      email
      rol {
        nombre
      }
    }
  }
`;

export const GET_USUARIO = gql`
  query GetUsuario {
    usuario {
      id
      nombres
      apellidos
      email
      rol {
        nombre
      }
    }
  }
`;

export const CREATE_USUARIO = gql`
  mutation CreateUsuario($input: UsuarioInput!) {
    createUsuario(input: $input) {
      id
      nombres
      apellidos
      email
    }
  }
`;

export const LOGOUT_USUARIO = gql`
  mutation LogoutUsuario {
    logout
  }
`;
