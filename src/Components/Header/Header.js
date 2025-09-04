import React from 'react';
import { Button, Nav} from 'react-bootstrap';

import Video from '../../IMG/Index/video.mp4';

import './header.css';

function Header() {
    return (
        <section className='header'>
            <video autoPlay muted loop playsInline className="bg-video">
                <source src={Video} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
            <h1 className='titulo'>
                MEGASTEEL
                <h2 className='subtitulo'>ARQUITECTURA INDUSTRIAL</h2>
                <Nav.Link href="#contacto"><Button variant="secondary" size="lg" className='button-compra-bentonita latido'>
                 CONSULTAR
             </Button></Nav.Link>
            </h1>
            
            
        </section>
    );
}

export default Header;
