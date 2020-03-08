<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once '../../configuracion/conexion.php';

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT id, nombre, tipo, tamanio, descripcion,precio FROM muebles WHERE tamanio LIKE '%".$_POST['tamanio']."%'");
$stmt->execute();
$muebles = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($muebles);
?>