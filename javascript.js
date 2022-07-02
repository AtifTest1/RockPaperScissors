//store playscore for final tally
let playerscore = 0
let cpuscore = 0

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


//This plays a single round of rock paper scissor
function playRound(playerSelection, computerSelection)
{

    let winner = "";

    if (playerSelection === computerSelection)
    {
        console.log("This is a draw! Nobody gets points")
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        console.log("You lose! rock loses to paper")
        winner = "CPU"
        
    }
    else if (playerSelection === "rock" && computerSelection === "scissor")
    {
        console.log("You win! rock beats scissor!")
        winner = "Player"
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        console.log("You win! paper beats rock!")
        winner = "Player"
        
    }
    else if (playerSelection === "paper" && computerSelection === "scissor")
    {
        console.log("You lose! paper loses to scissors!")
        winner = "CPU"
        
    }
    else if (playerSelection === "scissor" && computerSelection === "rock")
    {
        console.log("You lose! scissor loses to rock!")
        winner = "CPU"     
    }
    else if (playerSelection === "scissor" && computerSelection === "paper")
    {
        console.log("You win! scissor beats paper!")
        winner = "Player"
    }
    return winner;
}



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

game()






