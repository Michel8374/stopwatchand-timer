let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

const updateTimer = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  document.getElementById("hours").innerText = formattedHours;
  document.getElementById("minutes").innerText = formattedMinutes;
  document.getElementById("seconds").innerText = formattedSeconds;
};

document.getElementById("startButton").addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
});

document.getElementById("stopButton").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById("resetButton").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
});
