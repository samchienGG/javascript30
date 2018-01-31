# js30-13紀錄&心得-Slide in on Scroll
## 目標
>滾動滾輪到定點的同時，圖片滑入視窗

## 步驟
1. 對`window`建立`scroll`事件聆聽，但如果單純使用`scroll`來操作的話，每次的畫面滾動都會有大量事件被處發，所以作者寫了一個`debounce`來使觸發間隔為20毫秒
2. 設定觸發後的事件內容
```javascript=
function checkSlide() {
    slideImgs.forEach(function(img) {
      const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
      // 捲軸高度 + 視窗內的高度 = 螢幕視窗offset的概念
      const imageBotton = img.height + img.offsetTop;
      // 照片底部的高度 = 照片高度 + 照片距離父層的距離
      const isHalfShown = slideInAt > img.offsetTop;
      // 螢幕視窗offset > 照片offset 的時候fadein
      const isNotScrolledPast = window.scrollY < imageBotton;
      // 照片底部的高度 > 捲軸高度
      if (isHalfShown && isNotScrolledPast) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    })
}
```