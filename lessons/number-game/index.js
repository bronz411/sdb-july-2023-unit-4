// Game Setup section
let player1Total = 0;
let player2Total = 0;
let isPlayer1Turn = true;
// ! Grabbing Elements
// buttons
let showRulesButton = document.getElementById("show-rules");
let closeButton = document.getElementById("close-btn");
let resetButton = document.getElementById("resetBtn");
//game and rules div
let infoDiv = document.getElementById("info-div");
let gameContainer = document.getElementById("container");
let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");
// scoreboard
let player1Score = document.getElementById("player1Scoreboard");
let player2Score = document.getElementById("player2Scoreboard");
let rollButton = document.getElementById("rollBtn");
// message
let message = document.getElementById("message");

// Event Listeners Section
resetButton.addEventListener("click", start);
closeButton.addEventListener("click", () => {
  /* 
    -hide info section
    -display the game container
    */
  infoDiv.style.display = "none";
  gameContainer.style.display = "block";
});

showRulesButton.addEventListener("click", () => {
  /* 
  -hide game container
  -display the info section
  */
  gameContainer.style.display = "none";
  infoDiv.style.display = "block";
});

rollButton.addEventListener("click", () => {
  // Randomized dice roll (d6)
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // based on who's turn it is....
  /* 
    - apply the random number to the player's score total
    -display dice roll to the HTML (DOM)
    -update player scoreboard with their totaal
    -update the message on who's turn it is
    -remove the active class from the player that just rolled and apply it to the player that is next
    */
  //     below is the same as saying isPlayer1Turn === true
  if (isPlayer1Turn) {
    player1Total += randomNumber;
    player1Dice.textContent = randomNumber;
    player1Score.textContent = player1Total;
    message.textContent = "Player 2's Turn";
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    // isPlayer1Turn = false;
  } else {
    player2Total += randomNumber;
    player2Dice.textContent = randomNumber;
    player2Score.textContent = player2Total;
    message.textContent = "Player 1's Turn";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    // isPlayer1Turn = true;
  }
  // Check to see if we have a winner
  /* 
    - display proper message "player _____ wins"
    - display reset button and hide the roll button
    */
  if (player1Total >= 20) {
    message.textContent = "Player 1 has won!";
    resetButton.style.display = "block";
    rollButton.style.display = "none";
  } else if (player2Total >= 20) {
    message.textContent = "player 2 has won!";
    resetButton.style.display = "block";
    rollButton.style.display = "none";
  }

  isPlayer1Turn = !isPlayer1Turn; // does same as commented out code for isPlayer1Turn
});

function start() {
  player1Total = 0;
  player2Total = 0;
  isPlayer1Turn = true;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1Score.textContent = player1Total;
  player2Score.textContent = player2Total;
  message.textContent = "Player 1's Turn";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  resetButton.style.display = "none";
  rollButton.style.display = "block";
}

start();
