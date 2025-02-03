import React from 'react';

import logo from '../../IMG/Index/Isologo.png';

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
          
            <div className='containerImg'>
                <img src={logo} className='logo' alt='Logo Megasteel' />
                     </div>

                <div className='containerTexto'>
            <p className='texto'>Oficina: Avda. Roque Saénz Peña 730 P.8</p>
            <p className='texto'>Depósito Los Castaños 47 - Escobar</p>
            <p className='texto'>Depósito King 590 - Alte. Brown</p>
            </div>

            <div className='galide'>
            <p className='texto'>Desarrollado por <a href='https://www.galide.com.ar' target='__blank' className='bold'>Galidé</a></p>
            </div>
           
        </footer>
    );
}

export default Footer;