import React from 'react';


import Perfil from '../../IMG/Nosotros/Avatar.png';
import './nosotros.css';

function Nosotros() {
    return (
        <section className='nosotros' id='nosotros'>
            <h2 className='titulo'>NOSOTROS</h2>
            <p className='texto'>En <b className='negrita'>Megasteel</b>, nos especializamos en la ingeniería y construcción de galpones industriales de alta calidad. Con años de experiencia en el sector, ofrecemos soluciones a medida para satisfacer las necesidades estructurales de empresas de diversas industrias. Nuestro equipo de profesionales altamente capacitados se compromete a diseñar y ejecutar proyectos que combinan durabilidad, eficiencia y tecnología avanzada. En Megasteel, creemos en la excelencia como base de todo lo que hacemos, brindando estructuras confiables que superan las expectativas de nuestros clientes.
</p>
         <div className='container'>
            <div>
                <img  src={Perfil} alt='Arquitecto Megasteel' className='img'/>
            </div>
            <div>
                <h3 className='tituloContainer'>MARCELO ROLDÁN</h3>
                <p className='textoContainer'>Soy arquitecto y docente en la FADU – UBA, con <strong>más de un millón de metros cuadrados construidos</strong> a lo largo de mi carrera. Trabajé en empresas como <strong>Hormetal</strong>, <strong>Steel Tech</strong> y <strong>Testa</strong>, y actualmente soy <strong>fundador y director de MegaSteel</strong>, empresa especializada en estructuras metálicas.<br></br>
                Antes lideré <strong>Cimet Argentina</strong>, y fui <strong>jefe de obra de las torres El Faro en Puerto Madero</strong>, uno de los desarrollos más emblemáticos de Buenos Aires. Mi enfoque combina la experiencia técnica en obra con una visión integral de la arquitectura y la innovación constructiva.</p>
            </div>
        </div> 
        </section>
    );
}

export default Nosotros;