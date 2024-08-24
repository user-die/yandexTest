let players = document.querySelector(".players");
let itemWidth = document.querySelector(".player").offsetWidth + 20;
let itemsNumber = 1;

const breakpoints = {
  1: 1421,
  2: 1111,
  3: 829,
};

const itemsInPage = (players.offsetWidth / itemWidth).toFixed();
let currentItems = itemsInPage;

const count = document.querySelectorAll(".count")[0];
const count1 = document.querySelectorAll(".count")[1];

count.textContent = currentItems;
count1.textContent = currentItems;

function toRight() {
  players.scrollLeft < breakpoints[itemsInPage]
    ? players.scrollBy({ left: itemWidth, top: 0, behavior: "smooth" })
    : players.scrollTo({ left: 0, top: 0, behavior: "smooth" });

  if (currentItems + 1 === 7) currentItems = itemsInPage;
  else currentItems++;

  count.textContent = currentItems;
  count1.textContent = currentItems;
}

function toLeft() {
  players.scrollLeft != 0
    ? players.scrollBy({ left: -itemWidth, top: 0, behavior: "smooth" })
    : players.scrollTo({
        left: players.scrollWidth,
        top: 0,
        behavior: "smooth",
      });

  if (currentItems - 1 === itemsInPage - 1) currentItems = 6;
  else currentItems--;

  count.textContent = currentItems;
  count1.textContent = currentItems;
}

var stages = document.querySelector(".stages");

let activeStage = 1;
const circles = document.querySelectorAll(".circle");
circles[activeStage - 1].classList.add("activeCircle");
const btnL = document.querySelector("#about-left");
const btnR = document.querySelector("#about-right");

function toStagesRight() {
  btnL.classList.remove("btn-disable");
  stages.scrollLeft += 355;

  if (activeStage !== 5) {
    activeStage += 1;
    circles[activeStage - 1].classList.add("activeCircle");
    circles[activeStage - 2].classList.remove("activeCircle");
  }

  if (activeStage === 5) btnR.classList.add("btn-disable");
}

btnL.classList.add("btn-disable");

function toStagesLeft() {
  btnR.classList.remove("btn-disable");
  stages.scrollLeft -= 355;

  if (activeStage !== 1) {
    activeStage -= 1;
    circles[activeStage - 1].classList.add("activeCircle");
    circles[activeStage].classList.remove("activeCircle");
  }

  if (activeStage === 1) btnL.classList.add("btn-disable");
}

//window.setInterval(toRight, 4000);

document.querySelectorAll("#participants-left")[0].onclick = toLeft;
document.querySelectorAll("#participants-left")[1].onclick = toLeft;
document.querySelectorAll("#participants-right")[0].onclick = toRight;
document.querySelectorAll("#participants-right")[1].onclick = toRight;

btnL.onclick = toStagesLeft;
btnR.onclick = toStagesRight;
