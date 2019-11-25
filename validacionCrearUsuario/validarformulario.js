document.addEventListener("DOMContentLoaded", function(){

    let inputNombre = document.getElementById("name");
    inputNombre.addEventListener("keyup",validarNombre);

    let inputApellido = document.getElementById("surname");
    inputApellido.addEventListener("keyup",validarApellidos);

    let inputEdad = document.getElementById("age");
    inputEdad.addEventListener("keyup", validarEdad);

    let inputProfesion = document.getElementById("profesion");
    inputProfesion.addEventListener("select", validarSelect);

    let inputTerminos = document.getElementById("politics");
    inputTerminos.addEventListener("click", comprobarTerminos);

    let formulario = document.getElementById("form");
    formulario.addEventListener("submit", comprobarFormulario);
});

function validarNombre(event){
    let esCorrecto = true;
    let expresion = /^[a-z A-Z]{4,}$/;
    let inputNombre = document.getElementById("name");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");

    if(valor === ""){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "EL CAMPO NO DEBE ESTAR VACÍO";
        listaErrores.appendChild(divError);
    }

    if(expresion.test(valor)){
        esCorrecto = true;
        inputNombre.classList.add("inputCorrecto");

    }
    
    if(!expresion.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS Y DEBE CONTENER MINIMO 4 LETRAS";
        listaErrores.appendChild(divError);
        inputNombre.classList.add("inputErroneo");
        
    }
    return esCorrecto;
}

function validarApellidos(event){
    let esCorrecto = true;
    let expresion = /^[a-z A-Z]{4,}$/;
    let inputApellido = document.getElementById("surname");
    let valor = inputApellido.value.trim();
    let inputNombre = document.getElementById("name");
    let valor2 = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresApellidos");
    listaErrores.innerHTML = "";
    inputApellido.classList.remove("inputErroneo");
    inputApellido.classList.remove("inputCorrecto");

    if(valor === ""){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "EL CAMPO NO DEBE ESTAR VACÍO";
        listaErrores.appendChild(divError);
    }
    
    if(!expresion.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS Y DEBE CONTENER MINIMO 4 LETRAS";
        listaErrores.appendChild(divError);
        inputApellido.classList.add("inputErroneo");
    } else {
        inputApellido.classList.add("inputCorrecto");
    }

    if (valor === valor2) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "APELLIDOS NO PUEDE TENER EL MISMO VALOR";
        listaErrores.appendChild(divError);
        inputApellido.classList.add("inputErroneo");
    }

    return esCorrecto;
}

function validarEdad(event){
    let esCorrecto = true;
    let inputEdad = document.getElementById("age");
    let valor = inputEdad.value.trim();
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    inputEdad.classList.remove("inputErroneo");
    inputEdad.classList.remove("inputCorrecto");

    if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBE CONTENER NUMEROS";
        listaErrores.appendChild(divError);
        inputEdad.classList.add("inputErroneo");
        
    }else if(valor < 18){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "LA EDAD DEBE SER MAYOR DE 18";
        listaErrores.appendChild(divError);
        inputEdad.classList.add("inputErroneo");

    } else {
        inputEdad.classList.add("inputCorrecto");
    }

    return esCorrecto;
}

function validarSelect(event){
    let esCorrecto = true;
    let inputProfesion = document.getElementById("profesion");
    let valor = inputProfesion.value.trim();
    let listaErrores = document.getElementById("erroresSelect");
    listaErrores.innerHTML = "";
    inputProfesion.classList.remove("inputErroneo");
    inputProfesion.classList.remove("inputCorrecto");

    if (valor === "Ninguna") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE SELECCIONAR UNA PROFESIÓN";
        listaErrores.appendChild(divError);
        inputProfesion.classList.add("inputErroneo");
    } else {
        esCorrecto = true;
        inputProfesion.classList.add("inputCorrecto");
    }

    return esCorrecto;
}

function comprobarTerminos(event){
    let esCorrecto = false;
    let inputTerminos = document.getElementById("politics");
    let valor = inputTerminos.value;
    let listaErrores = document.getElementById("errorCheck");
    listaErrores.innerHTML = "";
    inputTerminos.classList.remove("inputErroneo");
    inputTerminos.classList.remove("inputCorrecto");

    if(inputTerminos.checked){
        inputTerminos.classList.add("inputCorrecto");
        esCorrecto = true;
    }else {
        alert("DEBE ACEPTAR LOS TERMINOS");
        inputTerminos.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function comprobarFormulario(event){
    event.preventDefault();
    let esNombreCorrecto = validarNombre(document.getElementById("name"));
    let esApellidoCorrecto = validarApellidos(document.getElementById("surname"));
    let esEdadCorrecta = validarEdad(document.getElementById("age"));
    let esSelect = validarSelect(document.getElementById("profesion"));
    let sonTerminosCorrectos = comprobarTerminos(document.getElementById("politics"));

    if(esNombreCorrecto && esApellidoCorrecto && esEdadCorrecta && esSelect && sonTerminosCorrectos){
        let formulario = document.getElementById("form");
        formulario.submit();
        alert("EL USUARIO SE HA CREADO CORRECTAMENTE");
    }else {
        alert("ERROR EN EL FORMULARIO");
    }
}