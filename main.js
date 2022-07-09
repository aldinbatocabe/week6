class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {
        let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        let shuffles = this.cards;
        let i = shuffles.length, random, temp;
        while (--i > 0) {
            random = Math.floor(Math.random() * (i+1));
            temp = shuffles[random];
            shuffles[random] = shuffles[i]
            shuffles[i]=temp;
        }
    }

    dealOneCard() {
        for(let i = 0; i < 52; i+=2) {
            let dealsOne = this.cards.pop()
            firstPlayer.pCards.push(dealsOne)
            let dealsTwo = this.cards.pop()
            secondPlayer.pCards.push(dealsTwo)
        }
    }
}

class Player {
    constructor ( pName, pCards, pPoints ) {
        this.pName = pName;
        this.pCards = [];
        this.pPoints = 0;
    }
}

let firstPlayer = new Player ('First Player');
let secondPlayer = new Player ('Second Player');

class Game {
    constructor() {
        this.currentPlayers = [];
    }

    startGame() {
        this.currentPlayers.push(firstPlayer);
        this.currentPlayers.push(secondPlayer);
        newDeck.createDeck();
        newDeck.shuffleDeck();
        console.log(newDeck.cards);
        newDeck.dealOneCard();
        this.rounds();
        this.scoring();
    }

    rounds() {
        for (let i = 0; i < 26; i++) {
            let turn1 = firstPlayer.pCards.pop();
            let turn2 = secondPlayer.pCards.pop();
            console.log(`Round ${i + 1}: ${firstPlayer.pName} has ${turn1.rank} of ${turn1.suit}. ${secondPlayer.pName} has ${turn2.rank} of ${turn2.suit}`);
                if (turn1.value > turn2.value) {
                    firstPlayer.pPoints += 1;
                    secondPlayer.pPoints == 0;
                    console.log(`${firstPlayer.pName} wins round ${i + 1}`);
                } else if (turn1.value < turn2.value) {
                    firstPlayer.pPoints == 0;
                    secondPlayer.pPoints += 1;
                    console.log(`${secondPlayer.pName} wins round ${i+ 1}`);
                } else if (turn1.value == turn2.value) {
                    firstPlayer.pPoints == 0;
                    secondPlayer.pPoints == 0;
                    console.log(`This is a tie on round ${i +1}`);
                }
        }
    }

    scoring() {
        let oneScore = firstPlayer.pPoints;
        let secondScore = secondPlayer.pPoints;
        console.log(`End score: ${firstPlayer.pName} = ${oneScore} & ${secondPlayer.pName} = ${secondScore}`);
            if (firstPlayer.pPoints > secondPlayer.pPoints) {
                console.log(`${firstPlayer.pName} wins!`);
            } else if (firstPlayer.pPoints < secondPlayer.pPoints) {
                console.log(`${secondPlayer.pName} wins!`); 
            } else { 
                console.log('This is a tie');
            }
    }
}

let newDeck = new Deck();
let newGame =  new Game();
console.log(newDeck.cards);
newGame.startGame();