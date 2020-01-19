<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$marca = $_POST["marca"];
$tipo = $_POST["tipo"];
$disponibilidad = $_POST["disponibilidad"];
$descripcion = $_POST["descripcion"];

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "tienda_muebles";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("INSERT INTO muebles (marca, tipo, disponibilidad, descripcion) VALUES ('$marca', '$tipo', '$disponibilidad', '$descripcion')");
$stmt->execute();

?>