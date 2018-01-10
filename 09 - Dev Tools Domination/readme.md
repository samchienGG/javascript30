# js30-09紀錄&心得-Dev Tools Domination
## 目標
>介紹console用法
### DOM BREAK ON
>DOM的中斷點模式，有3種可以選(現在還看不懂這可以幹嘛)
* subtree modifications: 當子元素點發生變化時
* arrtibute modifications: 當元素發生變化時
* node removal: 當元素被移除時
![](https://i.imgur.com/zSfhz60.jpg)

### console.log('%s', value)
>將字串中%s，更換為指定的參數
```javascript=
console.log('hello i am a %s string!','@@');
```
### console.log('%c', font-style)
>將字串帶入參數中的css樣式
```javascript=
console.log('%c不要偷看','font-family:微軟正黑體;font-size:30px; color:#f00;');
```
### console.warn()
>警告圖示
```javascript=
console.warn('不要偷看');
```
### console.error()
>顯示為錯誤的圖示
```javascript=
console.error('不要偷看');
```
### console.info()
>顯示資訊
```javascript=
console.info('不要偷看');
```    
### console.assert()
>測試判斷是否為真，false的時候回傳訊息
```javascript=
console.assert(1==2,'that is wrong');
```       
### console.clear()
>清除console
### console.dir()
>顯示選取物件的所有屬性
```javascript=
const p = document.querySelector('p');
console.log(p);
console.dir(p);
```
### console.groupCollapsed() & console.groupEnd()
>把輸出資訊包成group
```javascript=
dogs.forEach(function(dog) {
  console.groupCollapsed(dog.name);
  console.log('This is' + dog.name);
  console.groupEnd(dog.name);
})
```
### console.count()
>累加出限次數
```javascript=
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
```
### console.time() & console.timeEnd()
>計算區域內執行的時間
```javascript=
console.time('fetching data');
    fetch('https://api.github.com/users/samchienGG')
    .then(function(data) {
      return data.json();
    })
    .then(function(data) {
      console.timeEnd('fetching data');
      console.log(data);
    });
```
### console.table()
>把資料整理成table格式