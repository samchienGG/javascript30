# js30-15紀錄&心得-LocalStorage
## 目標
>介紹localstorage的用法，透過增加選單來練習
## 內容
### LocalStorage的使用
>LocalStorage是一個在瀏覽器端作為緩存機制的存在
### 給值寫法
* localStorage.setItem("Key名稱", "字串值");
* localStorage["Key名稱"] = "字串值"; 
* localStorage.Key名稱 = "字串值";
### 輸入欄位新增功能
>首先取得`form`元素及`ul`，並宣告一個空陣列來存放新增資料。
```javascript=
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];
```
```javascript=
function addItem(e) {
    e.preventDefault();
    console.log(this);
    const text = (this.querySelector('[name=item]')).value;
    //es6新語法，當key與value相同時，只寫變數名稱即可
    const item = {
      text,
      done: false
    };
    items.push(item);

    this.reset();//清除輸入欄位
    console.log(items);

}
```
### 顯示新增的選單
```javascript=
//ES6可在function中的參數直接設定參數預設值
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map(function(plate,i) {
    return '<li>'+
    '<input type="checkbox" data-index="'+i+'" id="item'+i+'" '+(plate.done ? 'checked' : '')+'/>'+
    '<label for=item'+i+'>'+plate.text+'</label>'+
    '<span data-index='+i+'>delete<span>'+ 
    '</li>';
    }).join('');
    console.log(plates);
      
  }
```
>要記得把回去在'addItem'把'populateList(items, itemsList)'放在'items.push(item)'後面
讓每次輸入送出後，都會執行這個function

### 加入LocalStorage
```javascript=
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
```
接著修改最一開始宣告的`items`:
```javascript=
const items = JSON.parse(localStorage.getItem('items'))||[];
```
讓頁面在重整後，先判斷localStorage中是否有存放`items`物件，沒有的話則給空陣列。
### 儲存checkbox狀態
>這裡要新增一個function`toggleDone`並監聽`itemsList`的click動作，
```javascript=
function toggleDone(e) {
    const el = e.target;
    // 取得checkbox的data-index值
    const index = el.dataset.index;
    // 判斷觸發元素
    if (e.target.matches('input')){
      items[index].done = !items[index].done;
      // 將更新後的狀態寫入localStorage中
      localStorage.setItem('items', JSON.stringify(items));
      populateList(items, itemsList);
    }
    if (e.target.matches('span')) {
      items.splice(index,1);
      localStorage.setItem('items', JSON.stringify(items));
      populateList(items, itemsList);
}
```