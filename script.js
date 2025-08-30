let gameSeq =[];
let UserSeq = [];
let btns = ["yellow","red","green","purple"];

 let started = false;
 let level = 0;

 let h2 = document.querySelector("h2");

 document.addEventListener("keydown", function(){
    if(started === false){ 
        console.log("Game Started");
        started = true;}
        levelUp();
 });

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
         btn.classList.remove("flash");
    }, 250);
}

 function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randbtn); 
    btnFlash(randbtn);
 }

function btnPress(){
    // console.log(this)
    let btn = this;
    btnFlash(btn)
}

let allBtns = document.querySelectorAll(".btn")
 for (btn of allBtns ){
    btn.addEventListener("click",btnPress);
 }


