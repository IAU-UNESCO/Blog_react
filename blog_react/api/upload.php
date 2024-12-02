<!-- 
THIS ENTIRE FILE WAS MADE TO UPLOAD IMAGES TO THE DATABASE, COMPLIMENTING THE `InsertImgTxt.js` FILE.
-->

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'blog';

// Connect to the database
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $image = $_FILES['image'];

    $target_dir = "uploads/";
    // Create the uploads directory if it doesn't exist
    if (!is_dir($target_dir)) {
        mkdir($target_dir, 0777, true);
    }

    $target_file = $target_dir . basename($image["name"]);
    move_uploaded_file($image["tmp_name"], $target_file);

    $sql = "INSERT INTO posts (title, content, image_url) VALUES (?, ?, ?)";
    $stmt = $conn->prepare(query: $sql);
    $stmt->bind_param("sss", $title, $content, $target_file);
    $stmt->execute();

    echo json_encode(["message" => "Post uploaded successfully"]);
}
?>