import { useContadorContext } from "../../contexts/ContadorContext"

const ContadorControlador = () => {
  const { handleIncrementar, handleDecrementar, handleReset } = useContadorContext()
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-300 p-4">
      <h3 className="text-lg font-semibold">Controlador</h3>

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

export default ContadorControlador
