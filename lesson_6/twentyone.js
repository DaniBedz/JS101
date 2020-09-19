const readline = require('readline-sync');
const SUITS = ['\u2665', '\u2666', '\u2660', '\u2663'];
const VALUES =
  ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const PICTURE_CARDS = ['A', 'K', 'Q', 'J'];
const BLACKJACK = 21;
const DEALER_LIMIT = 17;
const VALID_CHOICES = ['h', 'hit', 's', 'stick'];

const shuffle = deck => {
  for (let first = deck.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [deck[first], deck[second]] = [deck[second], deck[first]];
  }
  return deck;
};

const initalizeDeck = () => {
  let deck = [];
  for (let valueIndex of VALUES) {
    let value = valueIndex;
    for (let suitIndex of SUITS) {
      let suit = suitIndex;
      deck.push([suit, value]);
    }
  }
  return shuffle(deck);
};

const isPictureCard = cardValue => PICTURE_CARDS.includes(cardValue);

const useAcesWisely = (isAce, value) => {
  while (value > BLACKJACK && isAce !== 0) {
    value -= 10;
    isAce -= 1;
  }
  return value;
};

const calculateTotalValue = playerCards => {
  let value = 0;
  let isAce = 0;
  for (const card of playerCards) {
    if (card[1] === " ") {
      value += 0;
    } else if (card[1] === "A")  {
      isAce++;
      value += 11;
    } else if (isPictureCard(card[1])) {
      value += 10;
    } else {
      value += Number(card[1]);
    }
  }
  value = useAcesWisely(isAce, value);
  return value;
};

const printCard = (cardLine1, cardLine2, cardLine3, cardLine4) => {
  console.log(cardLine1);
  console.log(cardLine2);
  console.log(cardLine3);
  console.log(cardLine3);
  console.log(cardLine4);
  console.log(cardLine1 + `\n\n`);
};

const cardImageGenerator = cards => {
  let cardLine1 = ``,
    cardLine2 = ``,
    cardLine3 = ``,
    cardLine4 = ``;
  for (const card of cards) {
    let suit = card[0];
    let value = card[1];
    cardLine1 += ` ------   `;
    cardLine2 = value === '10' ? cardLine2 += `| ${suit}  ${value}|  ` :
      cardLine2 += `| ${suit}  ${value} |  `;
    cardLine3 += `|      |  `;
    cardLine4 = value === '10' ? cardLine4 += `|${value}  ${suit} |  ` :
      cardLine4 += `| ${value}  ${suit} |  `;
  }
  printCard(cardLine1, cardLine2, cardLine3, cardLine4);
};

const drawScreen = (
  playerCards, dealerCards, playerValueTotal, dealerValueTotal) => {
  console.clear();
  let title = `  | Twenty One |  `;
  let padding = (50 - (title.length / 2));
  console.log(` ______________  `.padStart(padding));
  console.log(title.padStart(padding));
  console.log(`------------------------------------------------------------------\n`);
  console.log(`Player Card Value: ${playerValueTotal}`.padStart(65));
  cardImageGenerator(playerCards);

  console.log(`Dealer Card Value: ${dealerValueTotal}`.padStart(65));
  cardImageGenerator(dealerCards);
};

const takeTurn = (choice, playerCards, deck) => {
  if (choice === 'h' || choice === 'hit') {
    playerCards.push(deck.shift());
  }
  return playerCards;
};

const isStick = choice => choice === 's' || choice === 'stick';
const isBlackJack = playerValueTotal => playerValueTotal === BLACKJACK;

const getPlayerMove = (
  playerCards, dealerCards, playerValueTotal, dealerValueTotal) => {
  let choice = readline.question(`  [H]it    [S]tick\n\n`).toLowerCase();
  while (!VALID_CHOICES.includes(choice)) {
    console.clear();
    drawScreen(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    console.log(`That is not a valid choice - please enter 'h' or 's':\n`);
    choice = readline.question(`  [H]it    [S]tick\n\n`).toLowerCase();
  }
  return choice;
};

const displayWinner = winner => {
  if (winner === 'player') {
    console.log(`You win!\n\n`);
  } else if (winner === 'computer') {
    console.log(`You lose!\n\n`);
  } else {
    console.log(`The game was a draw!\n\n`);
  }
};

const determineWinner = (
  playerValueTotal, dealerValueTotal, dealerBust) => {
  let result;
  if ((dealerBust || playerValueTotal > dealerValueTotal) &&
       playerValueTotal <= BLACKJACK) {
    result = 'player';
  } else if (playerValueTotal === dealerValueTotal) {
    result = 'draw';
  } else {
    result = 'computer';
  }
  return result;
};

const isDealerBust = dealerValueTotal => {
  if (dealerValueTotal > BLACKJACK) {
    console.log(`The dealer bust!`);
    return true;
  } else {
    return false;
  }
};

const isPlayAgain = programRunning => {
  let again = readline.question(`Press Enter to play again, or 'q' to quit.\n\n`).toLowerCase();
  if (again === 'q' || again === 'quit') {
    programRunning = false;
  }
  return programRunning;
};


//+ Program Loop
let programRunning = true;
while (programRunning) {
  let deck = initalizeDeck();
  let playerBust = false;
  let dealerBust = false;
  let stick = false;

  let playerCards = deck.splice(0, 2);
  let dealerCards = deck.splice(0, 1);
  dealerCards[1] = [' ', ' '];

  let playerValueTotal = calculateTotalValue(playerCards);
  let dealerValueTotal = calculateTotalValue(dealerCards);

  //+ Player Turn Loop
  while (playerBust === false && stick === false) {
    drawScreen(playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    if (isBlackJack(playerValueTotal)) {
      break;
    }
    let choice = getPlayerMove(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    stick = isStick(choice);

    playerCards = takeTurn(choice, playerCards, deck);
    playerValueTotal = calculateTotalValue(playerCards);
    drawScreen(playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    if (playerValueTotal > BLACKJACK) {
      console.log(`Oh no, you bust!`);
      playerBust = true;
    }
  }

  //+ Computer Turn Loop
  if (playerBust === false) {
    readline.question(`Press Enter to reveal the dealer's card.\n`);
    dealerCards[1] = deck.shift();
    dealerValueTotal = calculateTotalValue(dealerCards);
    drawScreen(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    while (dealerBust === false && dealerValueTotal < DEALER_LIMIT) {
      readline.question(`Press Enter to draw the dealer's card.\n`);
      dealerCards.push(deck.shift());
      dealerValueTotal = calculateTotalValue(dealerCards);
      drawScreen(
        playerCards, dealerCards, playerValueTotal, dealerValueTotal);
      dealerBust = isDealerBust(dealerValueTotal);
    }
  }
  let winner = determineWinner(playerValueTotal, dealerValueTotal, dealerBust);
  displayWinner(winner);
  programRunning = isPlayAgain(programRunning);
}