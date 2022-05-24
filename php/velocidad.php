<?php


$distancia = $_GET ['boxdistancia'];
$tiempo = $_GET['boxtiempo'];
$velocidad=$distancia*$tiempo;
print "<p>la distancia es $distancia</p>\n";
print "<p>el tiempo es $tiempo</p>\n";
print "<p>la velocidad es $velocidad</p>\n";


$servername = "localhost";
$database = "id18850569_formulario";
$username = "id18850569_root";
$password = "elkin/?A|wzB3b_DI";

//crar conexion
$conn = mysqli_connect( $servername ,$username ,$password , $database);
//verificar conexion
if (!$conn) {
die("connection failed: " . mysqli_connect_error());
}
echo"connected successfully";

$sql = ("INSERT INTO `calculo`(`distancia`,`tiempo` , `velocidad`) VALUE ('$distancia' , '$tiempo', '$velocidad')");

if (mysqli_query($conn, $sql)) {
    echo "exito en insercion";
    header("location: ../index.html" , true, 301);
    exit();
} else{
    echo "ERROR: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn)

?>                                                                                                                     