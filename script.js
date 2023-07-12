// ================== Homework #25 ==================

let firstLink = prompt("Enter first link");
if (!firstLink.includes("http") && !firstLink.includes("https")) {
  firstLink = `https://${firstLink}`;
}
let secondLink = prompt("Enter second link");
if (!secondLink.includes("http") && !secondLink.includes("https")) {
  secondLink = `https://${secondLink}`;
}

const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const blockBtn = document.querySelector("div");

blockBtn.addEventListener("click", (e) => {
  if (e.target.innerText === "First link") {
    window.open(`${firstLink}`);
  }
  if (e.target.innerText === "Second link") {
    window.open(`${secondLink}`);
  }
});
