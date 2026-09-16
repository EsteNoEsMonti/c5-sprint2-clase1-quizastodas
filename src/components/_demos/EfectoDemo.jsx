import { useState, useEffect } from "react"

const EfectoDemo = () => {
  const [clicks, setClicks] = useState(0)

  // este log es del cuerpo del componente: se ve en CADA dibujado
  console.log('🎨 React dibujo EfectoDemo. clicks =', clicks)

  // A) SIN array -> corre cada vez que React dibuja
  useEffect(() => {
    console.log('A) sin array: cada vez')
  })

  // B) Array VACIO -> corre UNA sola vez, al aparecer el componente
  useEffect(() => {
    console.log('B) array vacio: solo la primera vez')
  }, [])

  // C) Array CON algo -> la primera vez, y cada vez que eso cambia
  useEffect(() => {
    console.log('C) cambio clicks:', clicks)
  }, [clicks])

  // Dibuja -> efecto -> setClicks -> dibuja -> efecto -> para siempre.
  // useEffect(() => {
  //   setClicks(clicks + 1)
  // })

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold">Laboratorio de efectos</h3>
      <p className="text-sm text-gray-500 mb-2">Mira la consola 👀</p>

      <p className="text-3xl font-mono">{clicks}</p>

      <button
        onClick={() => setClicks((prev) => prev + 1)}
        className="mt-2 px-3 py-1.5 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        sumar 1
      </button>
    </div>
  )
}

export default EfectoDemo
