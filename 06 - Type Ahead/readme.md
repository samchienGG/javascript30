# js30-06紀錄&心得-Type Ahead
## 目標
>利用fetch()取得json檔，在input搜尋的時候，即時列出相關單字的城市
## javascript語法&備註
### fetch()
>一種非同步的API，向後端要資料，回傳promise
### 擴展運算符 "..."
```javascript=
cities.push(...data)
```
>範例中，先把fetch()回來的資料轉成json格式，接著在push到空陣列中，這邊用上擴展運算符，讓原本的空陣列直接增加多個元素
```javascript=
Array.prototype.push.apply(cities,data);
// or
cities.concat(data);
```
這邊使用舊的寫法，因為是兩個陣列合併無法直接push

### match()
>把匹配的字串變成陣列
### replace(regexp/substr,replacement)
>replacement用來替換regexp/substr
### RegExp()
>正規表示式
```javascript=
new RegExp(pattern, attributes)
```
pattern : 字串
attributes : 包含属性 "g"、"i" 和 "m"，分别用於指定全局匹配、區分大小寫的匹配和多行匹配
* ?=n : 後面跟著n字串的位置
```javascript=
// exp
var str="Is this all there is";
var patt1=/is(?= all)/g;
```
* ?!n : 後面没有緊接指定字符串 n 的任何字符串
* \d : 查詢數字
* \B : 查詢不在開頭或結尾的匹配
* n+ : 匹配包含至少一个 n 的任何字符串
* n{x} : 量詞匹配包含 X 個 n 的序列的字符串
>/\B(?=(\d{3})+(?!\d))/g : 表示不是開始或結束的縫隙，此縫隙右邊必須要有3個數字，接著不能出現數字，也就是右邊只能出現連續3個數字
### join(separator)
>將陣列內的資料用參數內的字串分開，範例中用join("")來避免回傳的陣列有"，"產生

## css語法&備註
### justify-content
>justify-content 決定了內容元素與整個 Flexbox 的「水平對齊」位置
* flex-start：預設值，對齊最左邊的 main start
* flex-end：對齊最左邊的 main end
* center：水平置中
* space-between：平均分配內容元素，左右元素將會與 main start 和 main end 貼齊
* space-around：平均分配內容元素，間距也是平均分配 