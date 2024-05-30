<?php
    require_once "conn.php";
    if(isset($_POST['submit'])){

        $name = $_POST['name'];
        $grade = $_POST['grade'];
        $salary = $_POST['salary'];

        if($name != "" && $grade != "" && $salary != "" ){
            $sql = "INSERT INTO results (`name`, `class`, `salary`) VALUES ('$name', '$grade', $salary)";
            if (mysqli_query($conn, $sql)) {
                header("location: index.php");
            } else {
                 echo "Something went wrong. Please try again later.";
            }
        }else{
            echo "Name, Class and Salary cannot be empty!";
        }
    }
?>
