# js30-27紀錄&心得-Stripe Follow Along Nav
## 主題
製作一個拖曳的水平卷軸
## 步驟
### 1.取得頁面元素
```javascript=
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
```
### 2.mousedown事件
```javascript=
slider.addEventListener('mousedown',function(e) {
    // 設定按下參數
    isDown = true;
    // 開始的位置
    startX = e.pageX;
    // 卷軸的左邊距離
    scrollLeft = slider.scrollLeft;
    // console.log(e.pageX);
})
```
### 3.mousemove事件
```javascript=
slider.addEventListener('mousemove',function(e) {
    // 移動時沒有按下，跳出
    if (!isDown) return;
    // 拖曳的新位置
    const x = e.pageX;
    // 拖曳距離
    const walk = (x - startX) * 3;
    // 捲軸移動距離
    slider.scrollLeft = scrollLeft - walk;
})
```
### 4.mouseup事件
```javascript=
slider.addEventListener('mouseup',function() {
    isDown = false;
})
```
### 5.mouseleave事件
```javascript=
slider.addEventListener('mouseup',function() {
    isDown = false;
})
```