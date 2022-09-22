isTriRect = (ang1, ang2, ang3) => {
    if(ang1 == 90 || ang2 == 90 ||ang3 == 90 ){
        console.log("Sí es");
        return "Sí es";
    }else{
        console.log("No es");
        return "No es";
    }
    //console.log(fword);
    
}


//Define como se van a comportar las diferentes rutas que tenemos en routes
const path = require("path");

//Exports define un metodo o funcion que se va a ejecutar cuando se llame a la ruta
exports.getPagina = (req, res)=>{
    res.sendFile(path.join(__dirname, '..','views','info.html'));
}

exports.getValidacion = (req, res)=>{
    res.sendFile(path.join(__dirname, '..','views','formulario.html'));
}

exports.postValidacion = (req, res)=>{
    console.log(req.body);
    //res.json({estado: "Exitoso"})
    res.send(isTriRect(req.body.ang1, req.body.ang2,req.body.ang3)); 
}
