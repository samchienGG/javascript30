# js30-11紀錄&心得-Key Sequence Detection
## 目標
>輸入隱藏的密碼後，顯示特效
## 步驟
1. 在這個效果中，目的是透過鍵盤觸發對應的密碼後執行，所以需要設定一個陣列保存輸入值，並設定好密碼來對應
```javascript=
const pressed = [];
const secretCode = 'wesbos';
```
2. 當觸發`keyup`時，利用陣列的`push()`來塞入鍵盤動作所輸入的內容`e.key`，接著利用`splice()`刪除多餘的陣列元素，使其不超過密碼長度。最後透過`join()`與`includes()`做比對
## JavaScript語法&備註
### Array.prototype.splice()
>`array.splice(index,howmany,item1,.....,itemX)`對陣列內容刪除或新增  
>第一個參數`index`:開始刪除或新增的位置，若為負，代表從後面開始數  
>第二個參數`howmany`:為移除數量，若為0則不移除  
>第三個參數`item1...`:要添加到陣列的新元素  
>範例中的寫法，`-secretCode.length - 1`從後面數來的第7個，就等於第一個開始，然後刪除超過的量，讓陣列維持在與密碼相同的長度
```javascript=
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```
### Array.prototype.join()
>把陣列轉換為字串，並透過參數設定連接符號，才可以比對
```javascript=
var arr = [1,2,3];
arr.join(''); // '123'
arr.join(','); // '1,2,3'
```
### Array.prototype.includes()
>在`string`跟`array`都有`includes()`可以使用，都是去判斷`string/array`是否包含`incudes`設定的參數後回傳`true/false`
```javascript=
arr.includes(searchElement);
```