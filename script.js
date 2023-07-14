// ================== Homework #27 ==================

import { productsData } from "./data.js";

const blockCategory = document.querySelector(".category");

function createFilter(array) {
  for (let i = 0; i < array.length; i++) {
    blockCategory.insertAdjacentHTML(
      "beforeend",
      `
        <form>
          <label>
            <input class="checkbox" value="${array[i]}" type="checkbox" />
            ${array[i]}
          </label>
        </form>
        `
    );
  }
  blockCategory.insertAdjacentHTML(
    "beforeend",
    `<button class="filter-btn">Apply</button>`
  );
}

const categories = ["Shoes", "Clothes", "Food", "Technique"];
createFilter(categories);

const blockProducts = document.querySelector(".products");

function generateProducts(array, filters) {
  blockProducts.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    filters.forEach((categ) => {
      if (categ === array[i].category) {
        blockProducts.insertAdjacentHTML(
          "beforeend",
          `
    <div class="card">
          <div id="${array[i].id}" class="cover"></div>
          <img class="card__img" src="./images/${array[i].img}" />
          <div class="params">
            <h3 class="params__title">${array[i].title}</h3>
            <p class="params__price">${array[i].price}</p>
          </div>
        </div>
    `
        );
      }
    });
  }
}

const aboutProduct = document.querySelector(".aboutProduct");

blockProducts.addEventListener("click", (e) => {
  aboutProduct.classList.add("active-about");
  productsData.forEach((elem) => {
    if (elem.id === +e.target.id) {
      aboutProduct.insertAdjacentHTML(
        "beforeend",
        `
      <span class="close">X</span>
      <img src="./images/${elem.img}" class="about__img" />
        <div class="about__block">
          <h4 class="about__title">${elem.description}</h4>
          <div class="about__descr">
            <div class="descr__price">
              <p class="text">price:</p>
              <h4 class="price">${elem.price}</h4>
            </div>
            <div class="descr__from">
              <p class="text">country:</p>
              <h4 class="country">${elem.country}</h4>
            </div>
          </div>
          <button class="buy">Buy</button>
        </div>
      `
      );
    }
  });
});

const popup = document.querySelector(".popup");

aboutProduct.addEventListener("click", (e) => {
  if (e.target.nodeName === "SPAN") {
    aboutProduct.classList.remove("active-about");
    aboutProduct.innerHTML = "";
  }
  if (e.target.nodeName === "BUTTON") {
    document.body.style.overflow = "hidden";
    popup.style.display = "flex";
  }
});

const checkboxes = document.querySelectorAll(".checkbox");

popup.addEventListener("click", (e) => {
  if (e.target.classList.value === "popup") {
    document.body.style.overflow = "auto";
    popup.style.display = "none";
    aboutProduct.classList.remove("active-about");
    aboutProduct.innerHTML = "";
    checkboxes.forEach((elem) => {
      elem.checked = false;
    });
    generateProducts(productsData, []);
  }
});

const openFilter = document.querySelector(".filter-btn");

openFilter.addEventListener("click", () => {
  let categoryArray = [];
  checkboxes.forEach((elem) => {
    if (elem.checked) {
      categoryArray.push(elem.value);
    }
  });
  if (categoryArray.length === 0) {
    categoryArray = categories;
  }
  generateProducts(productsData, categoryArray);
});
