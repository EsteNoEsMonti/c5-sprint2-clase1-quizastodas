import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode PRENDIDO a proposito: en desarrollo hace que los efectos corran
// dos veces para ayudarte a encontrar errores (clase 02, bloque 3).
// En la app publicada pasa una sola vez. No lo saques.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
