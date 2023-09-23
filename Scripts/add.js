/* ----- constants ---- */


/* ----- state variables ---- */
let correctAnswer = 0;

/* ----- cached elements ---- */
const audio = document.getElementById("audio");

/* ----- event listeners ---- */
// add click event for choices buttons
document.addEventListener("click", function(e) {
    let choice = e.target;

// this to make sure that no same random number at once  
    if (choice.id === "choice1" || choice.id === "choice2" || choice.id === "choice3") {
      if (parseInt(choice.innerHTML) === correctAnswer) {
        generateProblem();
      } else {
        audio.play();
      }
    }
  });
/* ----- functions ---- */
// to genarate problems to be solve
function generateProblem(){ 
    const sum1 = Math.floor(Math.random() * 15);
    const sum2 = Math.floor(Math.random() * 15);
   correctAnswer = sum1 + sum2;
  
    let incorrect1, incorrect2;
    
    do {
      incorrect1 = Math.floor(Math.random() * 15);
    } while (incorrect1 === correctAnswer);
  
    do {
      incorrect2 = Math.floor(Math.random() * 15);
    } while (incorrect2 === correctAnswer || incorrect2 === incorrect1);
  
    document.getElementById("sum1").innerHTML = sum1;
    document.getElementById("sum2").innerHTML = sum2;
  
    let allchoices = [correctAnswer, incorrect1, incorrect2];
    
  // for shuffling the choices
    const shuffleChoices = allchoices.sort(() => Math.random() - 0.5);
    
    document.getElementById("choice1").innerHTML = shuffleChoices[0];
    document.getElementById("choice2").innerHTML = shuffleChoices[1];
    document.getElementById("choice3").innerHTML = shuffleChoices[2];
  };
  
  generateProblem()
