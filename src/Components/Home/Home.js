import React from 'react';
import Header from '../Header/Header';
import Nosotros from '../Nosotros/Nosotros';
import Servicios from '../Servicios/Servicios';
import PortfolioMobile from '../PortfolioMobile/PorfolioMobile';
import Contacto from '../Contacto/Contacto';

import './home.css';

function Home() {
    return (
        <section className='home'>
            <Header />
            <Nosotros />
            <Servicios />
            <PortfolioMobile />
            <Contacto />
        </section>
    );
}

export default Home;