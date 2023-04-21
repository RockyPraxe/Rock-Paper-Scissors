/**  Caching DOM elements
 *We use underline_Div or _Span in the variables name(instead of camelCaseing) for easy navigation 
 */

let playerScore = 0;
let skynetScore = 0;
let playerScore_span = document.getElementById("player-score");
let skynetScore_span = document.getElementById("skynet-score");
let scoreBord_div = document.querySelector("score-bord");
let result_div = document.querySelector("result");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");


/**  Add some event listeners with click event for calling function
 *   We need click the choise , after that compare the choise with computer's choise
 *   Compare this two and give the result back  
*/

// define main game function

function getSkynetPick() {
    let choices = ["rock" , "paper" , "scissors"];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices [randomNumber];
}

console.log(getSkynetPick());

function game(userPick) {
    
}

function main(){
    rock_div.addEventListener("click", function(){
    game("rock");
    console.log("You clicked on rock");
    })

    paper_div.addEventListener("click", function(){
    game("paper");
    console.log("You clicked on paper");
    })

    scissors_div.addEventListener("click", function(){
    game("scissors");
    console.log("You clicked on scissors");
    })
}

main(); 