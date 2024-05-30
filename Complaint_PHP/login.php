<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Username = $_POST['username'];
    $Password = $_POST['password'];
    $role = $_POST['role'];
    $row= "";
    if ($row) {
        if ($role == 'moderator') {
            $Mod_club = $row['club'];
            setcookie("TestCookie", $Mod_club);
            setcookie("TestCookie", $Mod_club, time() + 3600);
            header("location:homepage.php?mod_club=".$Mod_club);
            exit(); // Exit after redirection
        }
    } else {
        // Check if the user is an admin
        $sql = "SELECT * FROM admininfo WHERE Username_Admin='".$Username."' AND Password_Admin='".$Password."'";
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($result);

        if ($row) {
            if ($role == 'admin') {
                setcookie("TestCookie1", $Username);
                setcookie("TestCookie1", $Username, time() + 3600);
                header("location:admin.php?username_admin=".$Username);
                exit(); // Exit after redirection
            }
        } else {
            // Check if the user is a student
            $sql = "SELECT * FROM studentinfo WHERE prn='".$Username."' AND pass='".$Password."'";
            $result = mysqli_query($con, $sql);
            $row = mysqli_fetch_array($result);

            if ($row) {
                if ($role == 'student') {
                    header("location:student.php?username=".$Username);
                    exit(); // Exit after redirection
                }
            }
        }
    }

    mysqli_close($con);
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <!-- <link rel="stylesheet" type="text/css" href="css/login.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- <link rel="stylesheet" type="text/css" href="css
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">/style.css"> -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="shortcut icon" type="image/x-icon" href="./images/favicon.png">
    

    <style>
        body {
            background: url("./images/bg.jpeg");
            background-repeat: no-repeat;
            background-size: cover;
            color: white;
            a{
                color:dodgerblue;
            }
        }
        .module {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            border-radius: 15px;
            background-color: transparent;
            backdrop-filter: blur(4px) brightness(60%);
            box-shadow: 0px 0px 10px rgba(0,0,0,0.35);
        }
        .module h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        .module input[type="submit"] {
            background-color: #007bff;
            color: white;
        }
        .join {
            text-align: center;
            margin-top: 20px;
        }
    </style>
     <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</head>

<body>
    <div class="body-content" style="margin-top:130px;">
        <div class="module my-5" >
            <form name="fm" name="myForm" action="#" method="POST">
                <h2>VIT Student Complaint</h2>
                <div class="form-group">
                    <input class="form-control" type="text" name="username" id="username" placeholder="Username" value="" required>
                </div>
                <div class="form-group">
                    <input class="form-control" type="password" name="password" id="password" placeholder="Password" value="" required>
                </div>
                <div class="form-group">
                    <select class="form-control" name="role" id="role">
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="remember" name="remember">
                    <label class="form-check-label" for="remember">Remember me</label>
                </div>
                <input type="submit" name="login_user" value="Sign in" class="btn btn-block btn-primary">
                <div class="join">
                    <span>or, Create Account</span>
                    <a href="student_registration.php">Sign up</a>
                </div>
            </form>
        </div>
    </div>
</body>


</html>


