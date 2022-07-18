    //Rock Paper Scissors image link
    const playerOptions = {
        "rock": "img/hand-rock.png",
        "paper": "img/hand-paper.png",
        "scissors": "img/hand-scissors.png"
    }
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

    function setScore(result){
            if (result ==='You Win! Good choice!') {
                return playerScore++;
            } else if (result === 'That\'s a Tie! Great minds think alike! Are you an human?') {
            } else {return computerScore++;}
    }


    const container = document.querySelector('.container');
    const options = document.querySelectorAll('.choice');
    const content = document.createElement('p');
    content.classList.add('content');
    container.appendChild(content);
    const nextRound = document.querySelector('.nextRound');
    const againBtn = document.querySelector('#againBtn');
    const currentScore = document.querySelector('#currentScore');
    const finalResult = document.querySelector('.resultMessage');
    const result = document.querySelector('.result');
    let currentResult;
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    const playerChoice = document.querySelector('.playerMove');
    const computerChoice = document.querySelector('.computerMove');


    //Set ON/OFF PROPERTIES 
    const containerDisp = document.querySelector('.container');
    const resultDisp = document.querySelector('.result');
    resultDisp.style.display = "none";
    const finalResultDisp = document.querySelector('.finalResult'); 
    finalResultDisp.style.display = "none";
    currentScore.textContent = `${playerScore} - ${computerScore}`;

    //Event Listeners
    options.forEach((button) => {
        button.addEventListener('click', () => {    
        let playerMove = button.id;
        let value = playerMove.toLowerCase();
        let cpValue = computerPlay();
        currentResult = playRound(value,cpValue);
        setScore(currentResult);
        document.querySelector('.roundNum').textContent = `Round ${round}`;
        document.querySelector('.currentResult').textContent = currentResult;
        currentScore.textContent = `${playerScore} - ${computerScore}`;
        console.log(round); 
        playerChoice.src= playerOptions [value];
        computerChoice.src = playerOptions [cpValue];
        containerDisp.style.display = "none";
        resultDisp.style.display = "flex";
        if (round===5){
           finalResultDisp.style.display = 'flex';
           nextRound.style.display = 'none';
        } else {
            nextRound.style.display = 'flex';
            finalResultDisp.style.display = "none";
        }
        game(round); 
        });

    });

    nextRound.addEventListener('click', () =>{
        resultDisp.style.display = "none";
        containerDisp.style.display = "flex";
    });

    againBtn.addEventListener('click', () =>{
        round = 1;
        playerScore = 0;
        computerScore = 0;
        currentScore.textContent = `${playerScore} - ${computerScore}`;
        finalResultDisp.style.display = 'none';
        resultDisp.style.display = "none";
        containerDisp.style.display = "flex";
    });

    //Set Player Move
    //const playerMove = document.querySelector(".playerMove");
    
