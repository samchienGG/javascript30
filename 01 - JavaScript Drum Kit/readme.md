# js30-01 記錄&心得

## 主題
透過js使鍵盤按下後播放出對應的聲音，並同時產生一個特效
在按下其它鍵後，會關閉特效並於新按鍵中啟用

## 步驟
1. step1 建立keydown事件聆聽
利用 window.addEventListener('keydown',playSound);
-->監聽鍵盤動作

2. step2 建立function playSound()

* 利用傳入的e.keyCode來取得對應的audio標籤及該按鍵的div標籤
* 判斷傳入的e.keyCode是否有對應的audio標籤，若無則退出
* 使對應的div加上playing樣式，產生對應的點擊特效
* 使對應的audio播放時間為0
* 播放對應的音檔

3. step3 建立transitionend事件聆聽

* 偵測所有包含className="key"的元件
* 當該元件處發特效並結束時(transitionend),呼叫removeTratsition()

4. step4 建立function removeTratsition()

* 判斷傳入的propretyName是否為transform,若否則退出
* 若為transform，則移除playing樣式

## javascript語法&備註

### element.classList
這個會回傳element的class值(陣列)
範例用到了classList的add()及remove()

### HTMLmediaElement(audio)
HTML的audio標籤
透過js來操作
element.play():進行撥放
element.currentTime:指定播放秒數
範例中使用currentTime是為了達到連播的效果

### forEach
會給陣列內的每個元素，都執行給定的函式一次。
用法如下
```javascript=
arr.forEach(callback function);
```

### Array.from
轉換為陣列格式

範例中有這段
```javascript=
const keys = Array.from(document.querySelectorAll('.key'));
```

### getAttribute()
函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是null或 "" (空字串)

## css動畫
動畫要記得在css裡面下transition來進行
這樣js裡的transitionend事件才會發生

## 延伸
為這範例加上點擊觸發
```javascript=
function playSound(e){
    // 依據不同事件取得keyCode
    var keyCode = e.keyCode || this.getAttribute('data-key');
    var audio = document.querySelector('audio[data-key="'+keyCode+'"]');
    var key = document.querySelector('li[data-key="'+keyCode+'"]');
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

keys.forEach(function(e){
e.addEventListener('transitionend',removeTransition);

// 加上點擊事件                     
e.addEventListener('click',playSound);
});
```