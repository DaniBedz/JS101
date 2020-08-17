const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const MESSAGES = require('./rps_messages.json');

function prompt(key) {
  let message = messages(key);
  console.log(`=> ${message}`);
}

function messages(message) {
  return MESSAGES[message];
}

function isAgain(running) {
  prompt('playAgainMsg');
  let again = readline.question().toLowerCase();
  while (again[0] !== 'n' && again[0] !== 'y') {
    prompt('yesOrNoMsg');
    again = readline.question().toLowerCase();
  }
  if (again[0].toLowerCase() === 'y') {
    running = true;
  } else {
    running = false;
  }
  return running;
}

function displayWinner(choice, computerChoice) {
  console.log(`=> You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('winMsg');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('loseMsg');
  } else {
    prompt("drawMsg");
  }
}

// Main Program

let running = true;

while (running) {
  console.clear();
  prompt('chooseMsg');
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('notValidMsg');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  running = isAgain();
}
