const Bolsa = ({ bolsa, quitarBolsa }) => {
  // early return: el "empty state"
  if (bolsa.length === 0) {
    return <p className="mt-6 text-gray-500">Tu bolsa está vacía 🍐</p>
  }

  return (
    <section className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Mi bolsa</h3>

      <ul className="flex flex-col gap-2">
        {bolsa.map((producto) => (
          <li key={producto.id} className="flex items-center gap-3">
            <span>{producto.nombre}</span>

            <button
              onClick={() => quitarBolsa(producto.id)}
              className="px-2 py-0.5 rounded bg-red-500 text-white text-sm hover:bg-red-600"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Bolsa
