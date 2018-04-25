# js30-28紀錄&心得-Video Speed Controller
## 主題
製作一個可以控製影片播放速度的bar
## 步驟
### 1.取得頁面元素
```javascript=
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
```
### 2.建立滑鼠移動事件及觸發function
```javascript=
function handleMove(e) {
    // 取得滑鼠移入觸發的位置
	const y = e.pageY - this.offsetTop;
    // 設定百分比
	const percent = y / this.offsetHeight;
	const min = 0.25;
	const max = 5;
    // 四捨五入
	const height = Math.round(percent  * 100) + '%';
    // 播放速度
    const playbackRate = percent * (max - min) + min;
	bar.style.height = height;
	// 用toFixed(2)取到小數第2位
    bar.textContent = playbackRate.toFixed(2) + '×';
	video.playbackRate = playbackRate;	
}

speed.addEventListener('mousemove', handleMove);
```