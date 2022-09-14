//Este archivo genera las rutas y las define pero todavía no decimos que hace cada una

const express = require('express')
const router = express.Router()     //Mini aplicación que se adhiere a la aplicacion principal
const tareasController = require('../controllers/tareas')

//Traductor lenguaje efe 14 sept
router.get('/efe', tareasController.getEfe);

//Servicio para procesar los datos del formulario
router.post('/efe', tareasController.postEfe);

module.exports = router



