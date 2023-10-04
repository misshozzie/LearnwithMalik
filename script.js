/* ----- CONSTANTS ----- */
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const resetButton = document.getElementById("Reset");

/* ----- VARIABLES ----- */
let answer = 0;


/* ----- FUNCTIONS ----- */
function generateProblem() { 
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let wrongAns1 = Math.floor(Math.random() * 10);
  let wrongAns2 = Math.floor(Math.random() * 10);
      allChoices = [],
      shuffleshChoices = [];

  answer = num1 + num2;
  
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 

  allChoices = [answer, wrongAns1, wrongAns2];

  for (i = allChoices.length; i--;){
    shuffleshChoices.push(allChoices.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  choice1.innerHTML = shuffleshChoices[0];
  choice2.innerHTML = shuffleshChoices[1];
  choice3.innerHTML = shuffleshChoices[2]; 
};

choice1.addEventListener("click", function(){
    if(choice1.innerHTML == answer){
      generateProblem();
    }
});

choice2.addEventListener("click", function(){
    if(choice2.innerHTML == answer){
      generateProblem();
    }
    });

choice3.addEventListener("click", function(){
    if(choice3.innerHTML == answer){
      generateProblem();
    }
});

resetButton.addEventListener("click", function(){
  generateProblem();
  });

  generateProblem()