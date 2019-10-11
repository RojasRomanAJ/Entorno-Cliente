//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){

    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }

}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos){

    let suma = 0;
    
    for(let i = 0; i < elemetos.length; i++){
        if(elemetos[i] %2 == 0){
            suma = suma + elemetos[i];
        }
    }
    return suma;

}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos){

    let masGrande = elemetos[0];
    
    for(let i = 0; i < elemetos.length; i++){
        if(elemetos[i] > masGrande){
                masGrande = elemetos[i];
        }
    }
    return masGrande;

}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String){

    var x = String.length;
    var cadInvertida = "";

    while(x >= 0){
        cadInvertida = cadInvertida + String.charAt(x);
        x--;
    }
    return cadInvertida;

}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String){

    let suma = 0;
    for(let i = 0; i < String.length; i++){
        if(String[i] %2 !== 0){
            suma ++;
        }
    }
    return suma;
}


