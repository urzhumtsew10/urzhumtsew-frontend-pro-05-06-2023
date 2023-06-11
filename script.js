// ================== Homework #10 ==================

const beforeSort = document.querySelector(".before");
const afterSort = document.querySelector(".after");
const afterDelete = document.querySelector(".after_delete");

let number = prompt("Enter the length of the array");

while (number === null || number.trim() === "" || isNaN(number)) {
  number = prompt("Enter the length of the array(ONLY NUMBER)");
}
const lengthArr = Number(number);

let arr = [];

for (let i = 0; i < lengthArr; i++) {
  let elem = prompt(`Enter the arr[${i}] element`);
  while (elem === null || elem.trim() === "" || isNaN(elem)) {
    elem = prompt(`Enter the arr[${i}] element`);
  }
  arr.push(Number(elem));
}

let html = `<p>${arr}</p>`;
beforeSort.insertAdjacentHTML("afterend", html);

for (let i = 0; i < lengthArr; i++) {
  for (let j = 0; j < lengthArr - 1; j++) {
    if (arr[i] < arr[j]) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}

html = `<p>${arr}</p>`;
afterSort.insertAdjacentHTML("afterend", html);

arr.splice(1, 3);

html = `<p>${arr}</p>`;
afterDelete.insertAdjacentHTML("afterend", html);
