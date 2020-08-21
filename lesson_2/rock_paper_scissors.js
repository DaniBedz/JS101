const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const MESSAGES = require('./rps_messages.json');
const VALID_ANSWERS = ['y', 'yes', 'n', 'no'];
const ROUNDS_TO_WIN = 5;
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(key) {
  let message = messages(key);
  console.log(`=> ${message}`);
}

function messages(message) {
  return MESSAGES[message];
}

function selectGameMode() {
  persistantHeader();
  console.log('=> ' + MESSAGES['gameModeMsg'] + `${ROUNDS_TO_WIN} wins)\n`);
  let gameModeChoice = readline.question();
  while (gameModeChoice !== '1' && gameModeChoice !== '2') {
    persistantHeader();
    console.log('=> ' + MESSAGES['gameModeMsg'] + `${ROUNDS_TO_WIN} wins)\n`);
    prompt('invalidGameModeMsg');
    gameModeChoice = readline.question();
  }
  return gameModeChoice;
}

function persistantHeader() {
  console.clear();
  console.log(MESSAGES['titleMsg']);
}

function displayScores(scores) {
  console.log( MESSAGES['playerMsg'] + scores.player + ' || '
            + MESSAGES['cpuMsg'] + scores.cpu + '\n');
}

function validateChoice(choice, scores) {
  while (!VALID_CHOICES.includes(choice)) {
    persistantHeader();
    displayScores(scores);
    prompt('chooseMsg');
    prompt('notValidMsg');
    choice = readline.question();
    choice = expandChoice(choice);
  }
  return choice;
}

function determineWinner(WINNING_COMBOS, choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    return 'playerRound';
  } else if (choice === computerChoice) {
    return 'draw';
  } else {
    return 'cpuRound';
  }
}

function displayWinner(choice, computerChoice, roundWinner, scores) {
  persistantHeader();
  displayScores(scores);
  console.log(`=> You chose ${choice}, computer chose ${computerChoice}\n`);
  if (roundWinner === 'playerRound')  {
    console.log(MESSAGES['winMsg']);
  } else if (roundWinner === 'draw') {
    console.log(MESSAGES['drawMsg']);
  } else {
    console.log(MESSAGES['loseMsg']);
  }
}

function keepScore(roundWinner, scores) {
  switch (roundWinner) {
    case 'playerRound':
      scores.player += 1;
      break;
    case 'cpuRound':
      scores.cpu += 1;
      break;
    case 'draw':
      break;
  }
  return scores;
}

function expandChoice(inputtedChoice) {
  switch (inputtedChoice) {
    case 'r':
      inputtedChoice = 'rock';
      break;
    case 'p':
      inputtedChoice = 'paper';
      break;
    case 'sc':
      inputtedChoice = 'scissors';
      break;
    case 'sp':
      inputtedChoice = 'spock';
      break;
    case 'l':
      inputtedChoice = 'lizard';
      break;
  }
  return inputtedChoice;
}

function isContinue(gameRunning, gameMode, scores) {
  if (gameMode === '1') {
    gameRunning = false;
  } else if (scores.player === ROUNDS_TO_WIN || scores.cpu === ROUNDS_TO_WIN ) {
    gameRunning = false;
  } else {
    prompt('nextRoundMsg');
    let continueGame = readline.question();
    if (continueGame.toLowerCase() === 'q' ||
        continueGame.toLowerCase() === 'quit') {
      gameRunning = false;
    }
  }
  return gameRunning;
}

function displayChampion(scores) {
  if (scores.player === ROUNDS_TO_WIN) {
    prompt('championMsg');
  } else if (scores.cpu === ROUNDS_TO_WIN) {
    prompt('betterLuckMsg');
  }
}

function isAnotherMatch(
  choice, computerChoice, roundWinner, scores) {
  prompt('playAgainMsg');
  let again = readline.question();
  again = invalidAgain(
    again, choice, computerChoice, roundWinner, scores);
  return (again[0].toLowerCase() === "y");
}

function invalidAgain(again, choice, computerChoice, roundWinner, scores) {
  while (!VALID_ANSWERS.includes(again)) {
    console.clear();
    displayWinner(choice, computerChoice, roundWinner, scores);
    if (ROUNDS_TO_WIN === scores.player || ROUNDS_TO_WIN === scores.cpu) {
      displayChampion(scores);
    }
    prompt('playAgainMsg');
    prompt('invalidAgainMsg');
    again = readline.question();
  }
  return again;
}
let gameRunning = true;
let running = true;
let gameMode;
let choice;
let roundWinner;
let computerChoice;
let scores = {
  player: 0,
  cpu: 0
};

// Main program loop
while (running) {
  while (gameRunning) {

    gameMode = selectGameMode();

    while (gameRunning === true) {
      persistantHeader();
      displayScores(scores);
      prompt('chooseMsg');
      choice = readline.question().toLowerCase();
      choice = expandChoice(choice);
      choice = validateChoice(choice, scores);

      let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
      computerChoice = VALID_CHOICES[randomIndex];

      roundWinner = determineWinner(WINNING_COMBOS, choice, computerChoice);
      scores = keepScore(roundWinner, scores);
      displayWinner(choice, computerChoice, roundWinner, scores);
      displayChampion(scores);
      gameRunning = isContinue(gameRunning, gameMode, scores);
    }
  }
  running = isAnotherMatch(choice, computerChoice, roundWinner, scores);
  gameRunning = true;
  scores = {
    player: 0,
    cpu: 0
  };
}
