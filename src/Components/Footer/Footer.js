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
            <p className='texto'>© 2025 Megasteel. Todos los derechos reservados</p>
            <p className='texto'>Desarrollado por <a href='https://www.galide.com.ar' target='__blank' className='bold'>Galidé</a></p>
            </div>
        </footer>
    );
}

export default Footer;