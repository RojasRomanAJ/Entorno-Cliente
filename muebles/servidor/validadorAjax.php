<?php
require_once "validacion.php";

$errores = array();
$errores["nombre"] = array();
$errores["tipo"] = array();
$errores["tamanio"] = array();
$errores["descripcion"] = array();
$errores["precio"] = array();


if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["tipo"])){
    $errores["tipo"] = validarTipo(trim($_POST["tipo"]));
    
}

if(isset($_POST["tamanio"])){
    $errores["tamanio"] = validarTamanio(trim($_POST["tamanio"]));
}

if(isset($_POST["descripcion"])){
    $errores["descripcion"] = validarDescripcion(trim($_POST["descripcion"]));
}

if(isset($_POST["precio"])){
    $errores["precio"] = validarPrecio(trim($_POST["precio"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);