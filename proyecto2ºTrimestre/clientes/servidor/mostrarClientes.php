<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once '../../configuracion/conexion.php';

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT nombre,apellidos,producto FROM clientes";
$resultado = $conexion->query($sql);
$clientes = array();
if ($resultado->num_rows > 0) {
    while($cliente = $resultado->fetch_assoc()) {
        $clientes[] = $cliente;
    }
}
echo json_encode($clientes);