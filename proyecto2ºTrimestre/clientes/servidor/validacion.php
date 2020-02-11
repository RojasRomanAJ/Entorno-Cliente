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

function validarApellido($apellido,$nombre){
    $errores = array();
    if($apellido === "") {
    $errores[] = "El apellido esta vacio";
    }else{
        if ($apellido === $nombre) {
            $errores[] = "El apellido es igual que el nombre";
        }
    }
    return $errores;
}

function validarProducto($producto){
    $errores = array();
    if($producto === "0") {
    $errores[] = "El producto esta vacio";
    
}
return $errores;
}


function validarTerminos($terminos){
    $errores = array();
    if($terminos !== "1") {
        $errores[] = "Acepte los terminos y condiciones";
    }
    return $errores;
}