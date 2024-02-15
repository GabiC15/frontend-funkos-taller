import { GET_USUARIO } from "@/services/apollo/queries/usuario";
import { useQuery } from "@apollo/client";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const { data, error } = useQuery(GET_USUARIO);

  useEffect(() => {
    if (data?.usuario) onUserChange(data.usuario);
    else setUser();
  }, [data, error]);

  async function onUserChange(usuario) {
    setUser({
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
    });
  }

  return (
    <UserContext.Provider value={{ user, onUserChange }}>
      {children}
    </UserContext.Provider>
  );
}
