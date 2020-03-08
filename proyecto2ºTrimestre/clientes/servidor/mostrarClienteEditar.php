<?php

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT `id`, `nombre`, `apellidos` FROM `clientes` WHERE `id` = ".$_GET['id'];
$cliente = $conexion->query($sql);