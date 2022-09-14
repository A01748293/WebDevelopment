//Define como se van a comportar las diferentes rutas que tenemos en routes
const path = require("path");

//Exports define un metodo o funcion que se va a ejecutar cuando se llame a la ruta
exports.getBienvenidoConsola = (req, res)=>{
    res.send('<h1>Bienvenido a las consolas </h1>');
}

exports.getAltaConsola = (req, res)=>{
    res.sendFile(path.join(__dirname, '..','views','formulario.html'));
}

exports.postAltaConsola = (req, res)=>{
    console.log(req.body);
    res.json({estado: "Exitoso"})
}

exports.getConsultaConsola = (req, res)=>{
    res.send('<h1>datos de las consolas</h1>');
}