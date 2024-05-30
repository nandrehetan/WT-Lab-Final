<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }
        .navbar-brand {
            color: white;
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;
        }
        .navbar-nav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        .navbar-nav li {
            margin: 0 10px;
        }
        .navbar-nav a {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
            display: block;
        }
        .navbar-nav a:hover {
            background-color: #575757;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-container">
            <a href="index.php" class="navbar-brand">My Website</a>
            <ul class="navbar-nav">
                <li><a href="index.php">Home</a></li>
                <li><a href="admin.php">Admin</a></li>
                <li><a href="user.php">User</a></li>
                <li><a href="login.php">Logout</a></li>
            </ul>
        </div>
    </nav>
</body>
</html>
