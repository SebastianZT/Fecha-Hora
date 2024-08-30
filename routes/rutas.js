const express = require('express');
const router = express.Router();
const { fecha, hora, saludo } = require('../test/fecha-hora');

router.use(saludo); // Middleware que muestra "Hola" en la consola
router.use(fecha);  // Middleware que añade la fecha actual al request
router.use(hora);   // Middleware que añade la hora actual al request

router.get('/', (req, res) => {
    console.log("la fecha actual es ${req.fechaActual} y la hora actual es ${req.horaActual}");
    res.send('Consulta realizada, verifica la consola.');
});

module.exports = router;