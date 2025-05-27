let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");

document.getElementById("start").addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(runTimer, 1000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
});

function runTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = 
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function format(unit) {
  return unit < 10 ? "0" + unit : unit;
}
