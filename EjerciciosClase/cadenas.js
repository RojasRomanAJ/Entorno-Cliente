function pruebaChartAt(cadena, pos){
    return cadena.charAt(pos);
}

function pruebaChartAtUnicode(cadena, pos){
    return cadena.charCodeAt(pos);
}

function pruebaConcat(){
    let prueba = "hola";
    let nuevaPrueba = prueba.concat("hola1", "hola2", "hola3", "hola4");
    console.log(prueba);
    return nuevaPrueba;
}

function invertirCadena(cadena){

    let resultado = "";
    for(let i = 0; i < cadena.length; i++){
        let char = cadena.charAt(i);
        if(char.localeCompare(char.toLocaleUpperCase()) === 0){
            resultado += char.toLocaleLowerCase();
        }else{
            resultado += char.toUpperCase();
        }
    }
    return resultado;
}

function invertirPalabra(palabra){

    let tam = palabra.length -1;
    let resultado = "";
    while(tam >= 0){
        resultado += palabra.charAt(tam);
        tam--;
    }
    return resultado;
}

function importarCadena(palabra, elemento, pos){

    let resultado = "";
    for(let i = 0; i < palabra.length; i++){
        if(i === pos){
            resultado += elemento;
        }
        resultado += palabra.charAt(i);
    }
    return resultado;
}

function incluirPalabra2(palabra, elemento, pos){

    if(pos === undefined){
        pos = 0;
    }
    let resultado = "";
    let a = palabra.slice(0, pos);
    let b = palabra.slice(pos);

    resultado = a + elemento + b;
    return resultado;
}

function cogerPalabra(frase, numPalabras){

    let palabras = frase.split(" ");
    let resultado = "";
    let i = 0;
    let numeroPalabrasCogidas = 0;
    while(numeroPalabrasCogidas < numPalabras && i < palabras.length){
        let palabra = palabras[i];
        if(palabra !== ""){
            resultado += palabra + " ";
            numeroPalabrasCogidas++;
        }
        i ++;
    }
    return resultado.trim();
}