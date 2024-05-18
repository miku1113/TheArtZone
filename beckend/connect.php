<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = "mysql-3cafbf5e-mihirjariwala334-4557.e.aivencloud.com";
$username = "avnadmin";
$password = "AVNS_KM7Utdv5UW2kDng0884";
$database = "TheArtZone";

// Create connection
$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if ($conn) {
    echo "Connection successful!";
} else {
    // Display the connection error
    die("Connection failed: " . mysqli_connect_error());
}
?>
