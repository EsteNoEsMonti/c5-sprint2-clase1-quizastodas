import { useBolsaContext } from "../contexts/BolsaContext"

const BolsaModal = ({ onClose }) => {
  const { bolsa, agregarOQuitar, vaciar } = useBolsaContext()

  const icono = (tipo) => (tipo === "fruta" ? "🍐" : "🥕")

  const quitarBolsa = (id) => {
    const producto = bolsa.find((item) => item.id === id)
    if (producto) agregarOQuitar(producto)
  }

  const vaciarBolsa = () => {
    if (confirm('estas seguro de querer vaciar la bolsa?')) vaciar()
  }

  return (
    // fondo oscuro: al clickearlo, cierra
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      {/* la caja del modal. stopPropagation para que clickear adentro no cierre */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl bg-tarjeta p-6 text-texto shadow-xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Mi bolsa</h2>

          <button
            onClick={onClose}
            className="rounded-full px-2 text-2xl leading-none opacity-50 hover:opacity-100"
          >
            &times;
          </button>
        </div>

        {bolsa.length === 0 ? (
          <p className="py-8 text-center opacity-60">Tu bolsa está vacía 🍐</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {bolsa.map((producto) => (
              <li
                key={producto.id}
                className="flex items-center justify-between rounded-lg bg-fondo px-3 py-2"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{icono(producto.tipo)}</span>
                  {producto.nombre}
                </span>

                <button
                  onClick={() => quitarBolsa(producto.id)}
                  className="rounded bg-red-500 px-2 py-0.5 text-sm text-white hover:bg-red-600"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        )}

        {bolsa.length > 0 && (
          <button
            onClick={vaciarBolsa}
            className="mt-4 w-full rounded-lg bg-gray-500 py-2 text-white hover:bg-gray-600"
          >
            Vaciar bolsa
          </button>
        )}
      </div>
    </div>
  )
}

export default BolsaModal
