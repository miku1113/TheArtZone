<?php 
    $host = "mysql-3cafbf5e-mihirjariwala334-4557.e.aivencloud.com";
    $username = "avnadmin";
    $password = "AVNS_KM7Utdv5UW2kDng0884";
    $database = "TheArtZone";

    $conn = mysqli_connect($host,$username,$password,$database);

    if($conn){
    }
    else{
        echo "connection error";
    }
?>