# js30-18紀錄&心得-Adding Up Times with Reduce
## 主題
如何將一系列的 `data-time` 裡的時間加起來，總時間用時,分,秒表示
## 步驟
1.先取得所有 `data-time`，因為之後會用map()、reduce()操作，所以型態轉為陣列
```javascript=
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```
2.將資料轉換為秒數
```javascript=
const seconds = timeNodes
    // 取出每個原宿裡的tata-time資料
    .map(function(e){
      return e.dataset.time;
    })
    // 將字串利用split拆成陣列，並且轉換成數字
    .map(function(e) {
      const [mins,secs] = e.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    // 用reduce加總每次結果
    .reduce(function (total, vidSeconds){
         return total + vidSeconds;
    });
```
3.將秒數轉換成時，分，秒
```javascript=
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
// 利用%取餘數
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, mins, secondsLeft); 
```

