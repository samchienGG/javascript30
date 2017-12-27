# js30-02 記錄&心得

## 主題
css與js搭配做一個時鐘

## 步驟
1. step1 製作時針、分針、秒針
2. step2 設定計時器
   利用setInterval(setDate,1000);
   每秒取得當前時間
3. step3 利用當前時間取得對應角度
   將每秒的時間在setDate()裡面取出，並算出對應角度
   
## Javascript語法&備註
### Date()
取得時間的函數
```javascript=
const nowTime = new Date();
```
nowTime.getSeconds() 取得當前秒數
nowTime.getMinutes() 取得當前分鐘
nowTime.getHours() 取得當前小時

### setInterval()
計時器，有兩個參數setInterval(callback,time)

## CSS語法&備註
### transform-origin
設定物件變形的起始點，該屬性必須與transform屬性一同使用
