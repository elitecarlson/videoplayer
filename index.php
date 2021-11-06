<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/popups.css">
</head>
<body style="background-color: #f7f5f5;">
    <div class="header">
        <img src="icons/youtube.png" class="logo">
        <form action="" class="searchbar">
            <input type="text" name="" id="" placeholder="Search" class="search">
            <button type="submit" class="submit">
                <img src="icons/search.png" class="searchlogo">
            </button>
        </form>
        <button class="upload">Upload</button>
    </div>
    <hr class="dividerline">
    <div class="playlists">
        <p>hello world</p>
    </div>
    <hr class="dividerline">
    <div class="navbar">
        <p>hello world</p>
    </div>
    <div class="contentcont">
        <div class="thumbnail">
            <video src="media/mt.mp4" class="vid"></video><br><br>
            <p class="songname">Meghan Trainor - Me Too</p>
        </div>
    </div>
    <div class="popup">
        <div class="addvideo">
            <div class="cancel"></div>
            <form action="php/upload_script.php" method="POST" enctype="multipart/form-data">
                <input type="text" class="vidtitle" placeholder="Title" value="" name="title"><br>
                <div class="droparea">
                <div class="uploadimg"></div>
                </div>
                <input id="filetext" type="file" onchange="titlechange()" class="fileselect" name="fileupload">
                <label for="filetext" class="filetext">Browse File's</label><br>
                <input type="submit" name="submit" id="" class="uploadfile" value="Upload File"><br>
            </form>
        </div>
    </div>
    <script src="js/popup.js"></script>
</body>
</html>