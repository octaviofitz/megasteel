import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Home from '../../Components/Home/Home';
import Industrial from '../../Components/Industrial/Industrial';
import Civil from '../../Components/Civil/Civil';
import Contacto from '../../Components/Contacto/Contacto';

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

            <Footer />
            </div>
            </BrowserRouter>
        </>
    );
}

export default Router;