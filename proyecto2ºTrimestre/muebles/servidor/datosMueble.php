<?php

require_once "C:/xampp1/htdocs/EntornoCliente/proyecto2ºTrimestre/configuracion/conexion.php";

$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT `id`, `nombre`, `tipo`, `tamanio`, `descripcion`, `precio` FROM `muebles`";
$muebles = $conexion->query($sql) or die;