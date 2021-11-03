<?php
include "dbconn.php";
if (isset($_POST["submit"])) {
    $title = $_POST["title"];
    $fileTmpPath = $_FILES["fileupload"]["tmp_name"];
    $fileName = $_FILES["fileupload"]["name"];
    $fileSize = $_FILES["fileupload"]["size"];
    $fileType = $_FILES["fileupload"]["type"];
    //header("Location:../index.php?".$file);
}else{
    header("Location:../restricted.php");
}
?>