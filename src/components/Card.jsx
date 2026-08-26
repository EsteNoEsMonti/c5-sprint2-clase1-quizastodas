const Card = ({ producto, estaEnBolsa, agregarBolsa, quitarBolsa }) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{producto.nombre}</h3>

      {estaEnBolsa ? (
        <button
          onClick={() => quitarBolsa(producto.id)}
          className="px-3 py-1.5 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Quitar
        </button>
      ) : (
        <button
          onClick={() => agregarBolsa(producto)}
          className="px-3 py-1.5 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Agregar
        </button>
      )}
    </div>
  )
}

export default Card
