const like = document.querySelector(".like");
const addtoplaylist = document.querySelector(".playlist");
const menu = document.querySelector(".menu");
const addvideo = document.querySelector(".upload");
const cancelpopup = document.querySelector(".cancel");
const dropvid = document.querySelector(".droparea");
const selectfile = document.querySelector(".uploadimg");
const videotitle = document.querySelector(".vidtitle");
const browsefiles = document.querySelector(".browsefile");


function upload(){
    if (1==1) {
        document.documentElement.style.setProperty('--visiblity', 'visible');
        document.documentElement.style.setProperty('--zindex', '1');
        document.documentElement.style.setProperty('--bgcolor', 'rgba(0, 0, 0, 0.690)');  
    }else if(1==0){

    }
}

function dragoverarea(){
    event.preventDefault();    
    document.documentElement.style.setProperty('--borderstyle', 'dashed'); 
}

function dragleavearea(){
    document.documentElement.style.setProperty('--borderstyle', 'dotted'); 
}

function dropvideo(){
    event.preventDefault();
    var droppedvideo = event.dataTransfer.files[0];
    var name = droppedvideo.name;
    var actualname = name.split('.');   

    if (actualname[1] !== "mp4") {
        alert("Please Upload a video")
    }else{     
    document.documentElement.style.setProperty('--borderstyle', 'solid'); 
    selectfile.className = "successimg";
    videotitle.value = actualname[0];
    }
}

function closepopup(){  
    document.documentElement.style.setProperty('--visiblity', 'none');
    document.documentElement.style.setProperty('--zindex', '-1');
    document.documentElement.style.setProperty('--bgcolor', 'none'); 
    document.documentElement.style.setProperty('--borderstyle', 'dotted');
    videotitle.value = "";
    selectfile.className = "uploadimg";    
}

addvideo.addEventListener('click', upload);
cancelpopup.addEventListener('click', closepopup);
dropvid.addEventListener('dragover', dragoverarea);
dropvid.addEventListener('dragleave', dragleavearea);
dropvid.addEventListener('drop', dropvideo);
browsefiles.addEventListener('click', dropvideo);

