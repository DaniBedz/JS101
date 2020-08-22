const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const MESSAGES = require("./rps_messages.json");
const VALID_ANSWERS = ["y", "yes", "n", "no"];
const ROUNDS_TO_WIN = 5;
const WINNING_COMBOS = {
  rock:     ["scissors", "lizard"],
  paper:    ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard:   ["paper", "spock"],
  spock:    ["rock", "scissors"],
};

function prompt(key) {
  let message = messages(key);
  console.log(`=> ${message}`);
}

function messages(message) {
  return MESSAGES[message];
}

function persistantHeader() {
  let padding = Math.floor((50 - MESSAGES["titleMsg"].length) / 2);
  console.clear();
  console.log(
    MESSAGES["titleMsg"].padStart(padding + MESSAGES["titleMsg"].length)
  );
  console.log(
    MESSAGES["spacerMsg"].padStart(padding + MESSAGES["spacerMsg"].length)
  );
}

function persistantHeaderScores(runningScores) {
  let padding = Math.floor((50 - MESSAGES["titleMsg"].length) / 2);
  console.clear();
  console.log(
    MESSAGES["titleMsg"].padStart(padding + MESSAGES["titleMsg"].length)
  );
  console.log(
    MESSAGES["spacerMsg"].padStart(padding + MESSAGES["spacerMsg"].length)
  );
  displayScores(runningScores);
  console.log(
    MESSAGES["spacerMsg"].padStart(padding + MESSAGES["spacerMsg"].length)
  );
}

function displayScores(runningScores) {
  let padding = Math.floor((29 - MESSAGES["playerMsg"].length) / 2);
  console.log(
    MESSAGES["playerMsg"].padStart(padding + MESSAGES["playerMsg"].length) +
      runningScores.player +
      "    ||    " +
      MESSAGES["cpuMsg"] +
      runningScores.cpu +
      "\n"
  );
}

function selectGameMode() {
  persistantHeader();
  console.log("=> " + MESSAGES["gameModeMsg"] + `${ROUNDS_TO_WIN} wins)\n`);
  let gameModeChoice = readline.question();
  while (gameModeChoice !== "1" && gameModeChoice !== "2") {
    persistantHeader();
    console.log("=> " + MESSAGES["gameModeMsg"] + `${ROUNDS_TO_WIN} wins)\n`);
    prompt("invalidGameModeMsg");
    gameModeChoice = readline.question();
  }
  return gameModeChoice;
}

function retrieveChoice(input, runningScores) {
  prompt("chooseMsg");
  input = readline.question();
  input = expandChoice(input);
  while (isInvalidChoice(input)) {
    persistantHeaderScores(runningScores);
    prompt("chooseMsg");
    prompt("notValidMsg");
    input = readline.question();
    input = expandChoice(input);
  }
  return input;
}

function expandChoice(inputtedChoice) {
  switch (inputtedChoice) {
    case "r":
      inputtedChoice = "rock";
      break;
    case "p":
      inputtedChoice = "paper";
      break;
    case "sc":
      inputtedChoice = "scissors";
      break;
    case "sp":
      inputtedChoice = "spock";
      break;
    case "l":
      inputtedChoice = "lizard";
      break;
  }
  return inputtedChoice;
}

function isInvalidChoice(input) {
  return !VALID_CHOICES.includes(input);
}

function playerTurn(input, runningScores) {
  persistantHeaderScores(runningScores);
  input = retrieveChoice(input, runningScores);
  return input;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function determineWinner(WINNING_COMBOS, input, computerChoice) {
  if (WINNING_COMBOS[input].includes(computerChoice)) {
    return "playerRound";
  } else if (input === computerChoice) {
    return "draw";
  } else {
    return "cpuRound";
  }
}

function displayWinner(runningScores, input, computerChoice, roundWinner) {
  persistantHeaderScores(runningScores);
  console.log(`=> You chose ${input}, computer chose ${computerChoice}\n`);
  if (roundWinner === "playerRound") {
    console.log(MESSAGES["winMsg"]);
  } else if (roundWinner === "draw") {
    console.log(MESSAGES["drawMsg"]);
  } else {
    console.log(MESSAGES["loseMsg"]);
  }
}

function keepScore(roundWinner, runningScores) {
  switch (roundWinner) {
    case "playerRound":
      runningScores.player += 1;
      break;
    case "cpuRound":
      runningScores.cpu += 1;
      break;
    case "draw":
      break;
  }
  return runningScores;
}

function isContinue(gameRunning, gameMode, runningScores) {
  if (gameMode === "1") {
    gameRunning = false;
  } else if (
    runningScores.player === ROUNDS_TO_WIN ||
    runningScores.cpu === ROUNDS_TO_WIN
  ) {
    gameRunning = false;
  } else {
    prompt("nextRoundMsg");
    let continueGame = readline.question();
    if (
      continueGame.toLowerCase() === "q" ||
      continueGame.toLowerCase() === "quit"
    ) {
      gameRunning = false;
    }
  }
  return gameRunning;
}

function displayChampion(runningScores) {
  if (runningScores.player === ROUNDS_TO_WIN) {
    prompt("winTournamentMsg");
  } else if (runningScores.cpu === ROUNDS_TO_WIN) {
    prompt("loseTournamentMsg");
  }
}

function validateAgain(
  input, runningScores, choice, computerChoice, roundWinner) {
  while (!VALID_ANSWERS.includes(input)) {
    persistantHeaderScores(runningScores);
    displayWinner(runningScores, choice, computerChoice, roundWinner);
    displayChampion(runningScores);
    prompt("playAgainMsg");
    prompt("invalidAgainMsg");
    input = readline.question().toLowerCase();
  }
  return input;
}

function getAnotherMatch(
  input, runningScores, choice, computerChoice, roundWinner
) {
  persistantHeaderScores(runningScores);
  displayWinner(runningScores, choice, computerChoice, roundWinner);
  displayChampion(runningScores);
  prompt("playAgainMsg");
  input = readline.question().toLowerCase();
  input = validateAgain(
    input, runningScores, choice, computerChoice, roundWinner
  );
  return input;
}

function isAnotherMatch(again) {
  return again[0] === "y";
}

let gameRunning = true;
let running = true;
let gameMode;
let choice;
let again;
let roundWinner;
let computerChoice;
let scores = {
  player: 0,
  cpu: 0,
};

// Main program loop
while (running) {
  while (gameRunning) {

    gameMode = selectGameMode();

    while (gameRunning) {

      choice = playerTurn(choice, scores);

      computerChoice = getComputerChoice();

      roundWinner = determineWinner(WINNING_COMBOS, choice, computerChoice);

      scores = keepScore(roundWinner, scores);

      displayWinner(scores, choice, computerChoice, roundWinner);

      gameRunning = isContinue(gameRunning, gameMode, scores);
    }
  }

  again = getAnotherMatch(again, scores, choice, computerChoice, roundWinner);
  running = isAnotherMatch(again);
  scores = {
    player: 0,
    cpu: 0,
  };
  gameRunning = true;
}
