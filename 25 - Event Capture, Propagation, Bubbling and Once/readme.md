# js30-25紀錄&心得-Event Capture, Propagation, Bubbling and Once
## 主題
了解事件的捕獲，傳遞，發泡，單次執行
## 建立事件模型及事件聆聽
### 1.建立三層DIV做測試用模型
```htmlmixed=
<div class="one">
    <div class="two">
        <div class="three">
        </div>
    </div>
</div>
```
建立click事件
```javascript=
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText() {
  console.log(this.classList.value);
    // 我比較習慣用alert來看會更有感覺
  alert(this.classList.value);
}

divs.forEach(function(div) {
  div.addEventListener('click',logText)
})
```
### 2.預設的點擊事件
當對著畫面中間點擊，console出來的是
>three
two
one
會從click到的div連動出所有的click事件
>>這邊先了解一下DOM的事件流程圖
![](https://i.imgur.com/lndajRP.png)
假設現在事件是點擊，圖中的藍色<td>是引發事件的DOM元件，當事件發生時，會先走紅色的流程，這階段叫做 capture phase(捕獲階段)，接著進行綠色的 bubble phase(冒泡階段)。
addEventListener預設的方法中，執行是在 bubble phase，所以才會出現three，two，one
參考資料-[介紹DOM及事件流程](https://blog.hellojcc.tw/2015/11/05/dom-element-event-flow/)
    
### 3.addEventListener第三個參數-capture、once
capture預設沒附值就是false，設為true的話，在 capture phase 就會執行該listener
```javascript=
div.addEventListener('click',logText, {
    capture: true
  })
// 順序為one，two，three
```
### 4.e.stopPropagation()
在事件聆聽觸發的function裡面，執行e.stopPropagation()的話，會中斷事件的派發流程(不論是在 capture 或者 bubble phase)
```javascript=
function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling!
  }
```

### 5.addEventListener第三個參數-once
once設為true的話，他可以使這個按鈕click被執行結束後，移除事件。
```javascript=
button.addEventListener('click',logText, {
    once: true
  })
```