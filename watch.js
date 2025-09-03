let [second, minuutes, hours] = [0, 0, 0];

let diplaytime = document.querySelector(".watch");
let images = document.querySelector(".images");
let timer = null;
function stopwatch() {
  second++;
  if (second == 60) {
    second = 0;
    minuutes++;
    if (minuutes == 60) {
      minuutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minuutes < 10 ? "0" + minuutes : minuutes;
  let s = second < 10 ? "0" + second : second;
  diplaytime.innerHTML = h + ":" + m + ":" + s;
}

function watchstart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
function watchstop() {
  clearInterval(timer);
  [second, minuutes, hours] = [0, 0, 0];
  diplaytime.innerHTML = "00:00:00";
}

function watchReset() {
  clearInterval(timer);
}
