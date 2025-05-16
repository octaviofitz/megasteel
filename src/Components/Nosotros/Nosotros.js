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
                <h3 className='tituloContainer'>Fernando Rodríguez</h3>
                <p className='textoContainer'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
        </section>
    );
}

export default Nosotros;