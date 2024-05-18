<?php
header("Access-Control-Allow-Origin: *"); // Allow access from all origins
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow only GET, POST, and OPTIONS requests
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow Content-Type and Authorization headers

include 'connect.php';

$id = $_GET["id"];

$sql = "SELECT * FROM classes WHERE id = $id";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $data = mysqli_fetch_assoc($result);
    echo json_encode($data);
} else {
    echo json_encode(array("message" => "No data found"));
}

mysqli_close($conn);
?>
