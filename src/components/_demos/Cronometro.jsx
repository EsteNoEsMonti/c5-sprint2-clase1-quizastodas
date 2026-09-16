import { useState, useEffect } from "react"

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0)
  const [velocidad, setVelocidad] = useState(1000)

  useEffect(() => {
    console.log(`⏱️ prendo un intervalo de ${velocidad}ms`)

    const id = setInterval(() => setSegundos((prev) => prev + 1), velocidad)

    // 👇 comentar ESTE return para la demo
    return () => {
      console.log(`🔌 apago el intervalo de ${velocidad}ms`)
      clearInterval(id)
    }
  }, [velocidad])

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold">Cronometro</h3>

      <p className="text-4xl font-mono">{segundos}</p>
      <p className="text-xs text-gray-500">1 por cada {velocidad}ms</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          onClick={() => setVelocidad(1000)}
          className="px-3 py-1.5 rounded bg-gray-700 text-white text-sm hover:bg-gray-800"
        >
          lento (1s)
        </button>

        <button
          onClick={() => setVelocidad(500)}
          className="px-3 py-1.5 rounded bg-gray-700 text-white text-sm hover:bg-gray-800"
        >
          rapido (0.5s)
        </button>

        <button
          onClick={() => setSegundos(0)}
          className="px-3 py-1.5 rounded bg-gray-400 text-white text-sm hover:bg-gray-500"
        >
          reset
        </button>
      </div>
    </div>
  )
}

export default Cronometro
