// ================== Homework #10 ==================

function removeElement(array, item) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      arr.push(array[i]);
    }
  }
  return arr;
}

arr = [1, 2, 3, 4, 5, 6, 7];

const arrNew = removeElement(arr, 4);

console.log(arr);
console.log(arrNew);
