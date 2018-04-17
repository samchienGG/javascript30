# js30-17紀錄&心得-Sort Without Articles
## 主題
>對一個陣列內的文字，在排除"a","an","the"的情況下，按照順序進行排序
## 步驟
1.首先把開頭含有"a","an","the"的字母替換成空白
```javascript=
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
```
2.對陣列進行排序
```javascript=
const sortedBand = bands.sort(function (a,b){
  if ( strip(a) > strip(b) ) {
    return 1;
  }
  else {
    return -1;
  }
})
```
3.渲染到html
```javascript=
document.querySelector('#bands').innerHTML = 
sortedBand.map(function (e){
  return '<li>'+e+'</li>'
}).join('');
```