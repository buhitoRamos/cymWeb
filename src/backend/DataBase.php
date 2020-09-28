<?php
$servername = "173.212.220.29";
$database = "cym";
$username = "mart";
$password = "yyTeX4q1yl9bL6Fy";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>