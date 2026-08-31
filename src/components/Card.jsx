const Card = ({ producto, estaEnBolsa, agregarBolsa, quitarBolsa }) => {
  // icono segun el tipo (campo nuevo del json)
  const icono = producto.tipo === "fruta" ? "🍐" : "🥕"

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-tarjeta p-4 text-texto shadow-sm transition hover:shadow-md">
      <span className="text-4xl">{icono}</span>

      <h3 className="text-lg font-semibold">{producto.nombre}</h3>

      <p className="text-sm opacity-70">${producto.precio} / kg</p>

      {producto.esDeEstacion && (
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          De estacion
        </span>
      )}

      {estaEnBolsa ? (
        <button
          onClick={() => quitarBolsa(producto.id)}
          className="mt-1 w-full rounded bg-red-500 px-3 py-1.5 text-white hover:bg-red-600"
        >
          Quitar
        </button>
      ) : (
        <button
          onClick={() => agregarBolsa(producto)}
          className="mt-1 w-full rounded bg-acento px-3 py-1.5 text-white hover:opacity-90"
        >
          Agregar
        </button>
      )}
    </div>
  )
}

export default Card
