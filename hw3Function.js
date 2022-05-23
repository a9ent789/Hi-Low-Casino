//Tecumseh McMullin

//these are the global variables that can be used by any function
var userScore = 0;
var remCard = 0;
var newCard = 0;

//this is the reset function used to reset the game to default
function reset(){
    userScore = 0;
    remCard = 0;
    newCard = 0;
    //changes the div wih the id "displayCard" 
    document.getElementById("displayCard").innerHTML = "Your card goes here. ";
    //changes the div with the id "displayScore"
    document.getElementById("displayScore").innerHTML = "Your score is...";
}

//this is the function when the player says that the next number is higher
function nextCardH(){
    //this changes the current number to a random number between 1 and 13
    newCard = Math.ceil(Math.random() * 13);
    //changes the div wih the id "displayCard" with the current card
    document.getElementById("displayCard").innerHTML = "Your number is " + newCard;
    //this if statement is used to increase the players score if they were right
    if (newCard > remCard){
        userScore = userScore + 1;
        document.getElementById("displayScore").innerHTML = "Your score is " + userScore;
        //This if statement is used to tell the player that they won if they reached the limit score
        if(userScore == 21){
            document.getElementById("displayCard").innerHTML = "You Have";
            document.getElementById("displayScore").innerHTML = "Won";
        }
    }
    //this if statement is used to decrease the player's score if they were wrong
    if (newCard < remCard){
        userScore = userScore - 1;

        document.getElementById("displayScore").innerHTML = "Your score is " + userScore;
        //this if statement is used to keep the score from going negative aka at 0.
        if (userScore < 0){
            userScore = 0;
            document.getElementById("displayScore").innerHTML = "Your score is " + userScore;
        }
    }
    //this allows the web page to remember the previous card so that it can be checked when the player decides higher or lower
    remCard = newCard;
}

function nextCardL(){
    newCard = Math.ceil(Math.random() * 13);
    //changes the div wih the id "displayCard" with the current card
    document.getElementById("displayCard").innerHTML = "Your number is " + newCard;
    //this if statement is used to increase the player's score if they were correct.
    if (newCard < remCard){
        userScore = userScore + 1;
        document.getElementById("displayScore").innerHTML = "Your score is " + userScore;
        //this if statement is used to tell the player that they won once they have reached the score limit
        if(userScore == 21){
            document.getElementById("displayCard").innerHTML = "You Have";
            document.getElementById("displayScore").innerHTML = "Won";
        }
    }
    //this if statement is used to decrease the players score if they were wrong
    if (newCard > remCard){
        userScore = userScore - 1;
        document.getElementById("displayScore").innerHTML = "Your score is " + userScore;
        //this if statement is used to keep the score from going negative aka at 0
        if (userScore < 0){
            userScore = 0;
            document.getElementById("displayScore").innerHTML = "Your score is " + userScore;
        }
    }
    //this allows the web page to remember the previous card so that it can be checked when the player decides higher or lower
    remCard = newCard;
}

//this function starts the game after the player has read all the rules
function play(){
    //this sets the first number as a random number between 1 and 13.
    newCard = Math.ceil(Math.random() * 13);
    //this sets the first remembered number.
    remCard = newCard;
    //sets the initial users score as 0
    userScore = 0;
    //sets of the div's with id "displayCard" and "displayScore" ready for the game.
    document.getElementById("displayCard").innerHTML = "Your number is " + newCard;
    document.getElementById("displayScore").innerHTML = "Your score is " + userScore;
}