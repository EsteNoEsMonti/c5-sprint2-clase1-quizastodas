/*
  Los 3 pasos de Context:
  1. CREAR    -> createContext()      "armo el tanque"
  2. PROVEER  -> <Context.Provider>   "lo pongo arriba y le pongo agua"
  3. CONSUMIR -> useContext(Context)  "abro la canilla"
*/

import { createContext, useContext, useEffect } from 'react'

// 1. CREAR (afuera de todo componente)
const SaludoContext = createContext(null)

// 2. PROVEER
export function SaludoProvider({ children }) {
  const saludo = 'hola, como estas?'

  return (
    <SaludoContext.Provider value={saludo}>
      {children}
    </SaludoContext.Provider>
  )
}

// 3. el hook para consumirlo comodo, con el guardia
export function useSaludoContext() {
  const contexto = useContext(SaludoContext)

  if (contexto === null) {
    throw new Error('useSaludoContext() tiene que usarse adentro de <SaludoProvider>')
  }

  return contexto
}
