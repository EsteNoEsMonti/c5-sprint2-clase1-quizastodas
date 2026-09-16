import { useState, useEffect } from "react"
import frutasVerduras from "./data/frutasVerduras.json"

import Contador from "./components/_demos/Contador"
import FrutaList from "./components/FrutaList"
import BolsaModal from "./components/BolsaModal"
import Reloj from "./components/_demos/Reloj"
import Cronometro from "./components/_demos/Cronometro"
import EfectoDemo from "./components/_demos/EfectoDemo"
import EjemploStorage from "./components/_demos/EjemploStorage"
import ThemeSwitcher from "./components/_demos/ThemeSwitcher"
import { useSaludo } from "./hooks/useSalado"
import useToggle from "./hooks/useToggle"
import { useBolsaContext } from "./contexts/BolsaContext"
import EjemploContextSaludo from "./components/_demos/EjemploContextSaludo"
import { useSaludoContext } from "./contexts/SaludoContext"

const App = () => {
  const { mensaje, nombre } = useSaludo('lucas xd')
  console.log(mensaje, nombre)
  const { bolsaTotal } = useBolsaContext()
  const [busqueda, setBusqueda] = useState('')
  const [visibles, setVisibles] = useState([])

  // useToggle devuelve [valor, alternar]: la funcion NO recibe argumentos
  const [mostrarBolsa, alternarBolsa] = useToggle(false)
  const [mostrarReloj, alternarReloj] = useToggle(false)
  const [mostrarEfectoDemo, alternarEfectoDemo] = useToggle(false)

  const saludo = useSaludoContext()

  useEffect(() => {
    console.log('🔎 corre el efecto del buscador. busqueda =', busqueda)

    setVisibles(
      frutasVerduras.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    )
  }, [busqueda])

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
            onClick={alternarBolsa}
            className="px-3 py-1.5 rounded bg-green-600 text-white hover:bg-green-700"
          >
            🛒 Ver bolsa ({bolsaTotal})
          </button>
        </div>

        {/* solo le paso los productos filtrados por la busqueda.
            todo lo de la bolsa lo toma cada Card del contexto */}
        <FrutaList productos={visibles} />
      </section>

      {/* el modal saca la bolsa y las funciones del contexto.
          onClose SI va por prop: abrir/cerrar es estado de App, no de la bolsa */}
      {mostrarBolsa && <BolsaModal onClose={alternarBolsa} />}

      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Laboratorio clase 02</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={alternarReloj}
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
            onClick={alternarEfectoDemo}
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

      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Laboratorio S3 clase 02</h2>
        <EjemploContextSaludo />
        hola2: {saludo}
      </section>
    </main>
  )
}

export default App
