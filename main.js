let myFirstNumber = 0;
let mySecondNumber = 0;
let myResult = 0;

const input1 = document.querySelector("#firstNumber");
const input2 = document.querySelector("#secondNumber");
const showResult = document.querySelector("p");

function calculateNumbers() {
  //Fetch value for first number
  myFirstNumber = input1.value;

  //Fetch value for second number
  mySecondNumber = input2.value;

  //Calculate numbers
  myResult = parseInt(myFirstNumber) + parseInt(mySecondNumber);

  //Set result in the DOM
  showResult.innerHTML = myResult;
}
