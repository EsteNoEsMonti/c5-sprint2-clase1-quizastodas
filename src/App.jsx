import { useState, useEffect } from "react"
import frutasVerduras from "./data/frutasVerduras.json"

import Contador from "./components/Contador"
import FrutaList from "./components/FrutaList"
import BolsaModal from "./components/BolsaModal"
import Reloj from "./components/Reloj"
import Cronometro from "./components/Cronometro"
import EfectoDemo from "./components/EfectoDemo"
import EjemploStorage from "./components/EjemploStorage"
import ThemeSwitcher from "./components/ThemeSwitcher"

const App = () => {
  // el estado vive aca, arriba de todos los que lo necesitan
  const [bolsa, setBolsa] = useState(() => {
    try {
      const guardado = localStorage.getItem('verduleria:bolsa')
      return guardado ? JSON.parse(guardado) : []
    } catch {
      return []
    }
  })
  const bolsaTotal = bolsa.length
  const [mostrarBolsa, setMostrarBolsa] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [visibles, setVisibles] = useState([])

  // interruptores para las demos
  const [mostrarReloj, setMostrarReloj] = useState(false)
  // const [mostrarCronometro, setMostrarCronometro] = useState(false)
  const [mostrarEfectoDemo, setMostrarEfectoDemo] = useState(false)

  // este log es del cuerpo del componente: se ve en CADA dibujado
  // console.log('🎨 React dibujo App. visibles =', visibles.length)

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
    if (confirm('estas seguro de querer vaciar la bolsa?')) {
      setBolsa([])
    }
  }

  useEffect(() => {
    console.log('🔎 corre el efecto del buscador. busqueda =', busqueda)

    setVisibles(
      frutasVerduras.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    )
  }, [busqueda])

  useEffect(() => {
    localStorage.setItem('verduleria:bolsa', JSON.stringify(bolsa))
  }, [bolsa])

  return (
    // <main className="min-h-screen bg-fondo p-8 text-texto">
    <main className="min-h-screen bg-fondo p-8 text-texto">
      <h1 className="text-3xl font-bold">Verduleria</h1>

      <Contador />

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Frutas y verduras</h2>

        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="buscar en verduleria"
            className="rounded-lg border border-gray-300 bg-tarjeta p-2 text-texto"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          <button
            onClick={() => setMostrarBolsa(true)}
            className="px-3 py-1.5 rounded bg-green-600 text-white hover:bg-green-700"
          >
            🛒 Ver bolsa ({bolsaTotal})
          </button>
        </div>

        <FrutaList
          productos={visibles}
          estaEnBolsa={estaEnBolsa}
          agregarBolsa={agregarBolsa}
          quitarBolsa={quitarBolsa}
        />
      </section>

      {mostrarBolsa && (
        <BolsaModal
          bolsa={bolsa}
          quitarBolsa={quitarBolsa}
          vaciarBolsa={vaciarBolsa}
          onClose={() => setMostrarBolsa(false)}
        />
      )}

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

      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Laboratorio clase 03</h2>
        <EjemploStorage />
        <ThemeSwitcher />
      </section>
    </main>
  )
}

export default App
