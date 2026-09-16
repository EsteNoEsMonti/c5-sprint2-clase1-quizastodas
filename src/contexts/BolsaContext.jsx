import { createContext, useContext } from "react";
import useBolsa from "../hooks/useBolsa";

// 1. CREAR (afuera de todo componente)
const BolsaContext = createContext(null)

// 2. PROVEER: uso mi custom hook y paso lo que devuelve tal cual al value
export function BolsaProvider({ children }) {
  const valor = useBolsa()

  return (
    <BolsaContext.Provider value={valor}>
      {children}
    </BolsaContext.Provider>
  )
}

// 3. el hook para consumirlo comodo, con el guardia
export function useBolsaContext() {
  const contexto = useContext(BolsaContext)

  if (!contexto) {
    throw new Error('useBolsaContext() tiene que usarse adentro de <BolsaProvider>')
  }

  return contexto
}
