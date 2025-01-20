import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './contacto.css';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderBottom: '4px solid #52FFB6', // Border bottom color
              borderRight: '4px solid #52FFB6', // Border right color
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#52FFB6', // Color when focused
            padding: '1px',
            backgroundColor: '#3F608F',

          },
        },
      },
    },
  },
});

function Contacto() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ktkun58',
        'template_97th0cs',
        e.target,
        'user_UZZRkDhqNS7u2f3QF9aOT'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const [name, setName] = useState('');
  const [leyendaName, setLeyendaName] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [botonName, setBotonName] = useState(false);

  const [mail, setMail] = useState('');
  const [leyendaMail, setLeyendaMail] = useState('');
  const [errorMail, setErrorMail] = useState(false);
  const [botonMail, setBotonMail] = useState(false);
  const re = /\S+@\S+\.\S+/;

  const [telefono, setTelefono] = useState('');
  const [leyendaTelefono, setLeyendaTelefono] = useState('');
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [botonTelefono, setBotonTelefono] = useState(false);

  const [mensaje, setMensaje] = useState('');
  const [leyendaMensaje, setLeyendaMensaje] = useState('');
  const [errorMensaje, setErrorMensaje] = useState(false);
  const [botonMensaje, setBotonMensaje] = useState(false);

  const mostrarAlerta = () => {
    Swal({
      title: '¡Su mensaje ha sido enviado con éxito!',
      text: 'En breve nos pondremos en contacto contigo',
      icon: 'success',
      timer: '10000',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="contacto" id="contacto">
        <div className="containerTexto">
          <div>
            <h4 className="titulo">Contacto</h4>
            <p className="texto">
              En Megasteel, estamos aquí para ayudarte. Si tienes alguna
              consulta o necesitas más información sobre nuestros servicios, no
              dudes en completar el formulario. Nuestro equipo se pondrá en
              contacto contigo lo antes posible.
            </p>
            <p className='texto'>También podés contactarnos directamente a nuestro correo: info@megasteel.com</p>
          </div>
        </div>

        <div className="containerBox">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            id="formulario"
            onSubmit={sendEmail}
            className="box"
          >
            <div>
              <TextField
                id="outlined-basic"
                name="nombre"
                label="Nombre"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                }}
                onChange={(e) => {
                  setName(e.target.value);
                  if (name.length > 45) {
                    setErrorName(true);
                    setLeyendaName('Ingrese un nombre válido');
                  } else {
                    setErrorName(false);
                    setLeyendaName('');
                    setBotonName(true);
                  }
                }}
                error={errorName}
                helperText={leyendaName}
              />

              <TextField
                id="outlined-required"
                label="Correo electrónico"
                name="mail"
                variant="outlined"
                fullWidth
                type="email"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                onChange={(e) => {
                  setMail(e.target.value);
                  if (!re.test(mail)) {
                    setErrorMail(true);
                    setLeyendaMail('Ingrese un correo electrónico válido');
                  } else {
                    setErrorMail(false);
                    setLeyendaMail('');
                    setBotonMail(true);
                  }
                }}
                error={errorMail}
                helperText={leyendaMail}
              />
              <TextField
                id="outlined-basic"
                label="Teléfono"
                name="telefono"
                type="number"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                onChange={(e) => {
                  setTelefono(e.target.value);
                  if (telefono.length < 6 || telefono.length > 25) {
                    setErrorTelefono(true);
                    setLeyendaTelefono(
                      'Ingrese un número de contacto válido'
                    );
                  } else {
                    setErrorTelefono(false);
                    setLeyendaTelefono('');
                    setBotonTelefono(true);
                  }
                }}
                error={errorTelefono}
                helperText={leyendaTelefono}
              />

              <TextField
                id="outlined-multiline-static"
                label="Mensaje"
                name="msg"
                multiline
                fullWidth
                rows={4}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                onChange={(e) => {
                  setMensaje(e.target.value);
                  if (mensaje.length < 20 || mensaje.length > 5000) {
                    setErrorMensaje(true);
                    setLeyendaMensaje(
                      'El mensaje debe contener un mínimo de 20 caracteres y un máximo de 5000'
                    );
                  } else {
                    setErrorMensaje(false);
                    setLeyendaMensaje('');
                    setBotonMensaje(true);
                  }
                }}
                error={errorMensaje}
                helperText={leyendaMensaje}
              />
              {botonName &&
              botonTelefono &&
              botonMail &&
              botonMensaje ? (
                <Button
                  variant="contained"
                  size="lg"
                  className="boton"
                  type="submit"
                >
                  Enviar mensaje
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="lg"
                  className="boton"
                  type="submit"
                >
                  Enviar mensaje
                </Button>
              )}
            </div>
          </Box>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Contacto;
