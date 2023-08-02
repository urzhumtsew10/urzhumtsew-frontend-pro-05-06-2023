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

const getPost = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.onload = () => {
    if (request.status === 200) {
      resolve(JSON.parse(request.responseText));
    } else {
      reject("something went wrong");
    }
  };

  request.open("GET", `https://jsonplaceholder.typicode.com/posts/${getId}`);
  request.send();
});

getPost.then((value) => {
  divPost.style.display = "block";
  titlePost.innerText = value.title;
  userId.innerText = `UserId: ${value.userId}`;
  descrPost.innerText = value.body;
});

getPost.catch((err) => {
  console.log(`Error: ${err}`);
});

btnGetComments.addEventListener("click", () => {
  blockComments.innerHTML = "";

  const getComments = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject("something went wrong");
      }
    };

    request.open(
      "GET",
      `https://jsonplaceholder.typicode.com/posts/${getId}/comments`
    );
    request.send();
  });

  getComments.then((value) => {
    value.forEach((comment) => {
      blockComments.insertAdjacentHTML(
        "beforeend",
        `<div class="comment">
        <h2 class="name-comment">${comment.name}</h2>
        <p class="email-comment">${comment.email}</p>
        <p class="body-comment">${comment.body}</p>
      </div>`
      );
    });
  });

  getComments.catch((err) => {
    console.log(`Error: ${err}`);
  });
});
