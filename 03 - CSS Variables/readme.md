# js30-03 記錄&心得

## 主題
> 用js與css搭配做一個及時的慮鏡效果

## CSS語法&備註
### :root
>宣告css全域變數  
>變數命名的規則為：開頭必須是兩個破折號- -
```css=
:root{
    --main-color:#369;
}
h1 {
  color: var(--main-color);
}
```
### input
>滑動桿
>type="range"

## javascript語法&備註
### documentElement
>是整個節點數的根節點root，即<html>標籤

### dataset
>用dataset可以取出對象的data-*屬性，也等同於getAttribute
```javascript=
<div id="test" data-no="123"></div>
document.querySelector('#test').dataset.no // 輸出123
document.querySelector('#test ').getAttribute('data-no'); // 輸出123

```

### setProperty
>style.setProperty(propertyName, value, priority)  
>propertyName : 被更改的CSS属性  
>value : 被更改的CSS属性值  
>priority : 允許 "important" CSS 優先被設置， 如果沒有指定，則被當作空字符
