let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let msg = document.querySelector("#msg");
 let newGameBtn = document.querySelector(".new-Btn");
 let msgContainer = document.querySelector(".msg-container");
 //let draw = document.querySelector("#draw");

let turnO = true;
let count = 0;
 const winPatterns =[
    [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [3,4,5],
 [6,7,8],
 [2,4,6],
];

const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


 boxes.forEach((box)=> {
box.addEventListener("click", () => {
    
   
    console.log("box is clicked");
    if(turnO){
        box.innerText = "O"
        turnO = false;
    }
    else{
        box.innerText = "X"
        turnO = true; 
    }
   console.log(count);
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
   //checkWinner();
    if (count === 9 && !isWinner) {
        gameDraw();
    }
})
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
};



let checkWinner = () => {
    for(let pattern of winPatterns)
    {
     let posVal1 = boxes[pattern[0]].innerText;
     let posVal2 = boxes[pattern[1]].innerText;
     let posVal3 = boxes[pattern[2]].innerText;
    
    if(posVal1 != "" && posVal2 != "" && posVal3 != "")
    {
       if(posVal1 === posVal2 && posVal2 === posVal3)
       {
        console.log("WINNER",posVal1);
        showWinner(posVal1);
        }
        
    }}
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

