import { useState, useEffect } from "react"
import frutasVerduras from "./data/frutasVerduras.json"

import Contador from "./components/Contador"
import FrutaList from "./components/FrutaList"
import Bolsa from "./components/Bolsa"
import Reloj from "./components/Reloj"
import Cronometro from "./components/Cronometro"
import EfectoDemo from "./components/EfectoDemo"

const App = () => {
  // el estado vive aca, arriba de todos los que lo necesitan
  const [bolsa, setBolsa] = useState([])
  const [busqueda, setBusqueda] = useState('')

  // interruptores para las demos de hoy
  const [mostrarReloj, setMostrarReloj] = useState(false)
  const [mostrarCronometro, setMostrarCronometro] = useState(false)
  const [mostrarEfectoDemo, setMostrarEfectoDemo] = useState(false)

  // variable comun: NO es estado, se recalcula en cada dibujado
  const bolsaTotal = bolsa.length

  const [visibles, setVisibles] = useState([])

  useEffect(() => {
    console.log('🔎 corre el efecto del buscador. busqueda =', busqueda)

    setVisibles(
      frutasVerduras.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    )
  }, [busqueda])

  // este log es del cuerpo del componente: se ve en CADA dibujado
  console.log('🎨 React dibujo App. visibles =', visibles.length)

  // true si el producto ya esta en la bolsa
  const estaEnBolsa = (id) => bolsa.some((item) => item.id === id)

  const agregarBolsa = (fruta) => {
    setBolsa((prev) => {
      // si ya esta, devolvemos el mismo array (no se repite)
      if (prev.some((item) => item.id === fruta.id)) return prev

      return [...prev, fruta]
    })
  }

  const quitarBolsa = (id) => {
    setBolsa((prev) => prev.filter((item) => item.id !== id))
  }

  const vaciarBolsa = () => {
    setBolsa([])
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Verduleria</h1>

      <Contador />

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Frutas y verduras</h2>

        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="buscar en verduleria"
            className="rounded-lg border p-2"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <p>
            En la bolsa: <span className="font-bold">{bolsaTotal}</span>
          </p>

          {bolsaTotal > 0 && (
            <button
              onClick={vaciarBolsa}
              className="px-3 py-1.5 rounded bg-gray-500 text-white hover:bg-gray-600"
            >
              Vaciar bolsa
            </button>
          )}
        </div>

        <FrutaList
          productos={visibles}
          estaEnBolsa={estaEnBolsa}
          agregarBolsa={agregarBolsa}
          quitarBolsa={quitarBolsa}
        />

        <Bolsa bolsa={bolsa} quitarBolsa={quitarBolsa} />
      </section>

      {/* CLASE 02: laboratorio. Los dos se montan y desmontan con un boton. */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Laboratorio clase 02</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setMostrarReloj((prev) => !prev)}
            className="px-3 py-1.5 rounded bg-indigo-500 text-white hover:bg-indigo-600"
          >
            {mostrarReloj ? 'esconder reloj' : 'mostrar reloj'}
          </button>

          {/* <button
            onClick={() => setMostrarCronometro((prev) => !prev)}
            className="px-3 py-1.5 rounded bg-indigo-500 text-white hover:bg-indigo-600"
          >
            {mostrarCronometro ? 'esconder cronometro' : 'mostrar cronometro'}
          </button> */}

          <button
            onClick={() => setMostrarEfectoDemo((prev) => !prev)}
            className="px-3 py-1.5 rounded bg-indigo-500 text-white hover:bg-indigo-600"
          >
            {mostrarEfectoDemo ? 'esconder efectos' : 'mostrar efectos'}
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          {mostrarReloj && <Reloj />}
          {/* {mostrarCronometro && <Cronometro />} */}
          {mostrarEfectoDemo && <EfectoDemo />}
        </div>
      </section>
    </main>
  )
}

export default App
