# js30-10紀錄&心得-Hold Shift and Check Checkboxes
## 目標
>使用`shift`+滑鼠左鍵完成區間選取
## 步驟
1. 用`document.querySelectorAll('.inbox input[type="checkbox"]')`來把`HTML`裡的`input`選起來，並設置一個變數`lastChecked`，做為勾選位置的記錄使用
2. 把所有選取的`checkboxes`用`forEach`來建立事件聆聽`addEventListener('click', handleCheck)`
3. handleCheck
> 在這`function`裡面，先判斷`shift`有沒有按著且`input`有沒有勾選，若有的話再跑一次`forEach`判斷`(checkbox === _this || checkbox === lastChecked)`，透過`inBetween`對`input`做標記。若不成立的話，把勾選的`input`帶入`lastChecked`。
```javascript= 
function handleCheck(e) {
    let inBetween = false;
    let _this = this;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(function(checkbox) {
            if (checkbox === _this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
```
### 記錄遇到的問題:
* 第2個`if`裡面的判斷，如果用`this`，抓到的會是`window`
* 判斷式裡面的兩個條件:
    * `(checkbox === _this)`:現在勾選的以下
    * `(checkbox === lastChecked)`:上一個勾選的以下

## 問題
>原本作者寫的版本，一開始`shift`點選的時候，會整個一起選起來。還有無法區間取消。參考[GuaHsu](https://github.com/guahsu/JavaScript30/tree/master/10_Hold-Shift-and-Check-Checkboxes)之後練習修改
```javascript=
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let select_this;
let cancle_this;
let lastChecked;

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        select_this = this;
        selectFn();
    } else if (e.shiftKey && !this.checked) {
        cancle_this = this;
        cancleFn();
    } else if (this.checked) {
        lastChecked = this;
        select_this = undefined;
        cancle_this = undefined;         
    } 
}
function selectFn(e) {
    let inBetween = false;
    checkboxes.forEach(function(checkbox) {
        if (checkbox === select_this || checkbox === lastChecked) {
            inBetween = !inBetween;
        }
        if (inBetween && lastChecked !== undefined && lastChecked !== select_this) {
            checkbox.checked = true;
        }
    });
}

function cancleFn() {
  let inBetween = false;
    checkboxes.forEach(function(checkbox) {
        if (checkbox === cancle_this || checkbox === select_this) {
            inBetween = !inBetween;
        }
        if (inBetween || checkbox == select_this) {
            checkbox.checked = false;
        }
    });
}
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', handleCheck);
})
window.addEventListener('keyup', function(e) {
  if (e.keyCode == 16 || e.shiftKey) {
      lastChecked = undefined;
  }
})
```