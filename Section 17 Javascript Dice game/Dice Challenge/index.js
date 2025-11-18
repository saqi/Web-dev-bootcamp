var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

var h1Text = "";

if (randomNumber1 > randomNumber2) {
  h1Text = "Player 1 wins!!";
} else if (randomNumber2 > randomNumber1) {
  h1Text = "Player 2 wins!!";
} else {
  h1Text = "It's a draw!";
}

document.getElementsByTagName("h1")[0].innerHTML = h1Text;
