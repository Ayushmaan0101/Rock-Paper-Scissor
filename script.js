// Getting Elements
const rockbtn = document.getElementById('rockbtn');
const paperbtn = document.getElementById('paperbtn');
const scissorbtn = document.getElementById('scissorbtn');
const playerimages = document.getElementById('playerimages');
const computerimages = document.getElementById('computerimages');
const playerchose = document.getElementById('playerchose');
const computerchose = document.getElementById('computerchose');
const winningtext = document.getElementById("winningtext")


// Players
let playerChoice = "";
let computerChoice = "";


// Function to get a random computer choice
function getRandomComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to show random computer choice
function randomcomputerchoice(){
  computerChoice = getRandomComputerChoice();
  computerchose.classList.remove('hidden');
  computerimages.classList.remove('hidden');
  if(computerChoice === 'rock'){
    computerimages.src = "rockimg.png";
    computerchose.textContent = "Computer chose: Rock";
  } else if (computerChoice === 'paper'){
   computerimages.src = "paperimg.png";
   computerchose.textContent = "Computer chose: Paper";
  } else if (computerChoice === 'scissors'){
    computerimages.src = "scissorimg.png";
    computerchose.textContent = "Computer chose: Scissor";
  }
  // calling checkwinner function
  checkwinner();

}


// Function to Check Winner
function checkwinner(){
  if(playerChoice === computerChoice){
    winningtext.textContent = "Its a Draw!"
  }else if(
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
    ){
      winningtext.textContent = "You Win!"
  }else{
    winningtext.textContent = "Computer Wins!"
  }
  winningtext.classList.remove('hidden')
}


// Rock button
rockbtn.addEventListener('click', function (){
  playerChoice = "rock";
  playerimages.src = "playerrock.png";
  playerimages.classList.remove('hidden');
  playerchose.classList.remove('hidden');
  playerchose.textContent = "Player chose: Rock";

  // Get a random computer choice
  randomcomputerchoice();

});


// Paper Button
paperbtn.addEventListener('click', function (){
  playerChoice = "paper";
  playerimages.src = "playerpaper.png";
  playerimages.classList.remove('hidden');
  playerchose.classList.remove('hidden');
  playerchose.textContent = "Player chose: Paper";

  // Get a random computer choice
  randomcomputerchoice();

});


// Scissor Button
scissorbtn.addEventListener('click', function (){
  playerChoice = "scissors";
  playerimages.src = "playerscissor.png";
  playerimages.classList.remove('hidden');
  playerchose.classList.remove('hidden');
  playerchose.textContent = "Player chose: Scissors";

  // Get a random computer choice
  randomcomputerchoice();

});
