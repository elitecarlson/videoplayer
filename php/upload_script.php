<?php
include "dbconn.php";
if (isset($_POST["submit"])) {
    $title = $_POST["title"];
    $fileTmpPath = $_FILES["fileupload"]["tmp_name"];
    $fileName = $_FILES["fileupload"]["name"];
    $fileSize = $_FILES["fileupload"]["size"];
    $fileType = $_FILES["fileupload"]["type"];
    $realname = explode(".",$fileName)[0];

    $keyLength = 11;
    $whereToStart = 0;
    $characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    $key = substr(str_shuffle($characters),$whereToStart,$keyLength);

    $insertsql = "INSERT INTO songs (title,video_key) VALUES ('$realname','$key');";
    mysqli_query($connect,$insertsql);
    move_uploaded_file($fileTmpPath, "../songs/$key.mp4");
    //header("Location:../index.php?".$file);
}else{
    header("Location:../restricted.php");
}
?>