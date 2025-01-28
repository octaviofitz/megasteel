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
                    <p className='titulo'>Naves industriales</p>
                    <p className='texto'>Construimos naves industriales funcionales y modernas, diseñadas para optimizar tu producción y almacenamiento.</p>
                </div>

                <div className='card'> 
                    <img src={Img2} alt='' className='img' />
                    <p className='titulo'>Soluciones Agroindustriales</p>
                    <p className='texto'>Soluciones arquitectónicas para la agroindustria, combinando eficiencia, durabilidad y adaptabilidad en cada proyecto.</p>
                </div>

                <div className='card'> 
                    <img src={Img1} alt='' className='img' />
                    <p className='titulo'>Arquitectura deportiva</p>
                    <p className='texto'>Desarrollamos proyectos de arquitectura industrial innovadores, priorizando funcionalidad y máxima eficiencia.</p>
                </div>

                <div className='card'> 
                    <img src={Img2} alt='' className='img' />
                    <p className='titulo'>Centro de distribución</p>
                    <p className='texto'>Diseñamos centros de distribución eficientes y modernos, optimizados para logística y almacenamiento integral.</p>
                </div>
            </div>
        </section>
    );
}

export default Servicios;