// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE


function concatenarCadenas(){

    let clase = 0;
    let x = "ALUMNO_";
    let y = "DAW_2017";

    let resultado = x + y;

    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario(){

    let x = 1;
    let y = 0;

    let resultado = (x>y) ? true:false;

    return resultado;

}

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];

    delete array[9];

    return array[9] === undefined;

}

function crearArray(){

    var objeto = new Object();
    var fecha = new Date();

    let x = [
        1.5,
        "ALUMNOS",
        fecha,
        8,
        objeto,
        undefined,
        null
    ];

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}

function existeElemento(){

    let x = {prueba1: "perro", prueba2: "gato"};

    return "prueba1" in x && "prueba2" in x;

}