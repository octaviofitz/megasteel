import React from 'react';
import IMG1 from '../../IMG/Servicios/img1.webp';
import IMG2 from '../../IMG/Servicios/img2.webp';
import IMG3 from '../../IMG/Servicios/img3.webp';
import IMG4 from '../../IMG/Servicios/img4.webp';

import './cards.css';

function Cards() {
    return (
        <section className='cards'>

            <article className='tarjeta'>
                <img src={IMG1} alt='Naves industriales Megasteel' className='img' />
                <div className='overlay'>
                    <h3 className='titulo'>Naves industriales</h3>
                    <p className='texto'>
                        Construimos naves industriales funcionales y modernas, diseñadas para optimizar tu producción y almacenamiento.
                    </p>
                </div>
            </article>

            <article className='tarjeta'>
                <img src={IMG2} alt='Soluciones agroindustriales Megasteel' className='img' />
                <div className='overlay'>
                    <h3 className='titulo'>Soluciones agroindustriales</h3>
                    <p className='texto'>
                        Soluciones arquitectónicas para la agroindustria, combinando eficiencia, durabilidad y adaptabilidad en cada proyecto.
                    </p>
                </div>
            </article>

            <article className='tarjeta'>
                <img src={IMG3} alt='Arquitectura deportiva Megasteel' className='img' />
                <div className='overlay'>
                    <h3 className='titulo'>Arquitectura deportiva</h3>
                    <p className='texto'>
                    Desarrollamos proyectos de arquitectura industrial innovadores, priorizando funcionalidad y máxima eficiencia.
                    </p>
                </div>
            </article>

            <article className='tarjeta'>
                <img src={IMG4} alt='Centro de distribuición Megasteel' className='img' />
                <div className='overlay'>
                    <h3 className='titulo'>Centro de distribución</h3>
                    <p className='texto'>
                    Diseñamos centros de distribución eficientes y modernos, optimizados para logística y almacenamiento integral.
                    </p>
                </div>
            </article>

        </section>
    );
}

export default Cards;
