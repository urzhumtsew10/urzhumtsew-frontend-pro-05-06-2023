// ================== Homework #31 ==================
const registrationBtn = document.querySelector(".registration");
const blockRegistration = document.querySelector(".blockRegistration");
const contentRegistration = document.querySelector(".regContent");

registrationBtn.addEventListener("click", () => {
  blockRegistration.style.display = "flex";
});

blockRegistration.addEventListener("click", (e) => {
  const checkboxesInfo = [];
  const regInfo = [];
  if (e.target.nodeName === "BUTTON") {
    const infoRegistration = document.querySelectorAll(".reg");
    infoRegistration.forEach((elem) => {
      if (elem.type === "checkbox" && elem.checked) {
        checkboxesInfo.push(elem.value);
      }
      if (elem.type !== "checkbox" && elem.value !== "") {
        if (elem.type === "radio" && elem.checked) {
          regInfo.push(elem.value);
        }
        if (elem.type !== "radio") {
          regInfo.push(elem.value);
        }
      }
    });
    console.log(regInfo.length, typeof regInfo.length, regInfo);
    if (regInfo.length === 6) {
      contentRegistration.style.boxShadow = "0px 4px 16px green";
      contentRegistration.innerHTML = "";
      contentRegistration.insertAdjacentHTML(
        "beforeend",
        `
    <table>
      <tr>
        <td>Your Full name:<td>
        <td>${regInfo[0]} ${regInfo[1]}<td>
      </tr>
      <tr>
        <td>Your Birthday:<td>
        <td>${regInfo[2]}<td>
      </tr>
      <tr>
        <td>Your city:<td>
        <td>${regInfo[3]}<td>
      </tr>
      <tr>
        <td>Your Gender:<td>
        <td>${regInfo[4]}<td>
      </tr>
      <tr>
        <td>You khow languages, such as:<td>
        <td>${checkboxesInfo}<td>
      </tr>
      <tr>
        <td>Youк adress:<td>
        <td>${regInfo[5]}<td>
      </tr>
    </table>
    `
      );
    } else {
      contentRegistration.style.boxShadow = "0px 4px 16px red";
    }
  }
  if (e.target.classList.value === "blockRegistration") {
    blockRegistration.style.display = "none";
  }
});
