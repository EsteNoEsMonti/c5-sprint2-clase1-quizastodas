import Card from "./Card"

const FrutaList = ({ productos, estaEnBolsa, agregarBolsa, quitarBolsa }) => {
  // early return: no hay resultados de la busqueda
  if (productos.length === 0) {
    return <p className="text-gray-500">No encontramos esa fruta 🔍</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {productos.map((producto) => (
        <Card
          key={producto.id}
          producto={producto}
          estaEnBolsa={estaEnBolsa(producto.id)}
          agregarBolsa={agregarBolsa}
          quitarBolsa={quitarBolsa}
        />
      ))}
    </div>
  )
}

export default FrutaList
