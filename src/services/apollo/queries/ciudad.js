import { gql } from "@apollo/client";

export const GET_CIUDADES = gql`
  query GetCiudades($busqueda: String) {
    ciudades(busqueda: $busqueda) {
      id
      nombre
      provincia {
        id
        nombre
      }
    }
  }
`;
