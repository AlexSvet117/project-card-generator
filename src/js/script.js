// Add your code here

// Array of card's numbers and letters
const lettersNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]

// Array of emojis
const emojis = ["♥", "♦", "♠", "♣"]

// function randomIndex(array) {
//     return array[Math.floor(Math.random() * array.length)]
// }

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

const nameElement = document.querySelector('.card-top');
const emojiElement = document.querySelector('.card-emoji');
const powerElement = document.querySelector('.card-bottom');

let element = randomElement(lettersNumbers);

nameElement.innerText = element;
emojiElement.innerText = randomElement(emojis);
powerElement.innerText = element;


// Function that shuffles the cards
function shuffleCards() {

// let randomPipCards = randomElement(lettersNumbers)
// let randomTrates = randomElement(emojis)

// const topElement = document.findElementby('.card-top')
// const centerElement = document.querySelector('.card-emoji')
// const bottomElement = document.querySelector('.card-bottom')

// topElement.innerText = randomElement(lettersNumbers)
// bottomElement.innerText = randomElement(lettersNumbers)
// centerElement.innerText = randomElement(emojis)
// if (randomTrates === "♥" || "♦") {
//     centerElement.style.color = 'red'
// }

const nameElement = document.querySelector('.card-top')
const emojiElement = document.querySelector('.card-emoji')
const powerElement = document.querySelector('.card-bottom')

let cardPips = randomElement(lettersNumbers)
let cardEmoji = randomElement(emojis)

nameElement.innerText = cardPips
emojiElement.innerText = cardEmoji
powerElement.innerText = cardPips
if (cardEmoji === "♥" || "♦") {
        emojiElement.style.color = 'red'
    }
}