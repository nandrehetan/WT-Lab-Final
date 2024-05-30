<?php
session_start();
require 'connection.php';
include 'navbar.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit_complaint"])) {
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $complaint = mysqli_real_escape_string($con, $_POST['complaint']);

    // Insert complaint into the database
    $sql = "INSERT INTO complaint_v2 (User, Complaint) VALUES ('$username', '$complaint')";
    
    if (mysqli_query($con, $sql)) {
        $success_message = "Complaint submitted successfully!";
    } else {
        $error_message = "Error submitting complaint: " . mysqli_error($con);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Complaint Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        .container {
            width: 50%;
            margin: 50px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            color: #333;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        input[type="text"], textarea {
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        textarea {
            height: 100px;
        }
        .submit-btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .submit-btn:hover {
            background-color: #45a049;
        }
        .message {
            text-align: center;
            margin-top: 20px;
            color: green;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Submit Your Complaint</h2>
        <form method="post" action="">
            <input type="text" name="username" placeholder="Enter your username" required>
            <textarea name="complaint" placeholder="Enter your complaint here..." required></textarea>
            <button type="submit" name="submit_complaint" class="submit-btn">Submit Complaint</button>
        </form>
        <?php
        if (isset($success_message)) {
            echo '<p class="message">' . $success_message . '</p>';
        }
        if (isset($error_message)) {
            echo '<p class="message error">' . $error_message . '</p>';
        }
        ?>
    </div>
</body>
</html>

<?php
mysqli_close($con);
?>
