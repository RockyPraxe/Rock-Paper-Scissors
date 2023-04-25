/**  Caching DOM elements
 *We use underline_Div or _Span in the variables name(instead of camelCaseing) for easy navigation 
 */

let playerScore = 0;
let skynetScore = 0;
let playerScore_span = document.getElementById("player-score");
let skynetScore_span = document.getElementById("skynet-score");
let scoreBord_div = document.querySelector("score-bord");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
let playerClick_div = document.querySelector(".player-click > p");
let skynetClick_div = document.querySelector(".skynet-click > p");


/**  Add some event listeners with click event for calling function
 *   We need click the choice , after that compare the choice with computer's choice
 *  Compare this two and give the result back
 */


function getSkynetPick() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

// Win, lose or draw game function with incrementing score

function win(userPick, skynetChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    skynetScore_span.innerHTML = skynetScore;
    playerClick_div.innerHTML = userPick;
    skynetClick_div.innerHTML = skynetChoice;
    result_p.innerHTML = `${userPick} beats ${skynetChoice} , you win !🔥`
}

function lose(userPick, skynetChoice) {
    skynetScore++;
    playerScore_span.innerHTML = playerScore;
    skynetScore_span.innerHTML = skynetScore;
    playerClick_div.innerHTML = userPick;
    skynetClick_div.innerHTML = skynetChoice;
    result_p.innerHTML = `${userPick} lose to ${skynetChoice}, you lost !👎`
}

function draw(userPick, skynetChoice) {
    playerScore_span.innerHTML = playerScore;
    skynetScore_span.innerHTML = skynetScore;
    playerClick_div.innerHTML = userPick;
    skynetClick_div.innerHTML = skynetChoice;
    result_p.innerHTML = `${userPick} equals ${skynetChoice}, i'ts a draw !👐"`
}

// define main game function

function game(userPick) {
    let skynetChoice = getSkynetPick();
    switch (userPick + skynetChoice) { //we use switch instead of if for more readable code and less coding
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userPick, skynetChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userPick, skynetChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userPick, skynetChoice);
            break;

    }

}

function main() {
    rock_div.addEventListener("click", function () {
        game("rock");
    })

    paper_div.addEventListener("click", function () {
        game("paper");
    })

    scissors_div.addEventListener("click", function () {
        game("scissors");
    })
}

main();

//* Add confirm alert if you click rules

function rules() {
    let result = confirm("Did you read the rules?");
    if (result == false) {
        event.preventDefault();
    }
}