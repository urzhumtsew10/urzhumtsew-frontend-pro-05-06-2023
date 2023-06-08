// ================== Homework #8 ==================

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//task 1

let sum = 0;
const taskOneArr = arr
  .filter((x) => x > 0)
  .map((x) => {
    return (sum += x);
  });

alert(
  `TASK #1\nSum of positive element from array is ${
    taskOneArr[taskOneArr.length - 1]
  }\nNumber of positive elements in array is ${taskOneArr.length}`
);

//task 2

let min = 0;
const taskTwoArr = arr.map((num) => {
  if (num < min) {
    min = num;
  }
  return min;
});

alert(
  `TASK #2\nMin element from array is ${
    taskTwoArr[taskTwoArr.length - 1]
  }\n It's under index ${arr.indexOf(taskTwoArr[taskTwoArr.length - 1])}`
);

//task 3

let max = 0;
const taskThreeArr = arr.map((num) => {
  if (num > max) {
    max = num;
  }
  return max;
});

alert(
  `TASK #3\nMax element from array is ${
    taskThreeArr[taskThreeArr.length - 1]
  }\n It's under index ${arr.indexOf(taskThreeArr[taskThreeArr.length - 1])}`
);

//task 4

const taskFourArr = arr.filter((x) => x < 0);
alert(
  `TASK #4\nNumber of negetive elements fro array is ${taskFourArr.length}`
);

// task 5

const taskFiveArr = arr.filter((x) => x > 0).filter((x) => x % 2 !== 0);

alert(
  `TASK #5\nNumbers of not pair positive elements from array = ${taskFiveArr.length}`
);

// task 6

const taskSixArr = arr.filter((x) => x > 0).filter((x) => x % 2 === 0);

alert(
  `TASK #6\nNumbers of pair positive elements from array = ${taskSixArr.length}`
);

// task 7

let sumPair = 0;

const taskSevenArr = arr
  .filter((x) => x > 0 && x % 2 === 0)
  .map((number) => {
    sumPair += number;
  });

alert(`TASK #7\nSum of positive pair numbers ${sumPair}`);

// task 8

let sumNoPair = 0;

const taskEightArr = arr
  .filter((x) => x > 0 && x % 2 !== 0)
  .map((number) => {
    sumNoPair += number;
  });

alert(`TASK #8\nSum of positive no-pair numbers ${sumNoPair}`);

// task 9

let product = 1;

const taskNineArr = arr
  .filter((x) => x > 0)
  .forEach((number) => {
    product *= number;
  });

alert(`TASK #9\nProduct of positive numbers ${product}`);

// task 10

const taskTenArr = arr.map((x) => {
  if (x !== max) {
    x = 0;
  }
  return x;
});

alert(`TASK #10\n${taskTenArr}`);
