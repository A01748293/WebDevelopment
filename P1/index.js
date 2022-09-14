//importar las bibliotecas
const express = require('express');
//Es para evitar problemas en las rutas al cambiar entre SO
const path = require('path');
const app = express();      //Metodo que genera una aplicacion de express, jamas cambia la referencia, siempre sera 'app'
const consolaRoutes = require('./routes/consola')
const tareasRoutes = require('./routes/tareas')

//middleware
//Para que reconozca cuando mandamos algo en json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use('/consola', consolaRoutes);
app.use('/tareas', tareasRoutes);


//Definicion de nuestra aplicación web
app.get('/');
//Funciones que reciben un string y una funcion callback
//Get recibe el path y un callback que en este caso es la funcion flecha (una funcion anonima = sin nombre)

//Al acceder a la ruta /bigote se imprime algo en la consola del servidor y se regresa un codigo HTML 
app.get('/bigote', (request, response) =>{
    console.log('Hola mundo!');
    response.send('<h1>Hola Mundo</h1>');
});


app.get('/', (req, res) =>{
    //dirname toma la ruta como el sistema desde el que se esta ejecutando
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home', (req, res) =>{
    //dirname toma la ruta como el sistema desde el que se esta ejecutando
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
});

//La tarea 
app.get('/tarea', (req, res) =>{
    //dirname toma la ruta como el sistema desde el que se esta ejecutando
    res.sendFile(path.join(__dirname, 'views', 'tarea.html'));
});


//Prueba query
app.get('/prueba1', (req, res)=>{
    console.log(req.query);
    res.send("Datos enviados por query"+req.query.name);
});

//Prueba params
app.get('/prueba2/:name/:age', (req, res)=>{
    console.log(req.params);
    res.send("Datos enviados por params"+req.params.name)
});

//Prueb
app.post('/prueba3',(req, res)=>{
    console.log(req.body);
    res.send("Datos recibidos");
})


//Lanzar la aplicacion 
//listen recibe el puerto donde va a estar y su callback
app.listen(8080, ()=>{
    console.log('Servidor en linea');
    
    //console.log(SpeakEfe("hofolafa  peferfefectofo"));
    //console.log(SpeakEfe("mufurcifiefelafagofo"));
    // console.log(SpeakEfe("fefernafandofo fefernafandefez plafafofon frifitafatafas"));
    // console.log(SpeakEfe("frifitafatafas"));
    // console.log(SpeakEfe("hofolaFa  peFerFefectofo"));
    // console.log(SpeakEfe("afafafan"));
    // console.log(SpeakEfe("Ifintrofodufucefe ufunafa frafasefe efen efefefe"));
});



//Funciones para la tarea del 14 de sept
const SpeakEfe = (fword) => {
    //let fword = $('#frase-efe').val();
    //console.log('Iniciando');
    let normalWord = "";
    //console.log("fword");
    fword = fword.toLowerCase();
    //console.log(fword);
    
    for(let i = 0; i<fword.length; i++){        
        if(fword[i]==="a" || fword[i]==="e" || fword[i]==="i" || fword[i]==="o" || fword[i]==="u" ){
            normalWord = normalWord+fword[i]
            if(fword[i+1] === "f" && fword[i] === fword[i+2]){
                i += 2;
            }
        }
        else{
            normalWord = normalWord+fword[i]
        }
    }
    return normalWord
    //return $('#convertedDegree').text(normalWord);
    
}




const palindromo = (fword) => {
    //console.log('Iniciando');
    let normalWord = "";
    //console.log("fword");
    fword = fword.toLowerCase();
    //console.log(fword);
    
    for(let i = 0; i<fword.length; i++){        
        if(fword[i]==="a" || fword[i]==="e" || fword[i]==="i" || fword[i]==="o" || fword[i]==="u" ){
            normalWord = normalWord+fword[i]
            if(fword[i+1] === "f" && fword[i] === fword[i+2]){
                i += 2;
            }
        }
        else{
            normalWord = normalWord+fword[i]
        }
    }
    return normalWord
}


