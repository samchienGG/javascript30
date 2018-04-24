# js30-26紀錄&心得-Stripe Follow Along Nav
## 主題
製作一個隨著滑鼠一動展開的選單
## 步驟
### 1.取得頁面元素及建立事件聆聽
```javascript=
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

triggers.forEach(function(li) {
  li.addEventListener('mouseenter',handleEnter);
})
triggers.forEach(function(li) {
  li.addEventListener('mouseleave',handleLeave);
})
```
### 2.撰寫移入事件
```javascript=
function handleEnter() {
    // 替觸發的li加上trigger-enter
  this.classList.add('trigger-enter');
  var _this = this;
    // 我自己寫的話可能會寫
    // if (_this.classList.contains('trigger-enter')) {
    //   _this.classList.add('trigger-enter-active');  
    // }
    // 範例這邊用setTimeout()來處理:當trigger-enter存在時才進行add('trigger-enter-active')，並且解決快速移動會產生的bug。
  setTimeout(function () {
  return _this.classList.contains('trigger-enter') && _this.classList.add('trigger-enter-active');
}, 150);
    background.classList.add('open');
    // 設定後面白色滑動背景
    const dropdown = this.querySelector('.dropdown');
    // 利用之前用過的getBoundingClientRect()取的定位資訊
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}
```
### 3.撰寫移出事件
```javascript=
function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }
```