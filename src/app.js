//if byClassName doesn't work, getElementById, then change these classes to Ids in html
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice-display')
const resultDisplay = document.getElementById('result')

//possibleChoices are all three button choices (rock, paper, scissors)
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice


//(e) is passing through the actual event and getting the target (id)
possibleChoices.forEach(choice =>choice.addEventListener('click', (e) => {

  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
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



