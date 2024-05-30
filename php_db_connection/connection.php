<?php
$firstname = $_POST["Firstname"];
$lastname = $_POST["Lastname"];

//db connection
$conn = new mysqli('localhost','root','','dhanashri');
if($conn -> connect_error){
    die('Connection Failed');
}else{
    $sql = "insert into stud (firstname,lastname) values ('$firstname', '$lastname')";
    if ($conn->query($sql) === TRUE){
        echo "success";
    }else{
        echo $conn_error;
    }       
    $conn->close();
}
?>
