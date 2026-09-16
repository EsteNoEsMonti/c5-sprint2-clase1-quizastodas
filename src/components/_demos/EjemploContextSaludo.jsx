import { useSaludoContext } from '../../contexts/SaludoContext'

const EjemploContextSaludo = () => {
  const saludo = useSaludoContext()
  console.log(saludo)

  return (
    <div>hola: {saludo}</div>
  )
}

export default EjemploContextSaludo
