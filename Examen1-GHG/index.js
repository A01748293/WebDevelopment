//importar las bibliotecas
const express = require('express');
//Es para evitar problemas en las rutas al cambiar entre SO
const path = require('path');
const app = express();      //Metodo que genera una aplicacion de express, jamas cambia la referencia, siempre sera 'app'
const examenRoutes = require('./routes/examen')


//middleware
//Para que reconozca cuando mandamos algo en json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use('/examen', examenRoutes);




//Lanzar la aplicacion 
//listen recibe el puerto donde va a estar y su callback
app.listen(8083, ()=>{
    console.log('Servidor en linea');
    
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


