const time_show = document.getElementById("time-show");
const btn_start = document.getElementById("btn-start");
const btn_stop = document.getElementById("btn-stop");
const btn_reset = document.getElementById("btn-reset");

let intervalId = null;
let isWorking = false;

function updateTime() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  time_show.innerHTML = `${hours}:${minutes}:${seconds}`;
}

updateTime();

// Start button
btn_start.addEventListener("click", () => {
  if (!isWorking) {
    intervalId = setInterval(updateTime, 1000);
    isWorking = true;
  }
});

btn_stop.addEventListener("click", () => {
  clearInterval(intervalId);
  isWorking = false;
});

btn_reset.addEventListener("click", () => {
  clearInterval(intervalId);
  isWorking = false;
  time_show.innerHTML = "00:00:00";
});
