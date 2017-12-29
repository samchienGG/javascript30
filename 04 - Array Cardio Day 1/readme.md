# js30-04 記錄&心得

## 主題
>熟悉 Array 的幾個基本方法
## 練習的題目
1.篩選出於1500~1599年間出生的inventor
2.將inventors內的first與last組合成一個陣列
3.依據生日由大至小排序所有的inventor
4.加總所有inventor的在世時間
5.依據年齡由大至小排序所有的inventor
6.列出wiki中巴黎所有包含’de’的路名(在wiki中透過querySelectorAll來選取資料作篩選)
7.依據lastName排序所有people的資料
8.分別計算data內每個種類的數量

## javascript語法&備註
### console.table()
![](https://i.imgur.com/YeEB8qU.jpg)

1.篩選出於1500~1599年間出生的inventor

### filter()
>透過filter篩選，會將結果為true的資料組成陣列回傳
```javascript=
const fifteen = inventors.filter(function(e){
  if (e.year >= 1500 && e.year < 1600) {
    return true;
  }
})
```

2.將inventors內的first與last組合成一個陣列
### map()
>透過map來將firstName/lastNam組合返回陣列
```javascript=
const fullNames = inventors.map(function(e){
    return e.first+' '+ e.last;
})
```

3.依據生日由大至小排序所有的inventor
### sort()
>用於對數組的元素進行排序
若a 小於b，在排序後的數組中 a 應該出現在 b 之前，則返回一個小於0的值
若a 等於b，則返回0
若a 大於b，則返回一個大於0的值
```javascript=
const ordered = inventors.sort(function ( a , b){
  if ( a.year > b.year ) {
    return 1;
  }
  if ( a.year < b.year ) {
    return -1;
  }
})
```
4.加總所有inventor的在世時間
### reduce()
> 累加陣列中每項元素
> arr.reduce(callback[accumlator, currentValue, currentIndex, array], initialValue)
* accumlator : 用來累積回呼函式回傳值的累加器（accumulator）。為前次調用回呼函式所回傳的先前之累積值，或是 initialValue
* currentValue : 當前的元素值
* currentIndex : 原陣列目前所迭代處理中的元素之索引。若有傳入 initialValue，則由索引 0 之元素開始，若無則自索引 1 之元素開始。
* initialValue : 於第一次呼叫 callback 時要傳入的累加器初始值。若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。假如於一個空陣列呼叫 reduce() 方法且沒有提供累加器初始值，將會發生錯誤

```javascript=
=======舊寫法=======
let totalYear01 = 0;
for (var i = 0; i < inventors.length; i++) {
  let liveYear01 = inventors[i].passed - inventors[i].year;
  totalYear01 +=  liveYear01;     
}

=======reduce寫法=======
const totalYear02 = inventors.reduce(function(total,inventor){
        return total + (inventor.passed - inventor.year);
    },0);    
```
5.依據年齡由大至小排序所有的inventor
```javascript=
const lived = inventors.sort(function ( a , b) {
  const liveYearA = a.passed - a.year;
  const liveYearB = b.passed - b.year;
  if ( liveYearA > liveYearB) {
    return -1;
  }
  if ( liveYearA < liveYearB) {
    return 1;
  }
  // if..else..用三元運算寫法                                              
  return liveYearA > liveYearB ? -1 : 1;
})
```
6.列出wiki中巴黎所有包含’de’的路名
```javascript=
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
        .map(function(link){ 
            return link.textContent;
          })
        .filter(function(streetName){
            return streetName.includes('de');
        });
```

7.依據lastName排序所有people的資料
```javascript=
const alpha = people.sort(function (lastOne, nextOne) {
    const [alast , aFirst] = lastOne.split(', ');
    const [blast , bFirst] = nextOne.split(', ');
    return alast > blast ? 1 : -1;
})
```
### split()
>要取得lastName就必須要使用split()來切開
split()出來會是陣列

8.分別計算data內每個種類的數量
>首先利用預設值將reduce()的第一個參數設定為空物件obj={}
>如果obj[item]不存在，就將其值初始為0，否則就將值加1，最後返回該對像
>我用console.log(obj,item);
  console.log(obj[item]才看懂這句
```javascript=
const transportation = data.reduce(function( obj , item) {
  if ( !obj[item] ) {
    obj[item] = 0;
  }
  console.log(obj,item);
  console.log(obj[item]);
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
```
