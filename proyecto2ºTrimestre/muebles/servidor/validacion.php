<?php

function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estar vacio";

    }else{
        if (!preg_match("/[A-ZÑa-zñ ]{2,}$/",$nombre)) {
            $errores[] = "El nombre debe de tener mas de 2 letras y solo letras";
        }
    }
    return $errores;
}

function validarTipo($tipo){
    $errores = array();
        if($tipo === "0") {
        $errores[] = "Tipo no puede estar vacío";
        }

    return $errores;
}

function validarTamanio($tamanio){
    $errores = array();
        if($tamanio === "0") {
        $errores[] = "Tamaño no puede estar vacío";
        }

return $errores;
}


function validarDescripcion($descripcion){
    $errores = array();
    if($descripcion === "") {
        $errores[] = "El campo Descripción no puede estar vacío";
    }
    return $errores;
}

function validarPrecio($precio){
    $errores = array();
    if($precio === ""){
        $errores[] = "El precio no puede estar vacío";
    } else {
        if (!preg_match("/^[0-9.]{1,}$/",$precio)) {
            $errores[] = "No se permiten letras ni precio negativo";
        }
    }
    return $errores;
}