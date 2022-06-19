function computerPlay()
{
    let result = (Math.floor(Math.random() * 3))

    if (result === 0)
    {
        result = "rock"
    }
    else if (result === 1)
    {
        result = "paper"
    }
    else{
        result = "scissor"
    }
    return result;
    
}

function playRound(playerSelection, computerSelection)
{
    let result

    if (playerSelection === computerSelection)
    {
        result = "This is a draw!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        result = "You lose! paper beats rock"
    }
    else if (playerSelection === "rock" && computerSelection === "scissor")
    {
        result = "You win! rock beats scissor!"
    }

    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        result = "You win! paper beats rock!"
    }
    else if (playerSelection === "paper" && computerSelection === "scissor")
    {
        result = "You lose! scissor beats paper!"
    }

    else if (playerSelection === "scissor" && computerSelection === "rock")
    {
        result = "You lose! rock beats scissor!"
    }
    else if (playerSelection === "scissor" && computerSelection === "paper")
    {
        result = "You win! scissor beats paper!"
    }
    return result
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));