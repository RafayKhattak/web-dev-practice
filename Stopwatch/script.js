// Variable declarations
let sec = 0;
let millisec = 0;

// DOM element references
const displaySec = document.getElementById("seconds");
const displayMillisec = document.getElementById("milliseconds");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let myInterval; // Variable to hold the interval ID

// Timer function
const timer = () => {
  millisec++;

  if (millisec <= 9) {
    displayMillisec.innerHTML = `0${millisec}`;
  } else {
    displayMillisec.innerHTML = millisec;
  }

  if (millisec > 99) {
    sec++;
    displaySec.innerHTML = sec < 10 ? `0${sec}` : sec;
    millisec = 0;
    displayMillisec.innerHTML = `0${millisec}`;
  }
};

// Start button click event
startBtn.onclick = () => {
  clearInterval(myInterval);
  myInterval = setInterval(timer, 10);
};

// Stop button click event
stopBtn.onclick = () => {
  clearInterval(myInterval);
};

// Reset button click event
resetBtn.onclick = () => {
  clearInterval(myInterval);
  sec = 0;
  millisec = 0;
  displaySec.innerHTML = `0${sec}`;
  displayMillisec.innerHTML = `0${millisec}`;
};
