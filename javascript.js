
//This function randomly selects rock paper or scissor as the computer
function computerPlay()
{
    let result = (Math.floor(Math.random() * 3));

    if (result === 0)
    {
        result = "rock"
    }
    else if (result === 1)
    {
        result = "paper"
    }
    else
    {
        result = "scissor"
    }
    return result;
    
}

//store playscore for final tally
let playerscore = 0
let cpuscore = 0

//This plays a single round of rock paper scissor
function playRound()
{
   
    let playerwin = 0
    let cpuwin = 0

    playerSelection = prompt("rock paper or scissor?").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection)
    {
        console.log("This is a draw! Nobody gets points")
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        console.log("You lose! rock loses to paper")
        cpuwin = cpuwin + 1
        
    }
    else if (playerSelection === "rock" && computerSelection === "scissor")
    {
        console.log("You win! rock beats scissor!")
        playerwin = playerwin + 1
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        console.log("You win! paper beats rock!")
        playerwin = playerwin + 1
        
    }
    else if (playerSelection === "paper" && computerSelection === "scissor")
    {
        console.log("You lose! paper loses to scissors!")
        cpuwin = cpuwin + 1
        
    }
    else if (playerSelection === "scissor" && computerSelection === "rock")
    {
        console.log("You lose! scissor loses to rock!")
        cpuwin = cpuwin + 1        
    }
    else if (playerSelection === "scissor" && computerSelection === "paper")
    {
        console.log("You win! scissor beats paper!")
        playerwin = playerwin + 1
    }
    
    //player who wins get +1 points into their score
    if(playerwin > cpuwin)
    {
        playerscore++
        console.log("one point to player")
    }
    else if (playerwin < cpuwin)
    {
        cpuscore++
        console.log("one point to cpu")
    }
    
}



//function loops playround 5 times, storing points into playscore or cpuscore
function game()
{   
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (playerscore > cpuscore)
    {
        console.log("You have won! " + playerscore + " points!")
    }
    else if (playerscore < cpuscore)
    {
        console.log("The CPU has won " + cpuscore + " points!")
    }
    else
    {
        console.log("This is a draw")
    }
    
}

game()






