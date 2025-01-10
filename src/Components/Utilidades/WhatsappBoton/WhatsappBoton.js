import React from 'react';
import BotonWhatsapp from '../../../IMG/Index/Whatsapp.png';

import './whatsapp.css';

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className='whatsapp'>
      <button onClick={handleClick}>
        <img src={BotonWhatsapp} alt='Botón de WhatsApp' className='icono' />
      </button>
    </div>
  );
};

export default WhatsAppButton;
