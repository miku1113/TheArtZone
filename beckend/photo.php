<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow requests with the following methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow requests with the following headers
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

// Include database connection
include 'auth/connect.php';

// Check if 'id' parameter is set in the URL
if(isset($_GET['id'])) {
    $id = $_GET['id'];

    // Prepare SQL query
    $sql = "SELECT * FROM photos WHERE clas_id = $id";

    // Execute query
    $result = mysqli_query($conn, $sql);

    // Check if query was successful
    if($result) {
        // Initialize an empty array to store results
        $photos = array();

        // Fetch associative array of rows
        while($row = mysqli_fetch_assoc($result)) {
            // Add each row to the $photos array
            $photos[] = $row;
        }

        // Free result set
        mysqli_free_result($result);

        // Close connection
        mysqli_close($conn);

        // Encode $photos array to JSON and output
        header('Content-Type: application/json');
        echo json_encode($photos);
    } else {
        // If query fails, return an error message
        http_response_code(500); // Internal Server Error
        echo json_encode(array("error" => "Unable to fetch photos."));
    }
} else {
    // If 'id' parameter is not provided, return an error message
    http_response_code(400); // Bad Request
    echo json_encode(array("error" => "Missing 'id' parameter."));
}
?>
