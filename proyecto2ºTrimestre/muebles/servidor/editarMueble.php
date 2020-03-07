<?php

require_once '../../configuracion/conexion.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$tipo = $_POST['tipo'];
$tamanio = $_POST['tamanio'];
$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "UPDATE muebles SET nombre= '$nombre', tipo = '$tipo', tamanio = '$tamanio', descripcion = '$descripcion', precio = '$precio' WHERE id = '$id'";
$conexion->query($sql);

?>