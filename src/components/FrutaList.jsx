import Card from "./Card"

// antes recibia: productos, estaEnBolsa, agregarBolsa, quitarBolsa (4 props)
// pero 3 de esas 4 solo las pasaba a Card sin usarlas (prop drilling).
// ahora recibe SOLO productos, que es lo unico que de verdad usa.
const FrutaList = ({ productos }) => {
  // early return: no hay resultados de la busqueda
  if (productos.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-500">
        No encontramos ese producto 🔍
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {productos.map((producto) => (
        // Card ya no recibe nada de la bolsa: lo toma del contexto por su cuenta
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default FrutaList
