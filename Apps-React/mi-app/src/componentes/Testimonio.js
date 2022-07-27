import react from 'react';
import '../Style-sheets/Testimonio.css'


 function Testimonio (props) {
    return(
        <div className='contendor-Testimonio'>
            <img className='imagen-testimonio' src={ require (`../imagenes/${props.imagen}.png`) }
            alt= 'Foto de Emma' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'> <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'> {props.cargo} at <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'> "{props.testimonio}"</p>
            </div>
        </div>
        
      
    );
}

export default Testimonio;

//Exportacion nombrada
// export function Tesstimonio...  &  import { Testimonio }