const readline = require('readline-sync');
const SUITS = ['\u2665', '\u2666', '\u2660', '\u2663'];
const VALUES =
  ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const PICTURE_CARDS = ['A', 'K', 'Q', 'J'];
const BLACKJACK = 21;
const DEALER_LIMIT = 17;
const VALID_CHOICES = ['h', 'hit', 's', 'stick'];
const roundsWon = {
  player: 0,
  cpu: 0
};

const displayHeader = () => {
  console.clear();
  let title = `  | Twenty One |  `;
  let padding = (50 - (title.length / 2));
  console.log(` ______________  `.padStart(padding));
  console.log(title.padStart(padding));
  console.log(`------------------------------------------------------------------\n`);
};

const displayIntro = () => {
  displayHeader();
  console.log(`How to Play\n`.padStart(38));
  console.log(`The player and dealer are dealt two cards each, but the second`);
  console.log(`dealer card remains hidden until the player has finished their turn.\n`);
  console.log(`The player can either 'Hit', which deals them another card, or`);
  console.log(`'Stick', which means they are happy with their total card value`);
  console.log(`and are ready for the dealer to take their turn.\n`);
  console.log(`The dealer will continue to draw cards until they have either a value`);
  console.log(`of at least 17, or they bust (go over the value of 21).\n`);
  console.log(`The winner is the player who gets closest to 21 without going over.\n`);
  console.log(`Note: Aces can have a value of either 11 or 1, depending on what`);
  console.log(`is best for the player at that point during their turn.\n\n`);
  console.log(`Press 'h' to hit, or 's' to stick.\n\n`);
  readline.question(`>> Press enter to Start the game. <<\n`.padStart(50));
};

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

const totalHandValue = playerCards => {
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

const isBlackJack = playerValueTotal => playerValueTotal === BLACKJACK;

const drawStick = (stick, playerValueTotal) => {
  if (stick || isBlackJack(playerValueTotal)) {
    console.log(`( - Stick - )`.padStart(65));
  } else {
    console.log('');
  }
};
const displayRoundsWon = who => console.log(`Rounds Won: ${who}`.padStart(65));

const drawScreen = (
  playerCards, dealerCards, playerValueTotal, dealerValueTotal, stick) => {
  displayHeader();
  console.log(`Player Card Value: ${playerValueTotal}`.padStart(65));
  displayRoundsWon(roundsWon['player']);
  drawStick(stick, playerValueTotal);
  cardImageGenerator(playerCards);

  console.log(`Dealer Card Value: ${dealerValueTotal}`.padStart(65));
  displayRoundsWon(roundsWon['cpu']);
  cardImageGenerator(dealerCards);
};

const takeTurn = (choice, playerCards, deck) => {
  if (choice === 'h' || choice === 'hit') {
    playerCards.push(deck.shift());
  }
  return playerCards;
};

const isStick = choice => choice === 's' || choice === 'stick';


const getPlayerMove = (
  playerCards, dealerCards, playerValueTotal, dealerValueTotal) => {
  let choice = readline.question(`[H]it   or  [S]tick\n\n`.padStart(42)).toLowerCase();
  while (!VALID_CHOICES.includes(choice)) {
    drawScreen(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    console.log(`That is not a valid choice - please enter 'h' or 's':\n`);
    choice = readline.question(`  [H]it    [S]tick\n\n`).toLowerCase();
  }
  return choice;
};

const displayWinner = (winner, playerBust, dealerBust) => {
  if (winner === 'player') {
    if (dealerBust) {
      console.log(`The Dealer Bust.`);
    }
    console.log(`You win!\n`);
  } else if (winner === 'computer') {
    if (playerBust) {
      console.log(`Oh no, you bust!`);
    }
    console.log(`You lose.\n`);
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
    roundsWon.player++;
  } else if (playerValueTotal === dealerValueTotal) {
    result = 'draw';
  } else {
    result = 'computer';
    roundsWon.cpu++;
  }
  return result;
};

const isDealerBust = dealerValueTotal => {
  if (dealerValueTotal > BLACKJACK) {
    return true;
  } else {
    return false;
  }
};

const isPlayAgain = () => {
  let again = readline.question(`Press Enter to play again, or 'q' to quit.\n\n`).toLowerCase();
  return (again !== 'q' && again !== 'quit');
};


//+ Program Loop
let programRunning = true;
displayIntro();

while (programRunning) {
  let deck = initalizeDeck();
  let playerBust = false;
  let dealerBust = false;
  let stick = false;

  let playerCards = deck.splice(0, 2);
  let dealerCards = deck.splice(0, 1);
  dealerCards[1] = [' ', ' '];

  let playerValueTotal = totalHandValue(playerCards);
  let dealerValueTotal = totalHandValue(dealerCards);

  //+ Player Turn Loop
  while (!playerBust && !stick) {
    drawScreen(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    if (isBlackJack(playerValueTotal)) {
      break;
    }
    let choice = getPlayerMove(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal);
    stick = isStick(choice);

    playerCards = takeTurn(choice, playerCards, deck);
    playerValueTotal = totalHandValue(playerCards);
    if (playerValueTotal > BLACKJACK) {
      playerBust = true;
    }
    drawScreen(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal, stick);
  }

  //+ Computer Turn Loop
  if (!playerBust) {
    readline.question(`Press Enter to reveal the dealer's card.\n`);
    dealerCards[1] = deck.shift();
    dealerValueTotal = totalHandValue(dealerCards);
    drawScreen(
      playerCards, dealerCards, playerValueTotal, dealerValueTotal, stick);
    while (!dealerBust && dealerValueTotal < DEALER_LIMIT) {
      readline.question(`Press Enter to draw the dealer's card.\n`);
      dealerCards.push(deck.shift());
      dealerValueTotal = totalHandValue(dealerCards);
      drawScreen(
        playerCards, dealerCards, playerValueTotal, dealerValueTotal, stick);
      dealerBust = isDealerBust(dealerValueTotal);
    }
  }
  let winner = determineWinner(playerValueTotal, dealerValueTotal, dealerBust);
  drawScreen(
    playerCards, dealerCards, playerValueTotal, dealerValueTotal, stick);
  displayWinner(winner, playerBust, dealerBust);
  programRunning = isPlayAgain();
}