var cardNumberH = 0;
var cardRem = 0;
var cardNumberL = 0;
var userScore = 0;
function nextCardH(){
    cardNumberH = math.ceil(math.random() * 13); 
    document.getElementById("displayCard").innerHTML = "your card is " + cardNumberH;
    if (cardRem == 0){
        cardRem = cardNumberH
    }
    if (cardNumberH > cardRem){
        userScore = userScore + 1;
        if (userScore == 21){
            document.getElementById("displayScore").innerHTML = "You Win!!!!";
        }
    }
    if (cardNumberH < cardRem){
        userScore = userScore - 1;
        if (userScore <= 0){
            userScore = 0;
        }
    }

}
function nextCardL(){
    cardNumberL = math.ceil(math.random() * 13);
    document.getElementById("displayCard").innerHTML = "Your card is " + cardNumberL;
    cardRem = cardNumberL;
    if (cardRem == 0){
        cardRem = cardNumberL;
    }
    if (cardNumberL < cardRem){
        userScore = userScore + 1;
        if (userScore == 21){
            document.getElementById("displayScore").innerHTML = "You Win!!!";
        }
    }
    if (cardNumberL > cardRem){
        userScore = userScore - 1;
        if (userScore <= 0){
            userScore = 0;
        }
    }
}
function reset(){
    cardNumberH=0;
    cardNumberL=0;
    userScore = 0;
    document.getElementById("displayCard").innerHTML = "Your card goes here.";
    document.getElementById("displayScore").innerHTML = "Your score is...";
}