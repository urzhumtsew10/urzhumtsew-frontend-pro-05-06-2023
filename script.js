// ================== Homework #30 ==================

import { productsData } from "./data.js";

const blockCategory = document.querySelector(".category");

function createFilter(array) {
  for (let i = 0; i < array.length; i++) {
    blockCategory.insertAdjacentHTML(
      "beforeend",
      `
        <form>
          <label class="checkbox-label">
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

generateProducts(productsData, categories);

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

aboutProduct.addEventListener("click", (e) => {
  if (e.target.nodeName === "SPAN") {
    aboutProduct.classList.remove("active-about");
    aboutProduct.innerHTML = "";
  }
  if (e.target.nodeName === "BUTTON") {
    aboutProduct.insertAdjacentHTML(
      "beforeend",
      `<p class="message">Fill out the form correctly</p>
      <form id="orderForm">
          <div class="form-container">
            <label class="form" for="full-name">Full Name</label>
            <input name="name" value="" type="text" id="full-name" />
          </div>
          <div class="form-container small">
            <div class="formBox">
              <label class="form" for="your-city">Your City</label>
              <select name="city" id="your-city">
                <option value="Odessa">Odessa</option>
                <option value="Kharkiv">Kharkiv</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
                <option value="Istanbul">Istanbul</option>
              </select>
            </div>
            <div class="formBox">
              <div class="form-container">
                <label class="form" for="counter">Quantity</label>
                <input name="quantity" value="" type="number" id="counter" />
              </div>
            </div>
          </div>
          <div class="form-container post-office">
            <label class="form" for="post-division">Post Division</label>
            <select name="post" id="post-division">
              <option value="post office number 30">
                Post office №30(Uspenskaya street)
              </option>
              <option value="post office number 59">
                Post office №59(Sergey Grecevca street)
              </option>
              <option value="post office number 129">
                Post office №129(Negenskay street)
              </option>
              <option value="post office number 61">
                Post office №61(Fountain Road 1 street)
              </option>
            </select>
          </div>
          <div class="form-container radio">
            <div class="radio-form">
              <input type="radio" name="money" value="cash" id="cash" />
              <label class="form" for="cash">Payment in Cash</label>
            </div>
            <div class="form-container radio">
              <div class="radio-form">
                <input type="radio" name="money" value="card" id="card" />
                <label class="form" for="card">Payment by Card</label>
              </div>
            </div>
          </div>
          <label id="label-comment" for="comment"
            >Your Comment(not necessarily)</label
          >
          <textarea
            id="comment"
            name="comment"
            value=""
            cols="30"
            rows="10"
          ></textarea>
          <input class="submit" type="submit" value="submit" />
        </form>`
    );
  }

  const orderForm = document.querySelector("#orderForm");
  const popup = document.querySelector(".popup");

  const getFormData = () => {
    const formData = new FormData(document.querySelector("#orderForm"));
    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    const message = document.querySelector(".message");
    const popupContent = document.querySelector(".popup__content");

    if (
      data["money"] === undefined ||
      data["name"] === "" ||
      data["quantity"] <= 0
    ) {
      orderForm.classList.add("error-form");
      message.style.display = "block";
    } else {
      orderForm.classList.remove("error-form");
      message.style.display = "none";
      aboutProduct.classList.remove("active-about");
      aboutProduct.innerHTML = "";
      popup.style.display = "flex";
      popupContent.innerHTML = "";
      popupContent.insertAdjacentHTML(
        "beforeend",
        `<h2>Name: ${data.name}</h2>
        <p>Quantity: ${data.quantity}</p>
        <p>City: ${data.city}</p>
        <p>Delivery: in ${data.post}</p>`
      );
      document.body.style.overflow = "hidden";
    }
  };

  popup.addEventListener("click", (e) => {
    if (e.target.classList.value === "popup") {
      document.body.style.overflow = "auto";
      popup.style.display = "none";
      aboutProduct.classList.remove("active-about");
      aboutProduct.innerHTML = "";
      checkboxes.forEach((elem) => {
        elem.checked = false;
      });
      generateProducts(productsData, categories);
    }
  });

  const submit = document.querySelector(".submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getFormData();
  });
});
const checkboxes = document.querySelectorAll(".checkbox");

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
