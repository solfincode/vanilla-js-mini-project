const video = document.getElementById("video");
const play = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const timestamp = document.getElementById("timestamp");
const progress = document.getElementById("progress");

//play & pause video
function toggleVideoStatus() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}
//update play pause icon
function updatePlayIcon() {
	if (video.paused) {
		play.innerHTML = "Play";
	} else {
		play.innerHTML = "Pause";
	}
}
//update progress & timestamp
function updateProgress() {
	progress.value = (video.currentTime / video.duration) * 100;

	//get minutes
	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = "0" + String(mins);
	}
	let seconds = Math.floor(video.currentTime % 60);
	if (seconds < 10) {
		seconds = "0" + String(seconds);
	}
	timestamp.innerHTML = `${mins}:${seconds}`;
}
//set video time to progress
function setVideoProgress() {
	video.currentTime = (+progress.value * video.duration) / 100;
}
//stop video
function stopVideo() {
	video.currentTime = 0;
	video.pause();
}
//event listener
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stopBtn.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
