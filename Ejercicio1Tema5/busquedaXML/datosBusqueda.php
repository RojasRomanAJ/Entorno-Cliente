<?php

header('Cache-Control: no-cache, must-revalidate');
header("Content-Type: text/xml; charset=utf-8");

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "tienda_muebles";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT marca, tipo, disponibilidad, descripcion FROM muebles WHERE tipo LIKE '%".$_GET['tipo']."%'");
$stmt->execute();
$muebles = $stmt->fetchAll(PDO::FETCH_ASSOC);