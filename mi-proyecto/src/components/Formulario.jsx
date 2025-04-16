import './Formulario.css'

function Formulario(){
    return(
        <>
            <div className="containerCitas">
                <form className="Formulario">
                    <p>Nombre Mascota</p>
                    <input type="text" name="nombreMascota" placeholder="Nombre Mascota"/>

                    <p>Nombre Dueño</p>
                    <input type="text" name="nombreDueño" placeholder="Nombre dueño"/>

                    <p>Fecha</p>
                    <input type="date" name="fecha"/>

                    <p>Hora</p>
                    <input type="time" name="hora"/>

                    <p>Sintomas</p>
                    <input type="textarea" name="sintomas" />
                    
                    <p></p>
                    <input className="BotonForm" type="submit" value="Agregar Cita" />
                </form>
            </div>
        </>
    )
}

export default Formulario