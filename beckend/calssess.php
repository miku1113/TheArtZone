<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow GET requests
header("Access-Control-Allow-Methods: GET");
// Set response content type to JSON
header("Content-Type: application/json");

// Include the database connection
include 'auth/connect.php';

// Initialize response array
$response = array();

// Query to select all data from 'classes' table
$sql = "SELECT * FROM classes";

// Perform the query
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if ($result) {
    // Check if there are any rows returned
    if (mysqli_num_rows($result) > 0) {
        // Loop through the rows and add them to the response array
        while ($row = mysqli_fetch_assoc($result)) {
            $response[] = $row;
        }
        // Send the JSON response
        echo json_encode($response);
    } else {
        // No data found
        echo json_encode(array('message' => 'No classes found.'));
    }
} else {
    // Query failed
    echo json_encode(array('message' => 'Failed to retrieve classes.'));
}


?>
