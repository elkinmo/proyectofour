<?php
$base = $_GET [ 'base'];
$altura = $_GET  ['altura'];
$area=$base*$altura;
print "<p>el area es $area</p>\n";
print "<p>la base es $base</p>\n";
print"<p>la altura es $altura</p>\n";
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

$sql = ("INSERT INTO `calculararea`(`base`,`altura`,`area`) VALUE ('$base' , '$altura' ,'$area')");

if (mysqli_query($conn, $sql)) {
    echo "exito en insercion";
    header("location: ../index.html" , true, 301);
    exit();
} else{
    echo "ERROR: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn)







?>