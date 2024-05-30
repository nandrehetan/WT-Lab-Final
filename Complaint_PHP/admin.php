<?php
session_start();
require 'connection.php';
include 'navbar.php';
// Fetch complaints from the database
$sql = "SELECT User, Complaint FROM complaint_v2";
$result = mysqli_query($con, $sql);

if (!$result) {
    die("Error fetching data: " . mysqli_error($con));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
            color: #333;
        }
        .user-complaints {
            margin-top: 20px;
        }
        .user {
            font-weight: bold;
            margin-top: 15px;
        }
        .complaint {
            margin-left: 20px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>User Complaints</h2>
        <div class="user-complaints">
            <?php
            if (mysqli_num_rows($result) > 0) {
                $currentUser = '';
                while ($row = mysqli_fetch_assoc($result)) {
                    if ($currentUser !== $row['User']) {
                        if ($currentUser !== '') {
                            echo '</div>';
                        }
                        $currentUser = $row['User'];
                        echo '<div class="user">';
                        echo $currentUser;
                        echo '</div><div class="complaints">';
                    }
                    echo '<div class="complaint">' . htmlspecialchars($row['Complaint'], ENT_QUOTES, 'UTF-8') . '</div>';
                }
                echo '</div>'; // Close the last user's complaints div
            } else {
                echo '<p>No complaints found.</p>';
            }
            ?>
        </div>
    </div>
</body>
</html>

<?php
mysqli_close($con);
?>
