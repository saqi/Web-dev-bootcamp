//code to play sound based on button clicked

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //check which button was clicked by comparing the text of the button and playing the relevant audio file

    var buttonText = this.innerHTML;

    playSound(buttonText);
    animateButton(buttonText);
  }); // end of anonymous function
} // end of for loop

//function to play sound based on letter
function playSound(letter) {
  switch (letter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonText);
  } // end of switch
} // end of playSound function

function animateButton(letter) {
  var button = document.querySelector("." + letter);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 150);
}

//code to use playSound function on keydown (key press)

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;
  playSound(keyPressed);
  animateButton(keyPressed);
  //function to play sound based on letter
}); // end of event listener for key press
