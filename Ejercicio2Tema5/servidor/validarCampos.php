<?php

function validarNombre($nombre){
    $errores = [];

    if (isset($_POST["nombre"])) {
        $nombre = $_POST["nombre"];
        $errores["nombre"] = [];

        if (!preg_match("/[A-Z]+/", $nombre)) {
            $errores["nombre"]["letra"] = "ERROR ESTO NO ES UNA LETRA";
        }
        if ($nombre <= 5) {
            $errores["nombre"]["min"] = "COMO MÍNIMO DEBE CONTENER MÁS DE 5 CARÁCTERES";
        } else {
            $errores[] = "EL NOMBRE NO PUEDE ESTAR VACÍO";
        }
        return $errores;
    }
}

function validarApellidos($apellidos){
    $errores = [];

    if ($apellidos === $_POST["nombre"]) {
        $errores[] = "LOS APELLIDOS NO PUEDEN SER IGUAL QUE EL NOMBRE";
    }
    if (isset($_POST["apellidos"])) {
        $apellidos = $_POST["apellidos"];
        $errores["apellidos"] = [];

        if ($apellidos === ""){
            $errores["apellidos"]["empty"] = "EL CAMPO APELLIDOS NO PUEDE ESTAR VACÍO";
        }
    }

}

?>