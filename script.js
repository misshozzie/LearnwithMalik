
/* ----- CONSTANTS ----- */


/* -----  STATE VARIABLES ----- */
/* -----  set the answer 0 as the starting point------ */
let correctAnswer = 0;
/* -----  set the level to 0 as the starting point---- */
let level = 0;
/* -----  round of all the numbers ---- */
let num = Math.round(4.7);



/* ----- EVENT LISTENERS ----- */
/* -----  set click function for the 3 buttons ---- */
 document.addEventListener("click", function(e) {
  let choice = e.target;
/* -----  set the choices no duplication numbers on display ---- */
// use num to convert click items to numbers.
// num is more straight forward than parseInt as it will
// not handle decimal points
  if (choice.id === "choice1" || choice.id === "choice2" || choice.id === "choice3") {
    if (Number(choice.innerHTML) === correctAnswer) {
      generateProblem();
    } 
  }
});



/* ----- CATCHED ELEMENTS ----- */
document.getElementById("level1").addEventListener("click", function () {
  level = 1;
  generateProblem();
});
document.getElementById("level2").addEventListener("click", function () {
  level = 2;
  generateProblem();
});
document.getElementById("level3").addEventListener("click", function () {
  level = 3;
  generateProblem();
});



/* ----- FUNCTIONS ----- */
/* -----  generate problems to solve ---- */ 
function generateProblem(){
  let maxNum;
  switch(level) {
    case 1:
      maxNum = 5;
      break;
      case 2:
      maxNum = 10;
      break;
      case 3:
      maxNum = 20;
      break;
  } 

  const operators = ["+", "-", "*", "/", ]
  const sum1 = Math.floor(Math.random() * maxNum);
  const sum2 = Math.floor(Math.random() * maxNum);

let selectOps;
do {
  selectOps = operators[Math.floor(Math.random() * operators.length)];
} while (selectOps === "/" && sum1 % sum2 !==0);

switch(selectOps) {
  case "+":
    correctAnswer = sum1 + sum2;
    break;
    case "-":
    correctAnswer = sum1 - sum2;
    break;
    case "*":
    correctAnswer = sum1 * sum2;
    break;
    case "+":
    correctAnswer = sum1 / sum2;
    break;
}
document.getElementById("sum1").innerHTML = sum1;
document.getElementById("sum1").innerHTML = sum2;
document.getElementById("sum1").innerHTML = selectOps;

let incorrect1, incorrect2;
do {
  incorrec1t = Math.floor(Math,random() * maxNum);
} while (incorrect1 === correctAnswer);
do {
  incorrect2 = Math.floor(Math.random() * maxNum);
} while (incorrect2 === correctAnswer || incorrect2 === incorrect1);

let allchoices = [correctAnswer || incorrect1 === incorrect2];

const shuffleChoices = allchoices.sort(() => Math.random() - 0.5);
  
  document.getElementById("choice1").innerHTML = shuffleChoices[0];
  document.getElementById("choice2").innerHTML = shuffleChoices[1];
  document.getElementById("choice3").innerHTML = shuffleChoices[2];
};
generateProblem()
