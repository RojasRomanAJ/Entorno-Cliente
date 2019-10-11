/* Dado un Array, contad el numero de vocales del array */

function contarVocales(lista){

    let contador = 0;

    for(let letra of lista){
        switch(letra){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'á':
            case 'é':
            case 'í':
            case 'ó':
            case 'ú':
            case 'Á':
            case 'É':
            case 'Í':
            case 'Ó':
            case 'Ú':
            
                contador ++;
                break;
        }
    }
    return contador;
}

let resultado = contarVocales(["a", "E", "n", "F", "t"]);
console.log("El resultado es: " + resultado);

/* Dado un numero sacarle el factorial */

function factorial(n){

    var numero = 1     
        for(var i = 1; i <= n; i++){
            numero = numero * i;
        }
        return numero;
        
    }
    

    let resultado2 = factorial(0);
    console.log("El factorial es: " + resultado2);


function comparaListas(lista1, lista2){

    let puntos1 = 0;
    let puntos2 = 0;

    for(let i = 0; i < lista1.length; i++){
        if(typeof lista1[i] === "number"
            && typeof lista2[i] === "number"){

        }
        if(lista1[i] > lista2[i]){
            puntos1 ++;
        }else if(lista1[i] < lista2[i]){
            puntos2 ++;
        }
    }
    if(puntos1 > puntos2){
        console.log(`Gana Lista1: ${puntos1}`);
    }else if(puntos1 < puntos2){
        console.log(`Gana Lista2: ${puntos2}`);
    }
        console.log(`Empate ${puntos1}`);

}

comparaListas([7,2,3,4,5],[5,4,3,2,1]);

function concatenarLista(lista){

    let resultado = "";
    let tamLista = lista.length;

    for(let i = 0; i < tamLista/2; i++){
        if(i === (tamLista -i -1)){
            resultado += lista[i];
        }else{
            resultado = lista[i];
            resultado += lista[i] + lista[tamLista -i -1];
        }
    }
    console.log("El resultado de concatenar es :" + resultado);
    return resultado;

}

concatenarLista([1,2,3]);
