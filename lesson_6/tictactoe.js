const readline = require(`readline-sync`);
const TITLE = '-=| Tic Tac Toe |=-  ';
const INITIAL_MARKER = ` `;
const PLAYER_MARKER = `X`;
const CPU_MARKER = `O`;
const GAMES_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const VALID_CHOICES = ['y', 'yes', 'n', 'no'];
const WHO_GOES_FIRST = 'choose';

const prompt = message => console.log(`=> ` + message);

const chooseWhoGoesFirst = currentPlayer =>  {
  if (WHO_GOES_FIRST === 'choose') {
    console.log(TITLE.padStart((25) + (TITLE.length / 2)) + `\n`);
    let choice = readline.question(`=> Who should go first?:\n  1. Player\n  2. Computer\n`);
    while (choice !== '1' && choice !== '2') {
      prompt(`That's not a valid choice.`);
      choice = readline.question(`=> Who should go first?:\n  1. Player\n  2. Computer\n`);
    }
    choice = choice === '1' ?
      currentPlayer = 'player' : currentPlayer = 'cpu';
  }
  return currentPlayer;
};

const initialiseBoard = () => {
  const board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
};

const displayHeader = score => {
  console.clear();
  let playerMarkers = `Player = ${PLAYER_MARKER}   |   Computer = ${CPU_MARKER}`;
  let playerScores = `${score['player']}          |       ${score['cpu']}    \n`;
  console.log(TITLE.padStart((25) + (TITLE.length / 2)) + `\n`);
  console.log(playerMarkers.padStart((25) + (playerMarkers.length / 2)));
  console.log(playerScores.padStart((25) + (playerScores.length / 2)));
};

const displayBoard = (score, board) => {
  displayHeader(score);
  console.log(`     |     |`.padStart(27));
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`.padStart(30));
  console.log(`     |     |`.padStart(27));
  console.log(`-----+-----+-----`.padStart(32));
  console.log('     |     |'.padStart(27));
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`.padStart(30));
  console.log(`     |     |`.padStart(27));
  console.log(`-----+-----+-----`.padStart(32));
  console.log(`     |     |`.padStart(27));
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`.padStart(30));
  console.log(`     |     |     \n`.padStart(33));
};

const emptySquares = board => Object.keys(board)
  .filter(key => board[key] === INITIAL_MARKER);

const boardFull = board => emptySquares(board).length === 0;

const detectWinner = board => {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return `Player`;
    } else if (
      board[sq1] === CPU_MARKER &&
      board[sq2] === CPU_MARKER &&
      board[sq3] === CPU_MARKER
    ) {
      return `Computer`;
    }
  }
  return null;
};

const someoneWon = board => !!detectWinner(board);

const joinOr = (array, delimiter = ', ', word = 'or') => {
  let joined = [];
  for (let index = 0; index < array.length - 1; index++) {
    joined = array.length <= 2 ?
      joined += array[index] + ' ' :
      joined += array[index] + delimiter;
  }
  joined = array.length === 1 ?
    array[0] : joined += word + ' ' + array[array.length - 1];
  return joined;
};

const playerChoosesSquare = board => {
  let square;
  emptySquares(board);

  while (true) {
    if (boardFull(board) || someoneWon(board)) break;
    square = readline.question(prompt(`Choose a square (${joinOr(emptySquares(board))}):`)).trim();
    if (emptySquares(board).includes(square)) break;
    prompt(`Sorry, that's not a valid choice.`);
  }
  board[square] = PLAYER_MARKER;
};

const alternatePlayer = currentPlayer => {
  currentPlayer = currentPlayer === 'player' ?
    currentPlayer = 'cpu' : currentPlayer = 'player';
  return currentPlayer;
};

const findAtRiskSquare = (line, board, marker) => {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
};

const attackingStrategy = (square, board) => {
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, CPU_MARKER);
      if (square) break;
    }
  }
  return square;
};

const defensiveStrategy = (square, board) => {
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, PLAYER_MARKER);
      if (square) break;
    }
  }
  return square;
};

const randomSquare = (square, board) => {
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  return square;
};

const computerChoosesSquare = board => {
  if (!someoneWon(board)) {
    let square;
    square = attackingStrategy(square, board);
    square = defensiveStrategy(square, board);

    if (!square && board[5] === INITIAL_MARKER) {
      square = 5;
    }

    square = randomSquare(square, board);
    board[square] = CPU_MARKER;
  }
};

const chooseSquare = (board, currentPlayer) => {
  currentPlayer = currentPlayer === 'player' ?
    playerChoosesSquare(board) :  computerChoosesSquare(board);
  return alternatePlayer(currentPlayer);
};

const keepScore = (score, board) => {
  if (detectWinner(board) === `Player`) {
    score['player']++;
  } else if (detectWinner(board) === `Computer`) {
    score['cpu']++;
  }
  return score;
};

const isMatchOver = score =>
  score['player'] === GAMES_TO_WIN || score['cpu'] === GAMES_TO_WIN;

const displayChampion = score => {
  if (isMatchOver(score)) {
    score = score['player'] === GAMES_TO_WIN ?
      prompt(`You are the overall winner!`) :
      prompt(`You lost the overall game to the computer!`);
  }
};

const playAnotherMatch = (score, playingMatch, playingGame) => {
  if (isMatchOver(score) || playingGame === false) {
    let playAgain = readline.question(
      prompt(`Would you like to play another match? (y/n)`)).toLowerCase();
    while (!VALID_CHOICES.includes(playAgain)) {
      prompt(`That is not a valid choice. Please enter (y/n).`);
      playAgain = readline.question(prompt(`Would you like to play another match? (y/n):`)).toLowerCase();
    }
    playingMatch = !(playAgain === 'n' || playAgain === 'no');
  }
  return playingMatch;
};

const playNextRound = (score, playingGame) => {
  if (!isMatchOver(score)) {
    let answer = readline.question(
      prompt(`Press enter to play the next round, or 'q' to quit.`)).toLowerCase()[0];
    playingGame = answer !== `q`;
  }
  return playingGame;
};

let playingMatch = true;
let score;

//+ Program Loop
while (playingMatch) {

  console.clear();
  let playingGame = true;
  let board = initialiseBoard();
  let chosenFirst = chooseWhoGoesFirst();
  score = { player: 0, cpu: 0};

  //+ Match Loop
  while (playingGame) {
    board = initialiseBoard();
    let currentPlayer = chosenFirst;

    //+ Game Loop
    while (true) {
      displayBoard(score, board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    if (someoneWon(board)) {
      keepScore(score, board);
      displayBoard(score, board);
      prompt(`${detectWinner(board)} won!`);
    } else {
      displayBoard(score, board);
      prompt(`It's a tie!`);
    }
    displayChampion(score, playingMatch);
    if (isMatchOver(score)) break;
    playingGame = playNextRound(score, playingGame);
  }
  playingMatch = playAnotherMatch(score, playingMatch, playingGame);
}