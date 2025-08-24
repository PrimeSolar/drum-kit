// Switch audio depending on a key
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("assets/sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("assets/sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("assets/sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("assets/sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("assets/sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("assets/sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("assets/sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
}

// Detect a button click
var buttons = document.querySelectorAll(".drum");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detect a key press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
