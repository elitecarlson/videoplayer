//video player script
        const videocont = document.querySelector('.video-player');
        const video = document.querySelector('.video');
        const pause_play = document.querySelector('.play');
        const sound = document.querySelector('.muted');
        const elapsedtime = document.querySelector('.currenttime');
        const video_duration = document.querySelector('.duration');
        //const fullscreen = document.querySelector('.fullscreen');
        const pipbtn = document.querySelector('.pip');
        const rewind = document.querySelector('.rewind');
        const fastforward = document.querySelector('.fastforward');
        const controls = document.querySelector('.fixedcontrols');
        const bottom = document.querySelector('.bottom');
        const progressbar = document.querySelector('.progressbar');
        const loop = document.querySelector('.loop');
        const searchbar = document.querySelector('.search');
        const vidtitle = document.querySelector('.vidtitle');


        function play_pause(){
           if (video.paused) {
               video.play();
               controls.className = 'controls';
               pause_play.className = 'pause';
               //document.documentElement.style.setProperty('--popup', 'url(../icons/transparent.png)');
               //document.documentElement.style.setProperty('--color', 'none');

           }else{
               video.pause();
               controls.className = 'fixedcontrols';
               pause_play.className = 'play'; 
               //document.documentElement.style.setProperty('--popup', 'url(../icons/play-popup.png)');
               //document.documentElement.style.setProperty('--color', 'white');
           }
        }
        
        function replay(){               
            if (video.currentTime === video.duration) {
                pause_play.className = 'replay';
                controls.className = 'fixedcontrols';
                document.documentElement.style.setProperty('--popup', 'url(../icons/replay-popup.png)');
                document.documentElement.style.setProperty('--color', 'white');


            }
        }

        function mute_unmute(){
            if (video.muted == false) {
                video.muted = true;
                sound.className = 'unmuted';
            } else {
                video.muted = false;
                sound.className = 'muted';
            }
        }

        /*function toggleFullscreen() {
              
            if (videocont.exitFullscreen) {
                videocont.exitFullscreen();
            } else if (videocont.webkitExitFullscreen) {
                videocont.webkitExitFullscreen();
            } else if (videocont.msExitFullscreen) {
                videocont.msExitFullscreen();
            }                
 
            if (videocont.requestFullscreen) {
                videocont.requestFullscreen();
            } else if (videocont.webkitRequestFullscreen) {
                videocont.webkitRequestFullscreen();
            } else if (videocont.msRequestFullscreen) {
                videocont.msRequestFullscreen();
            }

        }*/

        function pip(){
            if (video == document.pictureInPictureElement) {
                document.exitPictureInPicture();
                pipbtn.className = 'pip';  
            } else {
                video.requestPictureInPicture();
                pipbtn.className = 'exitpip';
                if (controls.className = 'controls') {
                controls.className = 'fixedcontrols';
            }

            }      
        }
        function video_time(){
            var minutes = Math.floor(video.duration / 60);
            var seconds = Math.round(video.duration % 60);
            if (seconds < 10) {
                seconds = "0"+seconds;
            }
            var duration = minutes+":"+seconds;
            video_duration.innerHTML = duration;
        }
        
        function video_timepassed(){
            var videotime = video.currentTime;
            var elapsed_min = Math.floor(videotime/60);
            var elapsed_sec = Math.floor(videotime%60);
            if (elapsed_sec < 10) {
                elapsed_sec = "0"+elapsed_sec;
            }
            elapsed_video_time = elapsed_min+":"+elapsed_sec;
            elapsedtime.innerText = elapsed_video_time;
        }
        
        function rewindvideo(){
            video.currentTime -= 5;
        }

        function fastforwardvideo(){
            video.currentTime += 5;
        }
        
        function progress_seek(){
            video.currentTime = progressbar.value;
            progressbar.max = Math.floor(video.duration);
        }
        
        function progressbar_move(){
            progressbar.value = video.currentTime;
            progressbar.max = Math.floor(video.duration);           
        }
        
        function loopvideo(){
            if (video.loop==false) {
                video.loop=true;
                loop.className = 'looping';
            } else {
                video.loop=false;
                loop.className = 'loop';
            }
        }
        

        function keypressed(){
            if (event.code === 'Space') {
                play_pause();
            } else if (event.code === 'KeyM') {
                mute_unmute();
            } else if (event.code === 'KeyI') {
                pip();
            } else if(event.code === 'KeyL') {
                loopvideo();
            }                
        }
        console.log("69");
        function keypressedforlong(){
            if (event.code === "ArrowLeft") {
                rewindvideo();
            } else if (event.code === 'ArrowRight') {
                fastforwardvideo();
            }
        }

        video.addEventListener('click', play_pause);
        //video.addEventListener('dblclick', toggleFullscreen);
        video.addEventListener('loadedmetadata', video_time);
        video.addEventListener('timeupdate', video_timepassed);
        video.addEventListener('timeupdate', replay);
        video.addEventListener('timeupdate',progressbar_move);
        //video.addEventListener('timeupdate', loopvid);
        pause_play.addEventListener('click', play_pause);
        sound.addEventListener('click', mute_unmute);
        //fullscreen.addEventListener('click', toggleFullscreen);
        pipbtn.addEventListener('click', pip);
        //rewind.addEventListener('click', rewindvideo);
        //fastforward.addEventListener('click', fastforwardvideo);
        controls.addEventListener('click', play_pause);
        //controls.addEventListener('dblclick', toggleFullscreen);
        bottom.addEventListener('click', play_pause);
        bottom.addEventListener('dblclick', play_pause);
        progressbar.addEventListener('input', progress_seek);
        loop.addEventListener('click', loopvideo);
        document.addEventListener('keyup', keypressed);
        document.addEventListener('keydown', keypressedforlong);
        if(document.activeElement.searchbar === "INPUT"){
            console.log("it worked");
        }
