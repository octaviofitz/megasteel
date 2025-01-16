import React from 'react';
import Img1 from '../../IMG/Servicios/img1.png';
import Img2 from '../../IMG/Servicios/img2.png';


import './servicios.css';

function Servicios() {
    return (
        <section className='servicios'>
            <h3 className='titulo'>Servicios</h3>
            <p className='texto'>En Megasteel, diseñamos y construimos soluciones industriales que destacan por su calidad, innovación y funcionalidad. Nuestro equipo ofrece servicios especializados para satisfacer las necesidades estructurales de cualquier industria, adaptándonos a cada proyecto.</p>

            <div className='container'>
                
                <div className='card'> 
                    <img src={Img1} alt='' className='img' />
                    <p className='titulo'>Titulo</p>
                    <p className='texto'>Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. </p>
                </div>

                <div className='card'> 
                    <img src={Img2} alt='' className='img' />
                    <p className='titulo'>Titulo</p>
                    <p className='texto'>Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. </p>
                </div>

                <div className='card'> 
                    <img src={Img1} alt='' className='img' />
                    <p className='titulo'>Titulo</p>
                    <p className='texto'>Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. </p>
                </div>

                <div className='card'> 
                    <img src={Img2} alt='' className='img' />
                    <p className='titulo'>Titulo</p>
                    <p className='texto'>Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. Texto del servicio prestado. </p>
                </div>
            </div>
        </section>
    );
}

export default Servicios;