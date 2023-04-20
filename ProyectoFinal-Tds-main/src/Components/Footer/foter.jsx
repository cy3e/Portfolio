import react from 'react'
import './foter.css';

const foter=() => 
{
    return(
        <div className='App'>
            <div class="container-fluid text-center text-white bg-dark p-3">
                <p class="small" className='bio'>© 2022 Soto Montero - Construcciones y Servicios - Todos los derechos reservados.</p>
                <div className='Social'>
                <a href='https://www.facebook.com/Soto-Montero-construcciones-y-servicios-103003851915449'><img className='fb' src='../../icons/facebook.png' alt='Facebook'/></a>
                <a href='https://www.facebook.com/Soto-Montero-construcciones-y-servicios-103003851915449'><img className='gm' src='../../icons/Gmail.png' alt='Gmail'/></a>
                <a >809-782-6590</a>
                <a>809-904-5587</a>
                </div>
            </div>
        </div>

    );
}
export default foter