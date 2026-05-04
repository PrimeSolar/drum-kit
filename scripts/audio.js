/**
 * Script
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

/** Switch audio depending on a key. */
function makeSound(key) {
  /**
   * The script includes detailed comments
   * to support stakeholders with varying JS knowledge.
   */
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

/** Detect a button click. */
var buttons = document.querySelectorAll(".drum");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

/** Detect a key press. */
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
