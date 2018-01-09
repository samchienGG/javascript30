# js30-08紀錄&心得-Fun with HTML5 Canvas
## 目標
>利用`canvas`做一個塗鴉版，邊畫邊換顏色跟粗細
## 步驟
先在`HTML`建立`canvas`畫布，並設置一個名為ctx的變數
```javascript=
const ctx = canvas.getContext('2d');
```
接著設定待會會用到的變數
```javascript=
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#f00';//線條顏色
ctx.lineCap = 'round';//線條開始結束樣式
ctx.lineJoin = 'round';//線條轉角樣式
ctx.lineWidth = 100;//線條粗細
let lastX = 0;
let lastY = 0;
let hue = 0;//色相值
let direction = true;//判斷粗細增減用
let isDrawing = false;//判斷是否在畫圖中
```
寫`function`來進行畫圖
```javascript=
function draw(e) {
    if (!isDrawing) return;//判斷是否在畫圖中
    ctx.strokeStyle = `hsl(${hue}, 100%, 80%)`;
    ctx.beginPath();//開始一條畫圖路徑
    ctx.moveTo(lastX,lastY);//線條起始點
    ctx.lineTo(e.pageX,e.pageY);//線條節束點
    ctx.stroke();//把線條畫出來
    [lastX,lastY] = [e.pageX,e.pageY];//節束點放進開始的變數中
    
    hue++;
    if (hue>=360) {
        hue = 0;
    }
    // 顏色變化，超過360龜0
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    // 線條粗度變化，當超過100或小於1的時候，切換true&false
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}
```
接著對滑鼠建立事件聆聽
```javascript=
canvas.addEventListener('mousemove',draw);
//當滑鼠按下時，目前位置帶入lastX，lastY中，並且將isDrawing為true
canvas.addEventListener('mousedown',function(e) {
	isDrawing = true;
	[lastX,lastY] = [e.pageX,e.pageY];
});
canvas.addEventListener('mouseup',function(){
	isDrawing = false;
});
canvas.addEventListener('mouseout',function() {
	isDrawing = false;
});
```
## Javascript語法&備註
### direction = !direction;
>`true`&`false`的轉換

## HTML5語法&備註
1. 定義線條樣式
* `strokeStyle`線條顏色
* `lineWidth`線條寬度
* `lineJoin`線條的轉角樣式
* `lineCap`線條的結束樣式
2. 順序
* `beginPath()`開啟一個新的繪製路徑
* `moveTo()`將繪製路徑的起點移動到指定的座標中
* `lineTo()`連接路徑終點到指定的座標中
* `stroke()`繪製路徑