//Este archivo genera las rutas y las define pero todavía no decimos que hace cada una

const express = require('express')
const router = express.Router()     //Mini aplicación que se adhiere a la aplicacion principal
const consolaController = require('../controllers/consola')


//Create Read Update Delete (CRUD) - Altas Bajas Cambios y Consultas (ABCC)

//Servicio para decir hola
router.get('/bienvenido', consolaController.getBienvenidoConsola);

//Servicio para mostrar el formulario
router.get('/altaConsola', consolaController.getAltaConsola);

//Servicio para procesar los datos del formulario
router.post('/altaConsola', consolaController.postAltaConsola);

//Servicio para consultar todos los datos
router.get('/consultaConsola', consolaController.getConsultaConsola)

module.exports = router



