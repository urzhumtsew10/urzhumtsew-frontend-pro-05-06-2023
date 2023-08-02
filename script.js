let getId = prompt("Enter id post (from 1 to 100)");

while (getId === null || getId.trim() === "" || +getId < 1 || +getId > 100) {
  getId = prompt("Enter id post (from 1 to 100)");
}

const divPost = document.querySelector(".post");
const titlePost = document.querySelector(".post-title");
const userId = document.querySelector(".userId");
const descrPost = document.querySelector(".post-body");
const btnGetComments = document.querySelector(".comment-btn");
const blockComments = document.querySelector(".post-comments");
const request = new XMLHttpRequest();

request.onload = () => {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    divPost.style.display = "block";
    titlePost.innerText = data.title;
    userId.innerText = `UserId: ${data.userId}`;
    descrPost.innerText = data.body;
  } else {
    ("Something Went Wrong!");
  }
};

request.open("GET", `https://jsonplaceholder.typicode.com/posts/${getId}`);
request.send();

btnGetComments.addEventListener("click", () => {
  blockComments.innerHTML = "";
  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      data.forEach((comment) => {
        blockComments.insertAdjacentHTML(
          "beforeend",
          `<div class="comment">
        <h2 class="name-comment">${comment.name}</h2>
        <p class="email-comment">${comment.email}</p>
        <p class="body-comment">${comment.body}</p>
      </div>`
        );
      });
    } else {
      ("Something Went Wrong!");
    }
  };

  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts/${getId}/comments`
  );
  request.send();
});
