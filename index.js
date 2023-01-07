// Player Sign
const Player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

const playerX = Player("X");
const playerO = Player("O");
let round = 0;


const Gameboard = {
  board:["", "", "", "", "", "", "", "", ""] 
};

const setBoard = Gameboard;

const winning_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Essential DOM manipulation
const elements = document.querySelectorAll(".board-element");
const restart  = document.querySelector(".restart-btn");

// Create essential game elements on board and set object array
elements.forEach((element) => {
  element.addEventListener("click", gameController, { once: true });
});

function gameController(e) {
  const element = e.target;
  const field   = e.target.dataset.index;
  
  round++
  if (round % 2 === 1){
    element.innerText = playerX.getSign();
  }else{
    element.innerText = playerO.getSign();
  }
  let index = setBoard.board.indexOf("");
  setBoard.board[index] =  field;

  if (round === 9 ) {
    restart.style = "display:flex";
  }
}


// Restart Button
restart.addEventListener("click", restartGame );

function restartGame () {
  const reset = () => {
    for (let i = 0; i < setBoard.board.length; i++) {
      setBoard.board[i] = "";
    }
  };
  elements.forEach(function(element) {
    element.textContent = '';
  });
  round = 0;

  if (round != 9 ) {
    restart.style = "display:none";
  }
  reset();

  elements.forEach((element) => {
    element.addEventListener("click", gameController, { once: true });
  });
}
