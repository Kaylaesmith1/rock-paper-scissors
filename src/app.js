//if byClassName doesn't work, getElementById, then change these classes to Ids in html
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice-display')
const resultDisplay = document.getElementById('result')

//possibleChoices are all three button choices (rock, paper, scissors)
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


//(e) is passing through the actual event and getting the target (id)
possibleChoices.forEach(choice =>choice.addEventListener('click', (e) => {

  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1 //or you can use 3 bc there are 3 choices. If fire was included there would be 4 choices

if (randomNumber === 1) {
  computerChoice = 'rock'

} else if (randomNumber === 2){
  computerChoice = 'paper'

  } else if (randomNumber === 3){
computerChoice = 'scissors'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
if (computerChoice === userChoice) {
  result = 'Draw!'

} else if (computerChoice === 'rock' && userChoice === 'paper') {
  result = 'You win!'

} else if (computerChoice === 'rock' && userChoice === 'scissors') {
  result = 'Crushed by rock. You lose.'

} else if (computerChoice === 'paper' && userChoice === 'scissors') {
  result = 'Winner, winner chicken dinner!'

} else if (computerChoice === 'paper' && userChoice === 'rock') {
  result = 'Tough loss for you.'

} else if (computerChoice === 'scissors' && userChoice === 'paper') {
  result = 'Computer wins'

  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
  result = 'You are the superior being.'
}
resultDisplay.innerHTML = result
}