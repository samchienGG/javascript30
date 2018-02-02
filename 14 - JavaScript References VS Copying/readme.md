# js30-14紀錄&心得-JavaScript References VS Copying
## 主題
>介紹call by reference(參考)與copying(call by value)
## 步驟
### 原始型別(Primitive Type)
1. string 
2. number
3. boolean
4. null
5. undefined
>對原始型別來說，都是call by value
```javascript=
let age = 100;
let age2 = age;
console.log(age, age2);//(100,100)
age = 200;
console.log(age, age2);//(200,100)

let name = 'Sam';
let name2 = name;
console.log(name, name2);//(Sam,Sam)
name = 'Wayne';
console.log(name, name2);//(Wayne,Sam)
```
>最初的`age2 = age`
### 物件型別(Object Type)
1. `var obj = {}`
2. 陣列
>對陣列及物件來說，都是call by reference
```javascript=
// Let's say we have an array
const Players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = Players;

console.log(Players, team);
//(['Wes', 'Sarah', 'Ryan', 'Poppy'],['Wes', 'Sarah', 'Ryan', 'Poppy'])
// You might think we can just do something like this:
team[3] = 'Sam';
console.log(Players, team);
//(['Wes', 'Sarah', 'Ryan', 'Sam'],['Wes', 'Sarah', 'Ryan', 'Sam'])
```
### 陣列複製
>為了避免call by reference會去更動原本的陣列，所以要先把陣列複製一次
#### Array.prototype.slice()
>如果沒有指定開始跟結束，複製整個陣列
```javascript=
const Players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team2 = Players.slice();
team2[3]='sss';
console.log(team2,Players);
//(['Wes', 'Sarah', 'Ryan', 'sss'],['Wes', 'Sarah', 'Ryan', 'Poppy'])
```
#### Array.prototype.concat()
>合併陣列，用空陣列來合併原陣列，也可以達到同樣效果
```javascript=
const team3 = [].concat(Players);
```
#### Spread syntax
>展開運算子，可以把陣列中的元素取出
```javascript=
const team4 = [...Players];
```
#### Array.from()
```javascript=
const team5 = Array.from(Players);
```
### 物件複製
#### Object.assign()
>指定一個空物件，並把對像塞進去。但是`assign`是淺層複製，若有多層的物件，需要用其他方法做
```javascript=
const person = {
      name: 'Wes Bos',
      age: 80
    };
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
```
#### JSON.parse * JSON.stringify
>可以完整的複製物件，這方法比較普遍
```javascript=
const wes = {
      name: 'Wes',
      age: 100,
      social:{
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      };
const dev2 = JSON.parse(JSON.stringify(wes));
```