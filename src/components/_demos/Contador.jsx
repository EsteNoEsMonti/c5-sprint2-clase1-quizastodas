import ContadorCuenta from "./ContadorCuenta"
import ContadorControlador from "./ContadorControlador"
import useContador from "../../hooks/useContador"
import { ContadorProvider } from "../../contexts/ContadorContext"

const Contador = () => {
  return (
    <ContadorProvider>
      <div className="flex flex-col items-center gap-4 p-8">
        <h2 className="text-2xl font-bold">Contador</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ContadorCuenta />
          <ContadorControlador />
        </div>
      </div>
    </ ContadorProvider>
  )
}

export default Contador
