<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 


// CREAMOS LA CONECCION CON LA BASE DE DATOS COLOCANDO NUESTRO SERVER,USER,PASSWORD,BASE DE DATOS.
$conn = mysqli_connect( 'localhost', 
                        'root', 
                        '', 
                        'todomuebles');
// CREAMOS EL SELECT QUE BUSQUE LOS DATOS DE NUESTRO MUEBLE CUANDO COINCIDA EL TIPO.
$sql =  "SELECT `id`, `nombre`, `tipo`, `tamanio` FROM `muebles` WHERE `tipo` LIKE '".$_POST['tipo']."'";
$muebles=array();

$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $muebles[]=$row;
}


echo json_encode($muebles);
?>