
/** Asociamos los eventos para el documento que vamos a controlar */

document.addEventListener("DOMContentLoaded", function(){

    let inputTipo = document.getElementById("tipo");
    inputTipo.addEventListener("select", busquedaMueble);

    let inputTamanio = document.getElementById("tamanio");
    inputTamanio.addEventListener("select", busquedaMueble);

    let formulario = document.getElementById("buscar");
    formulario.addEventListener("submit", comprobarFormulario);

});

/** Funcion que valida la búsqueda */
function busquedaMueble(event){
    let esCorrecto = true;
    let inputTipo = document.getElementById("tipo");
    let valor = inputTipo.value.trim();
    let inputTamanio = document.getElementById("tamanio");
    let valor2 = inputTamanio.value.trim();
    let listaErrores = document.getElementById("erroresTipo");
    let listaErrores2 = document.getElementById("erroresTamanio");
    listaErrores.innerHTML = "";
    inputTipo.classList.remove("inputErroneo");
    inputTipo.classList.remove("inputCorrecto");
    inputTamanio.classList.remove("inputCorrecto");
    inputTamanio.classList.remove("inputCorrecto");

    /** Si el valor seleccionado en inputTipo es = "ninguna" muestra error */
    if (valor === "ninguna") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBES ELEGIR UNA OPCIÓN VÁLIDA";
        listaErrores.appendChild(divError);
        inputTipo.classList.add("inputErroneo");
    } else {
        inputTipo.classList.add("inputCorrecto");
    }

    /** Si el valor seleccionado en inputTamanio es = "ninguna" muestra error */
    if (valor2 === "ninguna") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBES ELEGIR UNA OPCIÓN VÁLIDA";
        listaErrores2.appendChild(divError);
        inputTamanio.classList.add("inputErroneo");
    } else {
        inputTamanio.classList.add("inputCorrecto");
    }

    return esCorrecto;
}

function comprobarFormulario(event){
    event.preventDefault();
    let esTipoCorrecto = busquedaMueble(document.getElementById("tipo"));
    let esTamanioCorrecto = busquedaMueble(document.getElementById("tamanio"));

    if(esTipoCorrecto && esTamanioCorrecto){
        let formulario = document.getElementById("buscar");
        formulario.submit();
        alert("EL USUARIO SE HA CREADO CORRECTAMENTE");
    }else {
        alert("ERROR EN EL FORMULARIO");
    }
}