//Este archivo genera las rutas y las define pero todavía no decimos que hace cada una

const express = require('express')
const router = express.Router()     //Mini aplicación que se adhiere a la aplicacion principal
const examenController = require('../controllers/examen')


//Create Read Update Delete (CRUD) - Altas Bajas Cambios y Consultas (ABCC)

//Servicio Pagina
router.get('/pagina', examenController.getPagina);

//Servicio para Validacion
router.get('/validacion', examenController.getValidacion);
router.post('/validacion', examenController.postValidacion);

module.exports = router



