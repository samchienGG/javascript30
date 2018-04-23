# js30-24紀錄&心得-Sticky Nav
## 主題
透過css的position轉換，製作置頂選單
## 步驟
1.取得頁面元素
```javascript=
const nav = document.querySelector('#main');
// 取得nav到頁面頂部的距離
const navTop = nav.offsetTop;
```
2.增添css樣式
```css=
/* 還原大小 */
body.fixed-nav .site-wrap {
  transform: scale(1);
}
/* 改為fixed定位 */
body.fixed-nav nav {
  position: fixed;
  box-shadow:0 5px 0 rgba(0,0,0,0.1);
}
/* 增加logo寬度 */
.fixed-nav li.logo {
  max-width:500px;
}
```
3.網頁捲軸高度偵測
```javascript=
function fixNav() {
  if (window.scrollY > navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }  else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
```