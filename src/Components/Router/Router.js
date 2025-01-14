import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Home from '../../Components/Home/Home';
import Industrial from '../../Components/Industrial/Industrial';
import Civil from '../../Components/Civil/Civil';
import Contacto from '../../Components/Contacto/Contacto';
import WhatsappBoton from '../../Components/Utilidades/WhatsappBoton/WhatsappBoton';

import './router.css';

function Router() {
    return (
        <>
        <BrowserRouter>
            <NavBar />
            <div className='body'>
            <Routes>
            <Route path='/' element={<Home />} />
            </Routes>
            <WhatsappBoton phoneNumber='1159300042' />
            <Footer />
            </div>
            </BrowserRouter>
        </>
    );
}

export default Router;