// Add your code here

// Array of card's numbers and letters
const lettersNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]

// Array of emojis
const emojis = ["♥", "♦", "♠", "♣"]

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

// Function that shuffles the cards
function shuffleCards() {

const topTrait = document.querySelector('.card-top')
const emojiElement = document.querySelector('.card-emoji')
const bottomTrait = document.querySelector('.card-bottom')

let cardPips = randomElement(lettersNumbers)
let cardEmoji = randomElement(emojis)

topTrait.innerText = cardPips
emojiElement.innerText = cardEmoji
bottomTrait.innerText = cardPips
if (cardEmoji === "♠" || cardEmoji === "♣") {
        emojiElement.style.color = "black"
    } else {
        emojiElement.style.color = "red"
    }
}