// ================== Homework #22 ==================

const title = document.querySelector("h1");
const table = document.createElement("div");
title.after(table);
table.classList.add("table");

for (let i = 1; i <= 100; i++) {
  table.insertAdjacentHTML("beforeend", `<p>${i}</p>`);
}

table.style.display = "grid";
table.style.gridTemplateColumns = "repeat(10, 1fr)";
