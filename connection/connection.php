<?php
$server_name = "localhost";
$uname = "root";
$pass = "Fuzzi@#4567";
// $pass = "";
$database_name = "chillin";
$connection = mysqli_connect($server_name, $uname, $pass, $database_name);
//now check the connection
if (!$connection) {
die("Connection Failed:" . mysqli_connect_error());
}
mysqli_select_db($connection, 'chillin');
