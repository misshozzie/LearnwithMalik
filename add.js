
/* ----- constants ----- */


/* ----- app's state (variables) ----- */
let correctAnswer = 0;


/* ----- event listeners ----- */
// add the click event for the button
const audio = document.getElementById("audio");   

document.addEventListener("click", function(e) {
  let choice = e.target;

  /* to make sure no duplication of random number at the same time */
  if (choice.id === "choice1" || choice.id === "choice2" || choice.id === "choice3") {
    if (parseInt(choice.innerHTML) === correctAnswer) {
      generateProblem();
    } else {
      audio.play();
    }
  }
});


/* ----- functions ----- */
// to generate problem to solve
function generateProblem(){ 
  const sum1 = Math.floor(Math.random() * 10); //set only by 10. fits the k1-k2 students.
  const sum2 = Math.floor(Math.random() * 10);
 correctAnswer = sum1 + sum2;

 //generating 2 incorrect answers
  let incorrect1, incorrect2;
  
  do {
    incorrect1 = Math.floor(Math.random() * 10);
  } while (incorrect1 === correctAnswer);

  do {
    incorrect2 = Math.floor(Math.random() * 10);
  } while (incorrect2 === correctAnswer || incorrect2 === incorrect1);

  document.getElementById("sum1").innerHTML = sum1;
  document.getElementById("sum2").innerHTML = sum2;

  //Diplay of choices
  let allchoices = [correctAnswer, incorrect1, incorrect2];
  
// for shuffling the choices
  const shuffleChoices = allchoices.sort(() => Math.random() - 0.5);
  
  document.getElementById("choice1").innerHTML = shuffleChoices[0];
  document.getElementById("choice2").innerHTML = shuffleChoices[1];
  document.getElementById("choice3").innerHTML = shuffleChoices[2];
};

generateProblem()
/* This loop game is keep generating problem to solve. 
Will set the audio next time as an alert for kids. */
