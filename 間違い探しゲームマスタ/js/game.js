let timer = null;
let MIN = 0;
let MAX = 6;
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}

function gameStart() {
  let size = 5;
  let qNum = Math.floor(Math.random()*q.length);
  for (let i = 0; i < size*size; i ++){
    let s = document.createElement("span");
    s.textContent = q[qNum][0];
    s.setAttribute("id", "num" + i);
    cells.appendChild(s);
    let abc = s.addEventListener("click" ,function(){
      // wrong.play();
      if(this.textContent == q[qNum][1]){
        // alert("正解");
        correct.play();
        MIN++;
        console.log(MIN);
        while (cells.firstChild) {
          cells.removeChild(cells.firstChild);
        }
        gameStart();
      } else {
        wrong.play();
      }
    });
    if(i % size == size -1){
      const br = document.createElement("br");
      cells.appendChild(br);
    }
  }
  if (MIN == MAX ){
    clearTimeout(timer);
  }
  let p = Math.floor(Math.random()*size*size);
  let ans = document.getElementById("num" + p);
  ans.textContent = q[qNum][1];
}

function time() {
  let now = new Date;
  let eTime = parseInt((now.getTime() - start.getTime())/1000);
  score.textContent = eTime;
  timer = setTimeout("time()",1000);
}
