# js30-05 記錄&心得
## 主題
用css與js製作出flex gallery
點擊圖片之後，照片展開，上下文字進來
## CSS語法&備註
### flex
>是由三個屬性組成flex-grow flex-shrink flex-basis
* flex-grow : 剩餘空間分配比例
* flex-shrink : 壓縮比例
* flex-basis : 預約剩餘空間

### flex-direction
>flex排列方向，colume(垂直向)或row(水平向)

## Javascript語法&備註
### e.propertyName & includes()
範例中的動畫順序為
1. click其中一張圖片觸發addEventListener的toggleOpen
2. 為其增加.open，增加font-size和flex的transition效果
3. 當.open的transition的效果結束時，觸發transitionend事件
4. 為其增加.open-active，讓上下文字進入
在順序4有個判斷
e.propertyName可以抓到觸發transitionend的屬性名稱

## 探索
>這邊跟著其它作著練習，當展開一個時，點擊另一個圖片，上一個展開的會收合
```javascript=
let lastPanel = document.querySelector('.panels');

function toggleOpen() {
  if (this != lastPanel) {
    // 先判斷跟上次點擊的是不是同一個
    lastPanel.classList.remove('open');
    // 在把上次的.open移除                      
    lastPanel = this;
    // 在把這次點擊的存入lastPanel
  }
  this.classList.toggle('open');
}
```