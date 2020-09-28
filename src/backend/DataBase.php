<?php
$servername = "173.212.220.29";
$database = "mart";
$username = "mart";
$password = "yyTeX4q1yl9bL6Fy";

$connection = mysqli_connect(
  $servername, $username, $password, $database
);
 
if($connection) {
  echo 'database is connected';
}


?>