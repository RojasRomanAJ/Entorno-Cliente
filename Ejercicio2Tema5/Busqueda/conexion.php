<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

$id=$_POST["id"];

$conn = mysqli_connect( 'localhost', 'root', '', 'todomuebles');

$sql =  "SELECT `id`, `nombre`, `tipo`, `tamanio`, `descripcion` FROM `muebles` WHERE id=$id";
$muebles=array();

$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $muebles[]=$row;
}

echo json_encode($muebles);
?>