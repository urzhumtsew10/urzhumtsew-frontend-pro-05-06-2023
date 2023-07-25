// ================== Homework #32 ==================
import { productsData } from "./data.js";

const getDataProductsFromStorage = () => {
  return JSON.parse(localStorage.getItem("dataProducts"));
};

// Block Filter

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

// Main block called "Products"

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

// Block about product

const aboutProduct = document.querySelector(".aboutProduct");
const infoProduct = document.querySelector(".infoProduct");
let paramsProduct = {};
blockProducts.addEventListener("click", (e) => {
  aboutProduct.classList.add("active-about");
  productsData.forEach((elem) => {
    if (elem.id === +e.target.id) {
      infoProduct.insertAdjacentHTML(
        "afterbegin",
        `
      <span>X</span>
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
      const date = new Date();
      paramsProduct = {
        date:
          String(date.getDate()) +
          "/" +
          String(date.getMonth() + 1) +
          "/" +
          String(date.getFullYear()),
        img: elem.img,
        description: elem.description,
        price: elem.price,
        country: elem.country,
      };
    }
  });
});

const getParamsProduct = () => {
  return paramsProduct;
};

// info from Form "Buy"

const orderForm = document.querySelector("#orderForm");
aboutProduct.addEventListener("click", (e) => {
  if (e.target.nodeName === "SPAN") {
    aboutProduct.classList.remove("active-about");
    infoProduct.innerHTML = "";
    orderForm.style.display = "none";
  }
  if (e.target.nodeName === "BUTTON") {
    orderForm.style.display = "flex";
  }
});

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
    infoProduct.innerHTML = "";
    popup.style.display = "flex";
    popupContent.innerHTML = "";
    popupContent.insertAdjacentHTML(
      "beforeend",
      `<h2>Date: ${data.name}</h2>
        <p>Quantity: ${data.quantity}</p>
        <p>City: ${data.city}</p>
        <p>Delivery: in ${data.post}</p>`
    );
    document.body.style.overflow = "hidden";

    return data;
  }
};

const contentOrdersBlock = document.querySelector(".content-orders");

const updateYourOrders = () => {
  contentOrdersBlock.innerHTML = "";
  const dataProductsArray = getDataProductsFromStorage();
  for (let i = 0; i < dataProductsArray.length; i++) {
    contentOrdersBlock.insertAdjacentHTML(
      "beforeend",
      `<div class="yourOrders__case">
        <img id="${i}" class="case__img margin-right" src="./images/${dataProductsArray[i].img}" />
        <h4 id="${i}" class="case__name margin-right">${dataProductsArray[i].date}</h4>
        <p id="${i}" class="case__quantity margin-right">Quantity: ${dataProductsArray[i].quantity}</p>
        <p id="${i}" class="case__price margin-right">Price: ${dataProductsArray[i].price}</p>
        <button id="${i}" class="case__delete">delete</button>
      </div>`
    );
  }
};

const dataStorage = getDataProductsFromStorage() || [];
const submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const dataProductsArray = getDataProductsFromStorage();
  dataProductsArray.push(Object.assign(getFormData(), getParamsProduct()));
  localStorage.setItem("dataProducts", JSON.stringify(dataProductsArray));
});

// Pop-up
const popup = document.querySelector(".popup");
popup.addEventListener("click", (e) => {
  if (e.target.classList.value === "popup") {
    document.body.style.overflow = "auto";
    popup.style.display = "none";
    aboutProduct.classList.remove("active-about");
    infoProduct.innerHTML = "";
    orderForm.style.display = "none";

    checkboxes.forEach((elem) => {
      elem.checked = false;
    });
    generateProducts(productsData, []);
  }
});

// filter
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

// Your Orders
const blockYourOrders = document.querySelector(".yourOrders");
const buttonOrders = document.querySelector(".header__btn");
const closeBlockOrders = document.querySelector(".close-orders");

buttonOrders.addEventListener("click", () => {
  blockYourOrders.style.display = "block";
  updateYourOrders();
});

blockYourOrders.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    const buttonsDelete = document.querySelectorAll(".case__delete");
    buttonsDelete.forEach((btn) => {
      const dataProductsArray = getDataProductsFromStorage();
      btn.addEventListener("click", () => {
        const newDataStorage = dataProductsArray.filter((n) => {
          return n !== dataProductsArray[btn.id];
        });
        localStorage.setItem("dataProducts", JSON.stringify(newDataStorage));

        updateYourOrders();
      });
    });
  }
  if (e.target.classList.value.includes("margin-right")) {
    const viewProduct = document.querySelector(".view");
    viewProduct.innerHTML = "";
    const productInfo = dataStorage[e.target.id];
    viewProduct.style.right = "0";
    viewProduct.insertAdjacentHTML(
      "beforeend",
      `<span class="close">X</span>
      <img src="./images/${productInfo.img}" class="about__img" />
        <div class="about__block">
          <h4 class="about__title">${productInfo.description}</h4>
          <div class="about__descr">
            <div class="descr__price">
              <p class="text">price:</p>
              <h4 class="price">${productInfo.price}</h4>
            </div>
            <div class="descr__from">
              <p class="text">country:</p>
              <h4 class="country">${productInfo.country}</h4>
            </div>
          </div>
          <div class="about__descr">
            <div class="descr__price">
              <p class="text">quantity:</p>
              <h4 class="price">${productInfo.quantity}</h4>
            </div>
            <div class="descr__from">
              <p class="text">date:</p>
              <h4 class="country">${productInfo.date}</h4>
            </div>
          </div>
        </div>`
    );
    viewProduct.addEventListener("click", (e) => {
      if (e.target.nodeName === "SPAN") {
        viewProduct.style.right = "-100%";
      }
    });
  }
});

blockYourOrders.addEventListener("click", (e) => {
  if (e.target.nodeName === "SPAN") {
    blockYourOrders.style.display = "none";
  }
});
