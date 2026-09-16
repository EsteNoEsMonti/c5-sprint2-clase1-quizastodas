import { useContadorContext } from "../../contexts/ContadorContext"

const ContadorCuenta = () => {
  const { count } = useContadorContext()
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-300 p-4">
      <h3 className="text-lg font-semibold">Cuenta</h3>

      <p className="text-5xl font-mono">{count}</p>
      <p className="text-sm font-mono">
        {count === 10 ? 'aguante el 10' : ':('}
      </p>
    </div>
  )
}

export default ContadorCuenta
