// ================== Homework #28 ==================

const sliderLine = document.querySelector(".slider-line");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");
prevBtn.style.display = "none";
let offset = 0;

nextBtn.addEventListener("click", () => {
  offset += 840;
  sliderLine.style.right = offset + "px";
  if (offset >= 3360) {
    nextBtn.style.display = "none";
  }
  if (offset > 0) {
    prevBtn.style.display = "block";
  }
});

prevBtn.addEventListener("click", () => {
  offset -= 840;
  sliderLine.style.right = offset + "px";
  if (offset === 0) {
    prevBtn.style.display = "none";
  }
  if (offset >= 0) {
    nextBtn.style.display = "block";
  }
});
