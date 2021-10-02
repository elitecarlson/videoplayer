const like = document.querySelector(".like");
const addtoplaylist = document.querySelector(".playlist");
const menu = document.querySelector(".menu");
const addvideo = document.querySelector(".upload");
const cancelpopup = document.querySelector(".cancel");

function upload(){
    if (1==1) {
        document.documentElement.style.setProperty('--visiblity', 'visible');
        document.documentElement.style.setProperty('--zindex', '1');
    }else if(1==0){

    }
}
function closepopup(){
    document.documentElement.style.setProperty('--visiblity', 'none');
    document.documentElement.style.setProperty('--zindex', '-1');  
}

addvideo.addEventListener('click', upload);
cancelpopup.addEventListener('click', closepopup);