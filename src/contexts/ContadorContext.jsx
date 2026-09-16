import { createContext } from "react";
import useContador from "../hooks/useContador";
import { useContext } from "react";

const ContadorContext = createContext()

export function ContadorProvider({ children }) {
  const valor = useContador(3)

  return (
    <ContadorContext.Provider value={valor}>
      {children}
    </ContadorContext.Provider>
  )
}

export function useContadorContext(){
  const contexto = useContext(ContadorContext)

    if (contexto === null) {
    throw new Error('useContadorContext() tiene que usarse adentro de <ContadorProvider>')
  }

  return contexto
}