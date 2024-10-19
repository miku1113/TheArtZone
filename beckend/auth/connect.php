<?php 
$host = "localhost";
$username = "root";
$password = "";
$database = "TheArtZone";
    $conn = mysqli_connect($host,$username,$password,$database);

    if($conn){
    }
    else{
        echo "connection error";
    }
?>