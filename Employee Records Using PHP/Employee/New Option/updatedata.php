<!DOCTYPE html>
<html lang="en">
<?php
    require_once "conn.php";
    if(isset($_POST["name"]) && isset($_POST["grade"]) && isset($_POST["Salary"])){
        $name = $_POST['name'];
        $grade = $_POST['grade'];
        $salary = $_POST['salary'];
        $sql = "UPDATE results SET `name`= '$name', `class`= '$grade', `salary`= $salary  WHERE id= ".$_GET["id"];
        if (mysqli_query($conn, $sql)) {
            header("location: index.php");
        } else {
            echo "Something went wrong. Please try again later.";
        }
    }
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - MYSQL - CRUD</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
</head>

<body>
    <section>
        <h1 style="text-align: center;margin: 50px 0;">Update Data</h1>
        <div class="container">
            <?php 
                require_once "conn.php";
                $sql_query = "SELECT * FROM results WHERE id = ".$_GET["id"];
                if ($result = $conn ->query($sql_query)) {
                    while ($row = $result -> fetch_assoc()) { 
                        $Id = $row['id'];
                        $Name = $row['name'];
                        $Grade = $row['class'];
                        $salary = $row['salary'];
            ?>
                            <form action="updatedata.php?id=<?php echo $Id; ?>" method="post">
                                <div class="row">
                                        <div class="form-group col-lg-4">
                                            <label for="">Student Name</label>
                                            <input type="text" name="name" id="name" class="form-control" value="<?php echo $Name ?>" required>
                                        </div>
                                        <div class="form-group  col-lg-3">
                                            <label for="">Grade</label>
                                            <select name="grade" id="grade" class="form-control" required>
    <option value="">Select a Grade</option>
    <option value="Software" <?php if($Grade == "Software"){ echo "selected"; } ?> >Software Developer</option>
    <option value="Product" <?php if($Grade == "Product"){ echo "selected"; } ?> >Product Manager</option>
    <option value="Manager" <?php if($Grade == "Manager"){ echo "selected"; } ?> >Manager</option>
    <option value="Hr" <?php if($Grade == "Hr"){ echo "selected"; } ?> >HR</option>
    <option value="Ceo" <?php if($Grade == "Ceo"){ echo "selected"; } ?> >CEO</option>
</select>

                                        </div>
                                        <div class="form-group col-lg-3">
                                            <label for="">Salary</label>
                                            <input type="text" name="salary" id="salary" class="form-control" value="<?php echo $salary ?>" required>
                                        </div>
                                        <div class="form-group col-lg-2" style="display: grid;align-items:  flex-end;">
                                            <input type="submit" name="submit" id="submit" class="btn btn-primary" value="Update">
                                        </div>
                                </div>
                            </form>
            <?php 
                    }
                }
            ?>
        </div>
    </section>
</body>

</html>