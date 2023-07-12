// ================== Homework #24 ==================

const input = document.querySelector("input");
const block = document.querySelector("div");

input.onfocus = () => {
  block.style.display = "block";
};

input.onblur = () => {
  block.style.display = "none";
};
