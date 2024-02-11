import { createContext, useState } from "react";

export const CarritoContext = createContext();

export default function CarritoProvider({ children }) {
  const [showCarrito, setShowCarrito] = useState(false);

  return (
    <CarritoContext.Provider
      value={{ show: showCarrito, showCarrito: setShowCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
