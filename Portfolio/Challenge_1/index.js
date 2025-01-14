//dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource);

//dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "That's a Draw!";
}
