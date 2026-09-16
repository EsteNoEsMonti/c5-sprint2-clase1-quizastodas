import { useState } from "react"

export function useSaludo(valorInicial = 'anonimo') {
  const [nombre, setNombre] = useState(valorInicial)
  const mensaje = 'hola como estas?'
  return { nombre, setNombre, mensaje }
}