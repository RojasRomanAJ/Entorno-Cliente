<?php

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT `id`, `nombre`, `tipo`, `tamanio`, `descripcion`, `precio` FROM `muebles`";
$muebles = $conexion->query($sql);