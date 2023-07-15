// ================== Homework #29 ==================

function generateList(array) {
  const ul = document.createElement("ul");
  array.forEach((elem) => {
    if (elem.length > 0) {
      const li = document.createElement("li");
      ul.insertAdjacentElement("beforeend", li);
      const nestedList = document.createElement("ul");
      li.insertAdjacentElement("beforeend", nestedList);
      for (let i = 0; i < elem.length; i++) {
        nestedList.insertAdjacentHTML("beforeend", `<li>1.${elem[i]}</li>`);
      }
    } else {
      ul.insertAdjacentHTML("beforeend", `<li>${elem}</li>`);
    }
  });

  return ul;
}

const arr = [1, 2, [1, 2, 3], 3];

console.log(generateList(arr));
