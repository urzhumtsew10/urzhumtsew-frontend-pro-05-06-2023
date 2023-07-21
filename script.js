// ================== Homework #31 ==================
const registrationBtn = document.querySelector(".registration");
const blockRegistration = document.querySelector(".blockRegistration");
const formElem = document.querySelector(".regContent");
const checkboxes = document.querySelectorAll(".checkbox");

registrationBtn.addEventListener("click", () => {
  blockRegistration.style.display = "flex";
});

blockRegistration.addEventListener("click", (e) => {
  if (e.target.classList.value === "blockRegistration") {
    blockRegistration.style.display = "none";
  }
});

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  const dataBoxes = [];
  checkboxes.forEach((box) => {
    if (box.checked) {
      dataBoxes.push(box.value);
    }
  });
  formElem.innerHTML = "";
  formElem.insertAdjacentHTML(
    "beforeend",
    `
   <table>
      <tr>
        <td>Your Full name:<td>
        <td>${data.name} ${data.surname}<td>
      </tr>
      <tr>
        <td>Your Birthday:<td>
        <td>${data.birthday}<td>
      </tr>
      <tr>
        <td>Your city:<td>
        <td>${data.city}<td>
      </tr>
      <tr>
        <td>Your Gender:<td>
        <td>${data.gender}<td>
      </tr>
      <tr>
        <td>You khow languages, such as:<td>
        <td>${dataBoxes}<td>
      </tr>
      <tr>
        <td>Youк adress:<td>
        <td>${data.adress}<td>
      </tr>
    </table>
  `
  );
});
