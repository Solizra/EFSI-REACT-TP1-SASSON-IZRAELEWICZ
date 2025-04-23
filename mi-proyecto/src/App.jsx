import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/Formulario'
import Cita from './components/Cita'
import ListadoCitas from './components/Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>ADMINISTRADOR DE CITAS</h1>
      </div>
      
      <div>
        <Formulario />
      </div>

      <div>
        <ListadoCitas/>
      </div>
        

    </>
  )
}

export default App
