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
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
];

const img = document.createElement("img");
const btn = document.querySelector(".btn");

img.width = 900;
img.height = 600;
img.src = images[generationRandomInt(9)];

btn.before(img);

btn.addEventListener("click", () => {
  img.src = images[generationRandomInt(9)];
});
