import { useState } from "react"

function useContador(valorInicial) {
  const [count, setCount] = useState(valorInicial)

  const handleIncrementar = () => setCount((prev) => prev + 1)
  const handleDecrementar = () => setCount((prev) => prev - 1)
  const handleReset = () => setCount(valorInicial)
  // nueva funcion

  return { count, handleIncrementar, handleDecrementar, handleReset }
}

export default useContador;