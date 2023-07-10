// ================== Homework #23 ==================

function generationRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
];

const img = document.createElement("img");
const btn = document.querySelector(".btn");

img.width = 900;
img.height = 600;
img.src = images[generationRandomInt(5)];

btn.before(img);

btn.addEventListener("click", () => {
  img.src = images[generationRandomInt(5)];
});
