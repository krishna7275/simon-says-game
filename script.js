let gameSeq =[];
let UserSeq = [];
let btns = ["yellow","red","green","purple"];

 let started = false;
 let level = 0;
 let highScore;

 let h2 = document.querySelector("h2");
 let h3 = document.querySelector("h3")

 document.addEventListener("keydown", function(){
    if(started === false){ 
        console.log("Game Started");
        started = true;}
        levelUp();
 });

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
         btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
         btn.classList.remove("userFlash");
    }, 250);
}
 function levelUp(){
    UserSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn); 
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
 }

 function checkAns(idx) {
    if(UserSeq[idx] === gameSeq[idx]){
        if (UserSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML =`Game Over! Your source was <b>${level}</b> <br>  Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "black";
        },250);
        highScore = level;
        h3.innerHTML =`High socre : ${highScore}`;
        reset();
    }
     
 }

function btnPress(){
    // console.log(this)
    let btn = this;
   // console.log(this);
    userFlash(btn)
    userColor = btn.getAttribute("id");
    UserSeq.push(userColor);
    // console.log(userColor);
    checkAns(UserSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
 for (btn of allBtns ){
    btn.addEventListener("click",btnPress);
 }
 function reset() {
    started = false;
    gameSeq =[];
    UserSeq =[];
    
    level = 0;
 }

