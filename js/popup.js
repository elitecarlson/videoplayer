const like = document.querySelector(".like");
const addtoplaylist = document.querySelector(".playlist");
const menu = document.querySelector(".menu");
const addvideo = document.querySelector(".upload");
const cancelpopup = document.querySelector(".cancel");
const dropvid = document.querySelector(".droparea");
const selectfile = document.querySelector(".uploadimg");

function upload(){
    if (1==1) {
        document.documentElement.style.setProperty('--visiblity', 'visible');
        document.documentElement.style.setProperty('--zindex', '1');
        document.documentElement.style.setProperty('--bgcolor', 'rgba(0, 0, 0, 0.690)');  
    }else if(1==0){

    }
}
function closepopup(){
    document.documentElement.style.setProperty('--visiblity', 'none');
    document.documentElement.style.setProperty('--zindex', '-1');
    document.documentElement.style.setProperty('--bgcolor', 'none'); 
    document.documentElement.style.setProperty('--borderstyle', 'dotted');
    selectfile.className = "uploadimg";    
}
function dragoverarea(){
    console.log("Its working");  
    document.documentElement.style.setProperty('--borderstyle', 'dashed'); 
    event.preventDefault();
}
function dragleavearea(){
    document.documentElement.style.setProperty('--borderstyle', 'dotted'); 
}
function dropvideo(){
    document.documentElement.style.setProperty('--borderstyle', 'solid'); 
    selectfile.className = "successimg";
    event.preventDefault();
}
addvideo.addEventListener('click', upload);
cancelpopup.addEventListener('click', closepopup);
dropvid.addEventListener('dragover', dragoverarea);
dropvid.addEventListener('dragleave', dragleavearea);
dropvid.addEventListener('drop', dropvideo);

