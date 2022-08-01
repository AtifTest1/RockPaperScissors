//store playscore for final tally
let playerscore = 0;
let cpuscore = 0;

const playerresults = document.querySelector('#playerresults');
const playerresult = document.createElement('div');
playerresult.classList.add('playresult')

const cpuresults = document.querySelector('#cpuresults');
const cpuresult = document.createElement('div');
cpuresult.classList.add('cpuresult')


const buttons = document.querySelectorAll('button');

//each click plays one round and calculates scores until player reaches 5
function Game(){
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{

            if((playerscore != 5) && (cpuscore != 5))
            {
                play = playRound(button.id)
                if(play == 'Player')
                {
                    playerscore++
                    playerresult.textContent = playerscore;
                    playerresults.appendChild(playerresult);               
                }
                else if(play == 'CPU')
                {
                    cpuscore++
                    cpuresult.textContent = cpuscore;
                    cpuresults.appendChild(cpuresult);
                }
            }
            else
            {
                return;
            }

            if(playerscore == 5)
            {
                alert('Player wins!')
            }
            else if(cpuscore == 5)
            {
                alert('cpu wins!')
            }
        })
    })
}


Game()


//This function randomly selects rock paper or scissor as the computer
function computerPlay()
{
    let randomnum = (Math.floor(Math.random() * 3));
    let result = ''

    if (randomnum === 0)
    {
        result = "rock"
    }
    else if (randomnum === 1)
    {
        result = "paper"
    }
    else
    {
        result = "scissor"
    }
    return result;
    
}

const results = document.querySelector('#results');
const result = document.createElement('div');
result.classList.add('result')

//This plays a single round of rock paper scissor
function playRound(playerSelection)
{
    let winner = "";
    computerSelection = computerPlay()
    

    if (playerSelection === computerSelection)
    {
        result.textContent = "This is a draw! Nobody gets points"
        winner = "Draw!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        result.textContent = "You lose! rock loses to paper"
        winner = "CPU" 

    }
    else if (playerSelection === "rock" && computerSelection === "scissor")
    {
        result.textContent = "You win! rock beats scissor!"
        winner = "Player"   
   
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        result.textContent = "You win! paper beats rock!"
        winner = "Player"   
     
    }
    else if (playerSelection === "paper" && computerSelection === "scissor")
    {
        result.textContent = "You lose! paper loses to scissors!"
        winner = "CPU"   
     
    }
    else if (playerSelection === "scissor" && computerSelection === "rock")
    {
        result.textContent = "You lose! scissor loses to rock!"
        winner = "CPU"
     
    }
    else if (playerSelection === "scissor" && computerSelection === "paper")
    {
        result.textContent = "You win! scissor beats paper!"
        winner = "Player"
       
    }
    results.appendChild(result);
    return winner;
}

/*
function game()
{ 
    for (let i = 0; i < 5; i++)
    { 
        if (winner == "Player")
        {
            playerscore++
            console.log("You have won! " + playerscore + " points!")
        }
        else if (winner == "CPU")
        {
            cpuscore++
            console.log("The CPU has won " + cpuscore + " points!")
        }
        else
        {
            console.log("You both 0 points")
        }  
        
    }
}

 if(playerscore == 5)
                {
                    alert('Player wins!')
                }
                else if(cpuscore == 5)
                {
                    alert('cpu wins!')
                }

game()
*/










/*

//function loops playround 5 times, storing points into playscore or cpuscore
function game()
{   
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock Paper or Scissors?").toLowerCase();
        winner = playRound(playerSelection, computerPlay());

        if (winner == "Player")
    {
        playerscore++
        console.log("You have won! " + playerscore + " points!")
    }
    else if (winner == "CPU")
    {
        cpuscore++
        console.log("The CPU has won " + cpuscore + " points!")
    }
    else
    {
        console.log("You both 0 points")
    }

    }

    if (playerscore > cpuscore)
    {
        console.log("You Win! By " + (playerscore - cpuscore) + " Points!")
    }
    else if (cpuscore > playerscore)
    {
        console.log("You lost to a computer by " + (cpuscore - playerscore) + " Points!")
    }   
    
}
*/





