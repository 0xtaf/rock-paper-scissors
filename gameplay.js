let playerWins = 0;
let computerWins = 0;
let roundPlayed = 0;


const button1 = document.querySelector('button[id="1"]');
const button2 = document.querySelector('button[id="2"]');
const button3 = document.querySelector('button[id="3"]');
const button4 = document.querySelector('button[id="4"]');
const chosen = document.querySelector('#playerChoice');
const chosenCpu = document.querySelector('#computerChoice');
const result = document.querySelector('#gameresult');
const score1 = document.querySelector('.opponent1-scoreboard');
const score2 = document.querySelector('.opponent2-scoreboard');
let playerSelectedImg = null;
button4.style.visibility = 'hidden';


button1.addEventListener('click', (e) =>{
  let playerSelected = "Rock";
    
  playerSelectedImg = document.querySelector('.opponent1-imgClass1');
  playerSelectedImg.classList.toggle("opponent1-img1", false);
  playerSelectedImg.classList.toggle("opponent1-img2", false);
  playerSelectedImg.classList.toggle("opponent1-img3", false);
  playerSelectedImg.classList.toggle("opponent1-img1", true);   
  computerPlayIcon();
  playRound(playerSelected,computerSelected);  
  score1.textContent =`${playerWins}`;
  score2.textContent =`${computerWins}`; 
  
  checkForRoundNumber();
});


button2.addEventListener('click', (e) =>{
  let playerSelected = "Paper";
  playerSelectedImg = document.querySelector('.opponent1-imgClass1');  
  playerSelectedImg.classList.toggle("opponent1-img1", false);
  playerSelectedImg.classList.toggle("opponent1-img2", false);
  playerSelectedImg.classList.toggle("opponent1-img3", false);
  playerSelectedImg.classList.toggle("opponent1-img2", true);  

  computerPlayIcon();
  playRound(playerSelected,computerSelected);  
  score1.textContent =`${playerWins}`;
  score2.textContent =`${computerWins}`;  
   
  checkForRoundNumber();
});


button3.addEventListener('click', (e) =>{
  let playerSelected = "Scissors";
  playerSelectedImg = document.querySelector('.opponent1-imgClass1');
  playerSelectedImg.classList.toggle("opponent1-img1", false);
  playerSelectedImg.classList.toggle("opponent1-img2", false);
  playerSelectedImg.classList.toggle("opponent1-img3", false);
  playerSelectedImg.classList.toggle("opponent1-img3", true);
  computerPlayIcon();
  playRound(playerSelected,computerSelected);    
  score1.textContent =`${playerWins}`;
  score2.textContent =`${computerWins}`; 
  
  checkForRoundNumber();
});

button4.addEventListener('click', ()=>{
  playerWins = 0;
  computerWins = 0;
  roundPlayed = 0;
  score1.textContent ="";
  score2.textContent =""; 
  result.textContent ="";
  computerSelectedImg.classList.toggle("opponent2-img1", false);
  computerSelectedImg.classList.toggle("opponent2-img2", false);
  computerSelectedImg.classList.toggle("opponent2-img3", false);
  playerSelectedImg.classList.toggle("opponent1-img1", false);
  playerSelectedImg.classList.toggle("opponent1-img2", false);
  playerSelectedImg.classList.toggle("opponent1-img3", false);

});

function computerPlay(){
  let choices = ["Rock", "Paper", "Scissors"];
  let the_choice = choices[Math.floor(Math.random()*choices.length)];
  return the_choice;
}
function computerPlayIcon() {
  window.computerSelected = computerPlay();
  window.computerSelectedImg = document.querySelector('.opponent2-imgClass1');
  if (computerSelected == "Rock") {
    computerSelectedImg.classList.toggle("opponent2-img1", false);
    computerSelectedImg.classList.toggle("opponent2-img2", false);
    computerSelectedImg.classList.toggle("opponent2-img3", false);
    computerSelectedImg.classList.toggle("opponent2-img1", true);
  } else if (computerSelected == "Paper") {
    computerSelectedImg.classList.toggle("opponent2-img1", false);
    computerSelectedImg.classList.toggle("opponent2-img2", false);
    computerSelectedImg.classList.toggle("opponent2-img3", false);
    computerSelectedImg.classList.toggle("opponent2-img2", true);
  } else if (computerSelected == "Scissors") {
    computerSelectedImg.classList.toggle("opponent2-img1", false);
    computerSelectedImg.classList.toggle("opponent2-img2", false);
    computerSelectedImg.classList.toggle("opponent2-img3", false);
    computerSelectedImg.classList.toggle("opponent2-img3", true);
  }
}

function checkForRoundNumber() {
    
    if (roundPlayed == 5){
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;       
        button4.style.visibility = 'visible';
        
        if (playerWins > computerWins) {
            result.textContent = "Congratulations! You beat the game!";
        } else {
            result.textContent = "HAHAHA! The computer beat you up!";
        }
        
        

        button4.addEventListener('click', ()=>{
            roundPlayed = 0;
            button1.disabled = false;
            button2.disabled = false;
            button3.disabled = false;
            button4.style.visibility = 'hidden';
            chosen.textContent = "";
            chosenCpu.textContent = "";
            result.textContent = "";
            playerWins = 0;
            computerWins = 0;
            roundPlayed = 0;
        });

    }
}



function playRound(playerSelection, computerSelection){  
          
  if ((playerSelection == "Rock") && (computerSelection == "Scissors")){
    playerWins++;
    roundPlayed++;
    result.textContent = "You won the round!";
  } else if ((playerSelection == "Paper") && (computerSelection == "Rock")){
    playerWins++;
    roundPlayed++;
    result.textContent = "You won the round!";
  } else if ((playerSelection == "Scissors") && (computerSelection == "Paper")){
    playerWins++;
    roundPlayed++;
    result.textContent = "You won the round!";
  } else if (playerSelection == computerSelection) {
    result.textContent = "It's a draw!";
  } else {
    computerWins++;
    roundPlayed++;
    result.textContent = "You lost the round!";
  }
}

