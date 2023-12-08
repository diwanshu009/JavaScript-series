// This is my first good to go project!!
// Explaining all the logic in game.js!!

let buttons = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let msgCont= document.querySelector('.msg-cont');
let newBtn = document.querySelector('#newGame');
let msg = document.querySelector('#msg');

let turnO = true;

const winPatt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let ans =0;
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(turnO){
            button.innerHTML="O";
            turnO= false;
        }else{
            turnO =true;
            button.innerHTML="X";
        }
        ans++;
        button.disabled = true;
        checkWinner();
        if(ans==9){
            drawCon();
        }
    })
})

const resetgame = ()=>{
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
}

const enableBoxes = ()=>{
    for(but of buttons){
        but.disabled = false;
        but.innerHTML = "";
    }
}

const drawCon = ()=>{
    msg.innerText = "Match drawn";
    msgCont.classList.remove("hide");
}

const disableBoxes = ()=>{
    for(but of buttons){
        but.disabled =true;
    }
};

const showWinner = (winner)=>{
    msg.innerText= `Winner is Player: ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(pattern of winPatt){
        let pos1 = buttons[pattern[0]].innerHTML;
        let pos2 = buttons[pattern[1]].innerHTML;
        let pos3 = buttons[pattern[2]].innerHTML;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1)
            }
        }
    }
}

newBtn.addEventListener('click',resetgame);
resetBtn.addEventListener('click',resetgame);