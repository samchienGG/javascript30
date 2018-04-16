# js30-16紀錄&心得-Mouse Move Shadow
## 主題
>透過text-shadow讓文字的陰影隨著滑鼠偏移
## 步驟
### step.1
1.抓取 `html` 裡面的 `hero` 與 `h1`
2.設定基本偏移300
### step.2
1.建立hero的事件聆聽 `hero.addEventListener('mousemove',shadow)`
2.觸發的function
```javascript=
function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;
// 這邊主要h1會遮住hero一部份，所以要重新計算一下座標
  if (this!==e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  h1.style.textShadow = xWalk + 'px ' + yWalk + 'px 0 rgba(50,50,50,.8),' +
                        -1 * xWalk + 'px ' + -1 * yWalk + 'px 0 rgba(0,50,50,.8),' +
                        -1 * yWalk + 'px ' + xWalk + 'px 0 rgba(50,0,50,.8),' +
                        yWalk + 'px ' + -1 * xWalk + 'px 0 rgba(50,50,0,.8)';
}
```