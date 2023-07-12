// ================== Homework #26 ==================

const blockVoting = document.querySelector(".voting");

function generateEmoji(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    blockVoting.insertAdjacentHTML(
      "beforeend",
      `
    <div class="emojiBlock">
        <img
          id="${keys[i]}"
          class="emojiBlock__img"
          src="./images/${values[i]}"
          alt="smile"
        />
        <p id="${keys[i]}" class="emojiBlock__count">0</p>
      </div>
    `
    );
  }
}

const obj = {
  smile: "smiling-face.png",
  cool: "emoji-cool.png",
  like: "emoji-like.png",
  dislike: "emoji-dislike.png",
  monkey: "emoji-monkey.png",
};

generateEmoji(obj);

const emojiBlock = document.querySelectorAll(".emojiBlock");
const count = document.querySelectorAll(".emojiBlock__count");

emojiBlock.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (e.target.nodeName === "IMG") {
      count.forEach((count) => {
        if (count.id === e.target.id) {
          count.innerText = +count.innerText + 1;
        }
      });
    }
  });
});
