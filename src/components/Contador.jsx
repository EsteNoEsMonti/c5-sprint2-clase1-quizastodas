import { useState } from "react"

// Clase 01: el contador del experimento let vs useState.
const Contador = () => {
  const valorInicial = 0
  const [count, setCount] = useState(valorInicial)

  const handleIncrementar = () => setCount((prev) => prev + 1)
  const handleDecrementar = () => setCount((prev) => prev - 1)
  const handleReset = () => setCount(valorInicial)

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-2xl font-bold">Contador</h2>

      <p className="text-5xl font-mono">{count}</p>
      <p className="text-sm font-mono">
        {count === 10 ? 'aguante el 10' : ':('}
      </p>

      <div className="flex gap-2">
        <button
          onClick={handleDecrementar}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
        >
          -1
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
        >
          reset
        </button>

        <button
          onClick={handleIncrementar}
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default Contador
