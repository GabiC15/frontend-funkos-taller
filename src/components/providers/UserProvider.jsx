import { GET_USUARIO } from "@/services/apollo/queries/usuario";
import { useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const { data, error, refetch } = useQuery(GET_USUARIO, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data?.usuario) onUserChange(data.usuario);
    else setUser();
  }, [data, error]);

  function onUserChange(usuario) {
    setUser({
      id: usuario.id,
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      email: usuario.email,
      rol: usuario.rol.nombre,
    });

    refetch();
  }

  function logout() {
    setUser();
  }

  return (
    <UserContext.Provider value={{ user, onUserChange, logout }}>
      {children}
    </UserContext.Provider>
  );
}
