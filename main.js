let playerContainer = document.getElementById("player-container");
let controlsContainer = document.querySelector(".controls-container");
let video = document.querySelector("video");
let toPlay = document.querySelector(".to-play");
let toPause = document.querySelector(".to-pause");
let checkPlay = document.querySelector(".check-play");
let skipBack = document.querySelector(".skip-back");
let skipForward = document.querySelector(".skip-forward");
let changeVolume = document.querySelector(".change-volume");
let changeVideoSpeed = document.querySelector(".change-speed");

let videoProgress = document.querySelector(".video-progress");
let videoViewPoint = document.querySelector(".video-viewpoint");

let thinVideoProgress = document.querySelector(".thin-progress");
let thinVideoViewpoint = document.querySelector(".thin-viewpoint");


video.addEventListener("timeupdate", function() {
    let videoLength = video.duration;
    let videoCurrent = video.currentTime;
    let result = (videoCurrent/videoLength)*100;

    videoViewPoint.style = 'width: ' + result + '%';
    thinVideoViewpoint.style = 'width: ' + result + '%';


    if(video.ended) {
        toPause.classList.add("hide-play");
        toPlay.classList.remove("hide-play");
    }
});

playerContainer.addEventListener("mouseover", function() {
    controlsContainer.classList.remove("hide");
    thinVideoProgress.classList.add("hide");
});

playerContainer.addEventListener("mouseout", function() {
    controlsContainer.classList.add("hide");
    thinVideoProgress.classList.remove("hide");
});

checkPlay.addEventListener("click", function() {
    if(!video.paused) {
        video.pause();
        toPause.classList.add("hide-play");
        toPlay.classList.remove("hide-play");
    }
    else {
        video.play();
        toPlay.classList.add("hide-play");
        toPause.classList.remove("hide-play");
    }

});

skipBack.addEventListener("click", function() {
    video.currentTime -= 15;
    let newCurrentTime = video.currentTime;
    skipTime(newCurrentTime);
});

skipForward.addEventListener("click", function() {
    video.currentTime += 15;
    let newCurrentTime = video.currentTime;
    skipTime(newCurrentTime);
});

changeVolume.addEventListener("change", function() {
    video.volume = changeVolume.value;
});

changeVideoSpeed.addEventListener("change", function() {
    video.playbackRate = changeVideoSpeed.value;
});

videoProgress.addEventListener("mouseup", (event) => {
    let result = (event.offsetX/videoProgress.offsetWidth)*100;
    let videoLength = video.duration;
    video.currentTime = result/100*videoLength;
    videoViewPoint.style = 'width: ' + result + '%';
    thinVideoViewpoint.style = 'width: ' + result + '%';
});


function skipTime(newCurrentTime) {
    let videoLength = video.duration;
    let videoCurrent = newCurrentTime;
    let result = (videoCurrent/videoLength)*100;
    videoViewPoint.style = 'width: ' + result + '%';
    thinVideoViewpoint.style = 'width: ' + result + '%';
}
