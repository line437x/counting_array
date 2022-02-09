"use strict";

let numberCount = 0;
const array = [];

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  if (numberCount < 20) {
    setTimeout(loopArray, 1000);
  }
}

function loopArray() {
  if (numberCount < 9) {
    array.unshift(numberCount);
    numberCount++;
    console.log(array);
  } else {
    array.unshift(numberCount);
    array.length = 9;
    numberCount++;
    console.log(array);
  }
  setup();
}
