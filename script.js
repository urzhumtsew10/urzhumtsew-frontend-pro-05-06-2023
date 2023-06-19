// ================== Homework #15 ==================

function getSum() {
  let sum = 0;
  return function (number) {
    return (sum += number);
  };
}

let sum = getSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
