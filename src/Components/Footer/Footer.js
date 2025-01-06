import React from 'react';

import logo from '../../IMG/Index/Isologo.png';

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <img src={logo} className='logo' alt='Logo Megasteel' />
            <p className='links'>© 2024 Megasteel. Todos los derechos reservados</p>
            <p className='links'>Desarrollado por Galidé</p>
            </div>
        </footer>
    );
}

export default Footer;