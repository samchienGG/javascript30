# js30-11紀錄&心得-Custom Video Player
## 目標 
>做一個客制化的video介面，操控撥放器的各種功能
## 步驟
1. 基本設定
```javascript=
const player = document.querySelector('.player'); 
const video = player.querySelector('.player__video');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullBtn = player.querySelector('.full__button');
```
2. 播放/暫停
>這邊他用三元運算子的寫法，並且使用括弧記法(這邊沒有很熟悉，要再研究)
```javascript=
const method = video.paused ? 'play' : 'pause';
video[method]();
// or
if (video.paused) {
    video.play();	
} else if (video.play) {
    video.pause();
}
```
3.音量/速率 
>name直接是video屬性的名稱，直接拿來使用
```javascript=
video[this.name] = this.value;
```
4.進度條
>video的currentTime代表的是目前播放的時間，而duration表示全部時間
```javascript=
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = percent+'%';
```
5.快進/快退
>在HTML裡面有data-skip對應秒數，直接取出使用
```javascript=
const skipTime = this.dataset.skip;
video.currentTime += parseFloat(skipTime);
```
6.進度條操作
>點擊進度條任何位置，要讓他可以馬上切換，拖移也會有一樣的效果。  
>利用e.offsetX的位置及progress.offsetWidth寬度與影片總長來操作當前秒數  
>因為要讓function能同時判斷兩種狀態，所以要設mousedown為false
```javascript=
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime;

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
```
7.全螢幕
>要適應不同瀏覽器
```javascript=
if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
```