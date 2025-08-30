let gameSeq =[];
let UserSeq = [];
 let started = false;
 let level = 0;

 let h2 = document.querySelector("h2");

 document.addEventListener("keydown", function(){
    if(started === false){ 
        console.log("Game Started");
        started = true;}
        levelUp();
 });

function btnFlash(){
    btnFlash,classList.add("flash");
    ti
}

 function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
 }


