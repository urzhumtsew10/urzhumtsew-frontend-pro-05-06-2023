// ================== Homework #22 ==================

const title = document.querySelector("h1");
const table = document.createElement("table");
title.after(table);

// table marking

for (let i = 0; i < 10; i++) {
  const line = document.createElement("tr");
  table.insertAdjacentElement("beforeend", line);
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");
    line.insertAdjacentElement("beforeend", cell);
  }
}

const allCell = document.querySelectorAll("td");

for (let i = 0; i < 100; i++) {
  allCell[i].innerText = i + 1;
}
