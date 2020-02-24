<?php
require_once "validacion.php";

//Creamos los arrays de errores diferenciando cada uno por cada apellido de dato
$errores = array();
$errores["nombre"] = array();
$errores["apellido"] = array();
$errores["producto"] = array();
$errores["terminos"] = array();


if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["apellido"])){
    $errores["apellido"] = validarApellido(trim($_POST["apellido"]),trim($_POST["nombre"]));
    
}

if(isset($_POST["producto"])){
    $errores["producto"] = validarProducto(trim($_POST["producto"]));
}


if(isset($_POST["terminos"])){
    $errores["terminos"] = validarTerminos(trim($_POST["terminos"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);