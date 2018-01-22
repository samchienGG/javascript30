const player = document.querySelector('.player'); 
const video = player.querySelector('.player__video');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullBtn = player.querySelector('.full__button');

function togglePlay () {
	if (video.paused) {
		video.play();	
	} else if (video.play) {
		video.pause();
	}
	// const method = video.paused ? 'play' : 'pause';
	// video[method]();
}
function btnIcon (){
	if (video.paused) {
		toggle.textContent = '►';
	} else if (video.play) {
		toggle.textContent = '❚ ❚';
	}
}
function progressUpdate () {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = percent+'%';
}
function handleRangeUpdate () {
	video[this.name] = this.value;

}
function scrub (e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}
function skip (e) {
	const skipTime = this.dataset.skip;
	video.currentTime += parseFloat(skipTime);
}
function fullScreen () {
if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
	
}
toggle.addEventListener('click',togglePlay);

video.addEventListener('click',togglePlay);
video.addEventListener('play',btnIcon);
video.addEventListener('pause',btnIcon);
video.addEventListener('timeupdate',progressUpdate);

fullBtn.addEventListener('click',fullScreen);

ranges.forEach(function (range) {
	range.addEventListener('change',handleRangeUpdate);
	range.addEventListener('mousemove',handleRangeUpdate);
})
let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',function (e) {
	return mousedown && scrub(e);
});
progress.addEventListener('mousedown',function () {
	return mousedown = true;
});
progress.addEventListener('mouseup',function () {
	return mousedown = false;
});
skipButtons.forEach(function (e) {
	e.addEventListener('click',skip);
});

