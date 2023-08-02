/*
Add javascript to make this game work. Below are some tasks that you will need to complete.

- take the user's input 1, 2, or 3 and remove that number of sticks from the pile
- have the computer choose a random number 1 to 3 on their turn and update the total number of sticks remaining based on what the computer took.
- update the message on how many the computer took
- make sure the human is not cheating by taking more than 3 and less than 1
- once there is only one stick remaining display who won. The players turn who has to pick up the last stick looses.


"BONUS"
- make the game hard. There is a key to winning this game. You must get to a magic number and once you know these magic numbers you can impossible to win if the computer can get to the series of magic numbers.

HINT: once you are on the magic numbers whatever the human picks should equal 4 for the computers response.
(ex: human choose 1 stick the computer should choose 3 to make the total of 4)
Remember this only works once the computer is on a Magic Number. Landing on a magic number can be started after the first guess. So if the human slips and doesn't get to the magic number the computer should always win. 
*/

//setup section
//fishing section
let sticksLeft = document.getElementById("sticksLeft");
let numberInput = document.getElementById("numberInput");
let submitButton = document.getElementById("submitButton");
let computerTookMessage = document.getElementById("computerTookMessage");

//event listener section

let currentSticksNumber = 23;
submitButton.addEventListener("click", () => {
  let computerTakes = Math.floor(Math.random() * 3) + 1;
  // human turn
  if (numberInput.value > 3) {
    computerTookMessage.textContent =
      "HEY! No Cheating! You can only pick 1, 2, or 3 sticks";
  } else {
    currentSticksNumber -= parseInt(numberInput.value);
    sticksLeft.textContent = currentSticksNumber;
    //computer turn
    if (currentSticksNumber === 1) {
      computerTookMessage.textContent = `You left me with 1 stick so you win.`;
    } else if (currentSticksNumber === 12) {
      computerTookMessage.textContent = `The computer took 3 sticks.`;
      currentSticksNumber -= 3;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 11) {
      computerTookMessage.textContent = `The computer took 2 sticks.`;
      currentSticksNumber -= 2;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 10) {
      computerTookMessage.textContent = `The computer took 1 sticks.`;
      currentSticksNumber -= 1;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 8) {
      computerTookMessage.textContent = `The computer took 3 sticks.`;
      currentSticksNumber -= 3;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 7) {
      computerTookMessage.textContent = `The computer took 2 sticks.`;
      currentSticksNumber -= 2;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 6) {
      computerTookMessage.textContent = `The computer took 1 sticks.`;
      currentSticksNumber -= 1;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 4) {
      computerTookMessage.textContent = `The computer took 3 sticks. Sorry, looks like I win`;
      currentSticksNumber -= 3;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 3) {
      computerTookMessage.textContent = `The computer took 2 sticks. Sorry, looks like I win`;
      currentSticksNumber -= 2;
      sticksLeft.textContent = currentSticksNumber;
    } else if (currentSticksNumber === 2) {
      computerTookMessage.textContent = `The computer took 1 sticks. Sorry, looks like I win`;
      currentSticksNumber -= 1;
      sticksLeft.textContent = currentSticksNumber;
    } else {
      computerTookMessage.textContent = `The computer took ${computerTakes} sticks.`;
      currentSticksNumber -= computerTakes;
      sticksLeft.textContent = currentSticksNumber;
    }
  }
});
