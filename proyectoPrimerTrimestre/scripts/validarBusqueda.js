
/** Asociamos los eventos para el documento que vamos a controlar */

document.addEventListener("DOMContentLoaded", function(){

    crearSelectTipo("selectTipo");

    crearSelectTamanio("selectTamanio");

    let selectTipo = document.getElementById("selectTipo");
    selectTipo.addEventListener("select", validarBusqueda);

    let selectTamanio = document.getElementById("selectTamanio");
    selectTamanio.addEventListener("select", validarBusqueda);

    crearSelectMuebles("marca");

    let mueblesSimilar = document.getElementById("marca");
    mueblesSimilar.addEventListener("change", obtenerMueblesSimilares);

    let formulario = document.getElementById("busquedaTipoTamaño");
    formulario.addEventListener("submit", comprobarFormulario);

});

function crearSelectTipo(idSelectTipo){
    let select = document.getElementById(idSelectTipo); 
    for(mueble of listaMuebles){
        let option = document.createElement("option");
        option.value = mueble.id;
        option.innerHTML = mueble.tipo;
        select.appendChild(option);
    }
}

function crearSelectTamanio(idSelectTamanio){
    let select = document.getElementById(idSelectTamanio); 
    for(mueble of listaMuebles){
        let option = document.createElement("option");
        option.value = mueble.id;
        option.innerHTML = mueble.tamanio;
        select.appendChild(option);
    }
}

 /**Funcion que valida la búsqueda*/
function validarBusqueda(event){
    let esCorrecto = true;
    let selectTipo = document.getElementById("selectTipo");
    let valor = selectTipo.value;
    let listaErrores = document.getElementById("erroresTipo");
    let selectTamanio = document.getElementById("selectTamanio");
    let valor2 = selectTamanio.value;
    let listaErrores2 = document.getElementById("erroresTamanio");
    listaErrores.innerHTML = "";
    listaErrores2.innerHTML = "";
    selectTipo.classList.remove("inputErroneo");
    selectTipo.classList.remove("inputCorrecto");
    selectTamanio.classList.remove("inputCorrecto");
    selectTamanio.classList.remove("inputErroneo");

    /** Si el valor seleccionado en selectTipo es = "ninguna" muestra error*/
    if (valor === " ") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBES ELEGIR UNA OPCIÓN VÁLIDA";
        listaErrores.appendChild(divError);
        selectTipo.classList.add("inputErroneo");
    } else {
        esCorrecto = true;
        selectTipo.classList.add("inputCorrecto");
    }

    /** Si el valor seleccionado en selectTamanio es = "ninguna" muestra error*/
    if (valor2 === " ") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBES ELEGIR UNA OPCIÓN VÁLIDA";
        listaErrores2.appendChild(divError);
        selectTamanio.classList.add("inputErroneo");
    } else {
        esCorrecto = true;
        selectTamanio.classList.add("inputCorrecto");
    }

    return esCorrecto;
}

function crearSelectMuebles(idSelectMueble){
    let select = document.getElementById(idSelectMueble); 
    for(mueble of listaMuebles){
        let option = document.createElement("option");
        option.value = mueble.id;
        option.innerHTML = mueble.marca;
        select.appendChild(option);
    }
}

function obtenerMueblesSimilares(event) {
    let selectMarca = document.getElementById("marca");
    let idMarcaSeleccionada = selectMarca.value;
    let ulMueblesSimilares = document.getElementById("muebles_similares");
    ulMueblesSimilares.innerHTML = "";
    let spanTipoMueble = document.getElementById("titulo_marca");
    spanTipoMueble.innerHTML = "";

    if (idMarcaSeleccionada !== ""){
        let mueblesMostrados = 0;
        let muebleSeleccionado = listaMuebles.find(muebles => muebles.id === parseInt(idMarcaSeleccionada));
        spanTipoMueble.innerHTML = `${muebleSeleccionado.marca} (${muebleSeleccionado.tipo}-${muebleSeleccionado.tamanio})`;

        let mueblesSimilares = listaMuebles
                                .filter(muebles => muebles.tipo !== muebleSeleccionado.tipo)
                                .filter(muebles => muebles.tamanio === muebleSeleccionado.tamanio)
                                .filter(muebles => muebles.id !== muebleSeleccionado.id)
        
        mueblesSimilares.forEach(function(muebleSimilar){
            let liMueble = document.createElement("li");
            liMueble.innerHTML = `${muebleSimilar.marca} (${muebleSimilar.tipo}-${muebleSimilar.tamanio})`;
            ulMueblesSimilares.appendChild(liMueble);
            mueblesMostrados++;
        });

        if (mueblesMostrados == 0){
            let liMueble = document.createElement("li");
            liMueble.innerHTML = "NO SE HAN ENCONTRADO MUEBLES SIMILARES";
            ulMueblesSimilares.appendChild(liMueble);
        }
    }
}


function comprobarFormulario(event){
    event.preventDefault();
    let esTipoCorrecto = validarBusqueda(document.getElementById("selectTipo"));
    let esTamanioCorrecto = validarBusqueda(document.getElementById("selectTamanio"));

    if(esTipoCorrecto && esTamanioCorrecto){
        let formulario = document.getElementById("buscar");
        formulario.submit();
        event.preventDefault();
        //alert("EL USUARIO SE HA CREADO CORRECTAMENTE");
    }else {
        alert("ERROR EN EL FORMULARIO");
    }
}