<?php
$nombre = $_GET ['boxname'];
$apellido = $_GET['boxlastname'];
$email = $_GET ["boxemail"];
$celular=$_GET["boxnumerocel"];
print "<p>el nombre es $nombre</p>\n";
print "<p>el apellido es $apellido</p>\n";
print "<p>el email es $email</p>\n";
print "<p>el celular es $celular</p>\n";

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

$sql = ("INSERT INTO `Registro`(`nombre`,`apellido`,`email`,`celular`) VALUE ('$nombre' , '$apellido', '$email', '$celular')");

if (mysqli_query($conn, $sql)) {
    echo "exito en insercion";
    header("location: ../index.html" , true, 301);
    exit();
} else{
    echo "ERROR: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn)



?>