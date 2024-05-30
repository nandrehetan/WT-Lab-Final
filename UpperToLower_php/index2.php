<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>String Operations</title>
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

    .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
    }

    .navbar a:hover {
        background-color: #ddd;
        color: black;
    }

    .container {
        margin: 20px auto;
        width: 50%;
    }

    input[type="text"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #45a049;
    }
</style>
</head>
<body>

<div class="navbar">
    <a href="#uppercase">Uppercase</a>
    <a href="#lowercase">Lowercase</a>
    <a href="#first-uppercase">First Uppercase</a>
    <a href="#title-case">Title Case</a>
</div>

<div id="uppercase" class="container">
    <h2>Convert to Uppercase</h2>
    <form method="post" action="#">
        <input type="text" name="string1" placeholder="Enter a string">
        <input type="submit" name="uppercase" value="Convert">
    </form>
    <?php
    if(isset($_POST['uppercase'])) {
        $string1 = $_POST['string1'];
        echo "<p>Uppercase: " . strtoupper($string1) . "</p>";
    }
    ?>
</div>

<div id="lowercase" class="container">
    <h2>Convert to Lowercase</h2>
    <form method="post" action="#">
        <input type="text" name="string2" placeholder="Enter a string">
        <input type="submit" name="lowercase" value="Convert">
    </form>
    <?php
    if(isset($_POST['lowercase'])) {
        $string2 = $_POST['string2'];
        echo "<p>Lowercase: " . strtolower($string2) . "</p>";
    }
    ?>
</div>

<div id="first-uppercase" class="container">
    <h2>First Character Uppercase</h2>
    <form method="post" action="#">
        <input type="text" name="string3" placeholder="Enter a string">
        <input type="submit" name="first_uppercase" value="Convert">
    </form>
    <?php
    if(isset($_POST['first_uppercase'])) {
        $string3 = $_POST['string3'];
        echo "<p>First Character Uppercase: " . ucfirst($string3) . "</p>";
    }
    ?>
</div>

<div id="title-case" class="container">
    <h2>Title Case</h2>
    <form method="post" action="#">
        <input type="text" name="string4" placeholder="Enter a string">
        <input type="submit" name="title_case" value="Convert">
    </form>
    <?php
    if(isset($_POST['title_case'])) {
        $string4 = $_POST['string4'];
        echo "<p>Title Case: " . ucwords($string4) . "</p>";
    }
    ?>
</div>

</body>
</html>
