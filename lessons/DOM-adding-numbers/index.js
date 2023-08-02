// using the provided code, put 2 separate numbers in the input fields, and hit submit. this will add the two numbers together and display them in the totals section.

// fishing section
let firstInput = document.getElementById("input1");
let secondInput = document.getElementById("input2");
let sumMessage = document.getElementById("total");
let submitButton = document.getElementById("submitButton");
// set up
let input1 = 0;
let input2 = 0;
let sumTotal = 0;
// event listeners
submitButton.addEventListener("click", () => {
  input1 = firstInput.value;
  input2 = secondInput.value;
  sumTotal = parseInt(input1) + parseInt(input2);
  sumMessage.textContent = sumTotal;
});
