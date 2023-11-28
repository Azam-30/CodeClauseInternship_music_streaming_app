<?php include '../connection/connection.php'; ?>
<?php
if (isset($_POST['send'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $sql_query = "INSERT INTO contactUs 
    (fname,lname,email,phone,message)
    VALUES ('$fname','$lname','$email','$phone','$message')";
    $fire = mysqli_query($connection, $sql_query);
    if ($fire) {
        header("Location: ../index.html");
    } else {
        echo "Please try again..!!";
    }
    mysqli_close($connection);
}
?>