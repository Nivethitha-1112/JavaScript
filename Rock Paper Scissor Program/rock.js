const choices = ["rock", "paper", "scissor"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore= 0;



function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() *3)];
    let result= "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
     }

     playerDisplay.textContent = `PLAYER: ${playerChoice}`;
     computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
     resultDisplay.textContent = result;

     switch(result){
        case "YOU WIN!":
            resultDisplay.classList.remove("redText");
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.remove("greenText");
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.remove("redText");
            resultDisplay.classList.remove("greenText");
            resultDisplay.classList.add("greenText");
            break;
    }
    }