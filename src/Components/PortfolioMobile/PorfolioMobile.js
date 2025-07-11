import React from 'react';
import ImageGallery from 'react-image-gallery'; 
import 'react-image-gallery/styles/css/image-gallery.css'; 

import './portfolioMobile.css';

function PorfolioMobile() {

  const images = [

    {
      original: require('../../IMG/Trabajos/Trabajo16.webp'),
      thumbnail: require('../../IMG/Trabajos/Trabajo16.webp'),
    },

    {
      original: require('../../IMG/Trabajos/Trabajo17.webp'),
      thumbnail: require('../../IMG/Trabajos/Trabajo17.webp'),
    },

    {
      original: require('../../IMG/Trabajos/Trabajo18.webp'),
      thumbnail: require('../../IMG/Trabajos/Trabajo18.webp'),
    },

    {
      original: require('../../IMG/Trabajos/Trabajo19.webp'),
      thumbnail: require('../../IMG/Trabajos/Trabajo19.webp'),
    },


    {
      original: require('../../IMG/Trabajos/Trabajo1.webp'),
      thumbnail: require('../../IMG/Trabajos/Trabajo1.webp'),
    },
    {
        original: require('../../IMG/Trabajos/Trabajo2.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo2.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo3.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo3.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo4.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo4.webp'),
      }, 
      {
        original: require('../../IMG/Trabajos/Trabajo4-1.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo4-1.webp'),
      }, 
      {
        original: require('../../IMG/Trabajos/Trabajo5.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo5.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo6.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo6.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo7.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo7.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo8.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo8.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo9.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo9.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo10.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo10.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo11.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo11.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo12.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo12.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo13.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo13.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo14.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo14.webp'),
      },
      {
        original: require('../../IMG/Trabajos/Trabajo15.webp'),
        thumbnail: require('../../IMG/Trabajos/Trabajo15.webp'),
      }
 
  ];

  return (
    <section className='portfolioMobile' id='portfolio'>
        <h3 className='titulo'>Nuestros trabajos</h3>
        <p className='texto'>A lo largo de los años, en Megasteel nos hemos especializado en proyectos de arquitectura industrial, brindando soluciones robustas y eficientes para todo tipo de estructuras. Cada uno de nuestros trabajos refleja nuestro compromiso con la calidad, la precisión y el diseño innovador, adaptado a las necesidades específicas de cada cliente. A continuación, te invitamos a descubrir algunos de nuestros proyectos más recientes, donde la experiencia y la dedicación se transforman en resultados concretos.</p>
      <ImageGallery items={images} />
    </section>
  );
}

export default PorfolioMobile;
