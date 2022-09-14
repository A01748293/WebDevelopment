SpeakEfe = (fword) => {
    //console.log("Funcionando");
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

//Define como se van a comportar las diferentes rutas que tenemos en routes
const path = require("path");

exports.getEfe = (req, res)=>{
    res.sendFile(path.join(__dirname, '..','views','speakF.html'));
}

exports.postEfe = (req, res)=>{
    console.log(req.body.frase);
    res.send(SpeakEfe(req.body.frase));   
}





