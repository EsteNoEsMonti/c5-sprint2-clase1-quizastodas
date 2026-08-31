import { useState } from "react"
import { useEffect } from "react"

const CLAVE_TEMA = 'verduleria:tema'
const ThemeSwitcher = () => {
  const [modoOscuro, setModoOscuro] = useState(() => {
    return localStorage.getItem(CLAVE_TEMA) === 'oscuro'
  })

  useEffect(() => {
    localStorage.setItem(CLAVE_TEMA, modoOscuro ? 'oscuro' : 'claro')
    document.documentElement.classList.toggle('dark', modoOscuro)
  }, [modoOscuro])

  return (
    <>
      <button
        type="buttom"
        onClick={() => setModoOscuro((prev) => !prev)}
        className="rounded-lg bg-tarjeta px-3 py-1 text-texto"
      >
        {modoOscuro ? '🌞 Modo Claro' : '🌚 Modo Oscuro'}
      </button>

    </>
  )
}

export default ThemeSwitcher