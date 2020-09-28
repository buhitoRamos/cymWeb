<?php

include('DataBase.php');

$user = $_POST['us'];

if(!empty($user)) {
$query = "SELECT * FROM usuario WHERE user LIKE '$user%'";
$result = mysqli_query($conn, $query);

if(!$result) {
die('Query Error' . mysqli_error($conn));
}

$json = array();
while($row = mysqli_fetch_array($result)) {
$json[] = array(
'user' => $row['user'],
'pass' => $row['pass']
);
}
$jsonstring = json_encode($json);
echo $jsonstring;


}

?>