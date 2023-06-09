// ================== Homework #8 ==================

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//task 1

const sumPositiveElem = arr
  .filter((x) => x > 0)
  .reduce((acc, x) => {
    return (acc += x);
  }, 0);

const countPositiveElem = arr
  .filter((x) => x > 0)
  .reduce((acc, x) => {
    return (acc += 1);
  }, 0);

alert(
  `TASK #1\nSum of positive elements from array = ${sumPositiveElem}\nCount of positive elements = ${countPositiveElem}`
);

//task 2

const minElem = arr.reduce((acc, x) => {
  if (x < acc) {
    return x;
  } else {
    return acc;
  }
}, 0);

const indexMinElem = arr.findIndex((x) => x === minElem);

alert(
  `TASK #2\nMin element from array is ${minElem}\nIt's under index ${indexMinElem}`
);

//task 3

const maxElem = arr.reduce((acc, x) => {
  if (x > acc) {
    return x;
  } else {
    return acc;
  }
}, 0);

const indexMaxElem = arr.findIndex((x) => x === maxElem);

alert(
  `TASK #3\nMax element from array is ${maxElem}\nIt's under index ${indexMaxElem}`
);

//task 4

const countNegativeElem = arr
  .filter((x) => x < 0)
  .reduce((acc, x) => {
    return (acc += 1);
  }, 0);

alert(`TASK #4\nNumber of negetive elements fro array is ${countNegativeElem}`);

// task 5

const countNoPairPositiveElem = arr
  .filter((x) => x > 0 && x % 2 !== 0)
  .reduce((acc, x) => {
    return (acc += 1);
  }, 0);

alert(
  `TASK #5\nNumbers of not pair positive elements from array = ${countNoPairPositiveElem}`
);

// task 6

const countPairPositiveElem = arr
  .filter((x) => x > 0 && x % 2 === 0)
  .reduce((acc, x) => {
    return (acc += 1);
  });

alert(
  `TASK #6\nNumbers of pair positive elements from array = ${countPairPositiveElem}`
);

// task 7

const sumPairElem = arr
  .filter((x) => x > 0 && x % 2 === 0)
  .reduce((acc, x) => {
    return (acc += x);
  }, 0);

alert(`TASK #7\nSum of positive pair numbers ${sumPairElem}`);

// task 8

const sumNoPairElem = arr
  .filter((x) => x > 0 && x % 2 !== 0)
  .reduce((acc, x) => {
    return (acc += x);
  }, 0);

alert(`TASK #8\nSum of positive not pair numbers ${sumNoPairElem}`);

// task 9

const productPositiveElem = arr
  .filter((x) => x > 0)
  .reduce((acc, x) => {
    return (acc *= x);
  }, 1);

alert(`TASK #9\nProduct of positive numbers ${productPositiveElem}`);

// task 10

const newArr = arr.map((x) => {
  if (x !== maxElem) {
    x = 0;
    return x;
  } else {
    return x;
  }
});

alert(`TASK #10\n${newArr}`);
