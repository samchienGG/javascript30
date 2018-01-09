# js30-07紀錄&心得-Array Cardio Day 2
## 主題
>延續之前陣列的練習
## 題目
有兩個陣列
```javascript=
const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
```
1. people是否有19歲以上的人?
2. people是否每個人都19歲以上?
3. 在comments中找到id是823423的資料
4. 在comments中找到id是823423的索引值，並透過索引值刪除這筆資料

## Javascript語法&備註
### some()
>`some()`會呼叫回呼函式來對陣列中的所有元素進行測試，若是有任何一個元素測試通過，及回傳true，不再對其它元素測試
### every()
>`every()`會呼叫回呼函式對陣列中的所有元素進行測試，若是有一個元素不通過，及回傳`false`
### find()
>`find()`跟`filter()`很像，會對陣列中的元素進行測試，但只會回傳第一個符合條件的值，若沒有符合的，及回傳`undefined`
### findIndex()，slice()，splice()
>`findIndex()`依據提供的測試函式，尋找陣列中符合的元素，並回傳其所引值。如果沒有符合對象，及回傳-1  
>[slice()](https://msdn.microsoft.com/zh-tw/library/tkcsy6fe(v=vs.94).aspx) `arrayObj(start,[end])`回傳陣列的一部分，會複製元素一直到 end 所代表的元素，但並不包括此元素  
>[splice()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 刪除或新增陣列內容