import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludar from './components/Saludo'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>ADMINISTRADOR DE CITAS</h1>
      </div>
      <div className='listado'>
        <h1>LISTADO</h1>
      </div>
      <div className='crearMiCita'>
        <h1>CREAR MI CITA</h1>
      </div>
      
      
      <div>
        <Formulario />
      </div>
      
      <div>
        <Cita nombreMascota="Toto" nombreDueño="Sol" fecha="5-7-2025" hora="15:30:00" sintomas="se le rompio una pata"/>
        <Cita nombreMascota="Javier" nombreDueño="Indi" fecha="20-5-2025" hora="17:30:00" sintomas="vacunas"/>
        <Cita nombreMascota="Ñoqui" nombreDueño="Flecha" fecha="8-8-2025" hora="12:45:00" sintomas="no quiere comer"/>
      </div>
    </>
  )
}

export default App
