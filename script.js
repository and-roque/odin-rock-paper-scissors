
    //Randomly return 'Rock', 'Paper' or 'Scissors'
    function computerPlay(){
        let computerMove = ['rock', 'paper', 'scissors'];
        let random = Math.floor(Math.random()*computerMove.length);
        return computerMove[random];
    }

    //A round between the player and the computer
    function playRound(playerSelection, computerSelection){
        let result;
        if (playerSelection === computerSelection){
            result = 'That\'s a Tie! Great minds think alike! Are you an human?';
        } else if ((playerSelection === 'rock' && computerSelection==='scissors')
        ||(playerSelection === 'paper' && computerSelection==='rock')
        ||(playerSelection === 'scissors' && computerSelection==='paper')){
            result = "You Win! Good choice!";
        } else {
            if (playerSelection === 'rock') {
                result = 'You Lose! Paper beats Rock';
            } else if (playerSelection === 'paper') {result = 'You Lose! Scissors beats Paper';
            } else {result = 'You Lose! Rock beats Scissors';}    
        }
        return result;
    }

    // 5 Rounds Game
    function game(n){
        if (n < 5) {
            round++;
        } else {
            if (playerScore > computerScore) {
            finalResult.textContent = 'You win this game!';
            } else if (playerScore < computerScore) {
            finalResult.textContent = 'You lost this game!';
            } else {
            finalResult.textContent ='It\'s a TIE!';
            }
            playerScore =0;
            computerScore = 0;
            round = 1;
        }
    }

    function currentScore(result){
            if (result ==='You Win! Good choice!') {
                return playerScore++;
            } else if (result === 'That\'s a Tie! Great minds think alike! Are you an human?') {
            } else {return computerScore++;}
    }


    const container = document.querySelector('.container');
    const buttons = document.querySelectorAll('button');
    const content = document.createElement('p');
    content.classList.add('content');
    container.appendChild(content);


    //Divs for SCORE
    const score = document.querySelector('.score');
    const currentPlayerScore = document.createElement('p');
    currentPlayerScore.classList.add('currentPlayerScore');
    score.appendChild(currentPlayerScore);

    const currentComputerScore = document.createElement('p');
    currentComputerScore.classList.add('currentComputerScore');
    score.appendChild(currentComputerScore);

    const finalResult = document.createElement('p');
    finalResult.classList.add('finalResult');
    score.appendChild(finalResult);


    const result = document.querySelector('.result');
    let currentResult;
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    //Event Listeners
    buttons.forEach((button) => {
        button.addEventListener('click', () => {    
        let playerMove = button.id;
        let value = playerMove.toLowerCase();
        currentResult = playRound(value,computerPlay());
        content.textContent = `Round ${round}: ${currentResult}`;
        currentScore(currentResult);
        currentPlayerScore.textContent = `Player: ${playerScore}`;
        currentComputerScore.textContent = `Computer: ${computerScore}`;
        game(round);
        });
    });

//game();