// ================== Homework #10 ==================

function RandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateKey(length, characters) {
  let key = "";
  for (let i = 0; i < length; i++) {
    key += characters[RandomInt(characters.length)];
  }
  return key;
}

const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
const yourKey = generateKey(10, characters);
console.log(yourKey);
