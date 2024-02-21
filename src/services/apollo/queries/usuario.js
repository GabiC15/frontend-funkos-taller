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

export const GET_FB_USUARIO = gql`
  query GetFbUsuario($uid: String!) {
    usuarioFb(uid: $uid) {
      uid
      email
      disabled
    }
  }
`;

export const GET_USUARIOS = gql`
  query GetUsuarios($rolId: Int) {
    usuarios(rolId: $rolId) {
      id
      authId
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
      rol {
        nombre
      }
    }
  }
`;

export const LOGOUT_USUARIO = gql`
  mutation LogoutUsuario {
    logout
  }
`;

export const UPDATE_USUARIO = gql`
  mutation UpdateUsuario($input: UsuarioInput!) {
    updateUsuario(input: $input)
  }
`;

export const UPDATE_FB_USUARIO = gql`
  mutation UpdateFbUsuario($uid: String!, $input: UsuarioFbInput!) {
    updateFbUsuario(uid: $uid, input: $input)
  }
`;
