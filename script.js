let currentAnswer;
let level = 1;
let maxRandomNumber = 5;
let gameIsActive = true;

function generateQuestion() {
	const operator = Math.random() >= 0.5 ? '+' : '-';
	let a = Math.floor(Math.random() * maxRandomNumber) + 1;
	let b = Math.floor(Math.random() * maxRandomNumber) + 1;
	if (operator === '-' && a < b) {
		[a, b] = [b, a];
	}
	currentAnswer = operator === '+' ? a + b : a - b;
	document.getElementById('question').innerText = `${a} ${operator} ${b} = ?`;
}

function submitAnswer() {
  if (!gameIsActive) return;
  let userAnswer = document.getElementById('answer').value;
  if (+userAnswer === currentAnswer) {
      if (level !== 3) {
        document.getElementById('message').textContent = `You won! Level up to ${++level}`;
        maxRandomNumber *= 5;
      } else {
        document.getElementById('message').textContent = 'Congrats! You are certified mathematician!';
      }
  } else {
      document.getElementById('message').textContent = 'You lost!';
      gameIsActive = false;
  }
  document.getElementById('answer').value = '';
  generateQuestion();
}
function resetGame() {
  level = 1;
  maxRandomNumber = 5;
  gameIsActive = true;
  document.getElementById('message').textContent = '';
  document.getElementById('answer').value = '';
  generateQuestion();
}

window.onload = function() {
	generateQuestion();
};