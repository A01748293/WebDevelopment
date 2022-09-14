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

isPalindrome = (phrase) => {
    phrase = phrase.toLowerCase();
    //console.log(fword);
    var palindrome = true
    for(let i = 0; i<(phrase.length)/2; i++){        
        if(phrase[i] != phrase[phrase.length-i-1]){
            palindrome = false
        }
    }   
    return palindrome
}



//Define como se van a comportar las diferentes rutas que tenemos en routes
const path = require("path");

//Lenguaje efe
exports.getEfe = (req, res)=>{
    res.sendFile(path.join(__dirname, '..','views','speakF.html'));
}

exports.postEfe = (req, res)=>{
    console.log(req.body.frase);
    res.send(SpeakEfe(req.body.frase));   
}

//Palindromo
exports.getPalindrome = (req, res)=>{
    res.sendFile(path.join(__dirname, '..','views','palindromo.html'));
}

exports.postPalindrome = (req, res)=>{
    console.log(req.body.frase);
    res.send(isPalindrome(req.body.frase));   
}






