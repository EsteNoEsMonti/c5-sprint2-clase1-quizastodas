import { useState, useEffect } from "react"

let intervalosCreados = 0

const Reloj = () => {
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    intervalosCreados = intervalosCreados + 1
    const nombre = `intervalo #${intervalosCreados}`

    console.log(`⏰ prendo ${nombre}`)

    const id = setInterval(() => {
      console.log(`tick de ${nombre}`)
      setHora(new Date())
    }, 1000)

    return () => {
      console.log(`🔌 apago ${nombre}`)
      clearInterval(id)
    }
  }, [])

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold">Reloj</h3>
      <p className="text-3xl font-mono">{hora.toLocaleTimeString()}</p>
      <p className="mt-1 text-xs text-gray-500">la fuga se ve en la consola</p>
    </div>
  )
}

export default Reloj
