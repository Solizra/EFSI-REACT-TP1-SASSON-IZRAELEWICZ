import BotonCita from './BotonCita'
import './Cita.css'

const Cita = ({nombreMascota, nombreDueño, fecha, hora, sintomas}) =>{
    return(
        <>
            
            <div className='Listado'>
                <ul>
                    <li>Mascota: {nombreMascota}</li>
                    <li>Dueño: {nombreDueño}</li>
                    <li>Fecha: {fecha}</li>
                    <li>Hora: {hora}</li>
                    <li>Sintomas: {sintomas}</li>
                </ul>
                <BotonCita/>
            </div>
            
        </>
    )
}

export default Cita