# js30-22紀錄&心得-Follow Along Link Highlighter
## 主題
滑鼠hover到超連結，highlight出一個白色區塊，移開時highlight不會消失，hover到新的連結時hig追上去
## 步驟
1.取得頁面元素
```javascript=
// 抓取全部的a標籤
const triggers = document.querySelectorAll('a');
// 創造一個sapn標籤
const highlight = document.createElement('span');
// 設定highlight樣式
highlight.classList.add('highlight');
// 將span加到頁面中
document.body.appendChild(highlight);
```
2.撰寫移入效果
```javascript=
function highlightLink() {
    // 利用getBoundingClientRect()取得該元素的資訊
      const linkCoords = this.getBoundingClientRect();
      console.log(linkCoords);
      const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
    // 因為getBoundingClientRect()取得的top和left是相對於視窗的定位，所以要再加上window.scrollY及window.scrollX
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
      };
    // 設定highlight效果的寬高跟定位
    highlight.style.width = coords.width + 'px';
    highlight.style.height = coords.height + 'px';
    highlight.style.transform = 'translate(' + coords.left + 'px,' + coords.top + 'px)';
    }
// 對所有連結建立事件聆聽
triggers.forEach(function(a) {
      a.addEventListener('mouseenter',highlightLink);
    })
```
## 語法
### getBoundingClientRect()
[參考資料](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
