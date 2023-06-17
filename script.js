// ================== Homework #13 ==================

// task 1

const getAvgElemOfArray = (array) => {
  const arrayOfNumbers = array.filter((x) => typeof x === "number");
  const length = arrayOfNumbers.length;

  const sumElements = arrayOfNumbers.reduce((acc, num) => {
    return (acc += num);
  }, 0);
  return sumElements / length;
};

const arr = [1, "2", 3, 4, "5", 2, {}, [], 10];

const avgNumberOfArray = getAvgElemOfArray(arr);
console.log(avgNumberOfArray);

// task 2

const doMath = (x, sign, y) => {
  switch (sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "^":
      return x ** y;
    case "%":
      return x % y;
    default:
      return "We don't know that mathematical sign";
  }
};

const x = Number(prompt("Enter first number"));
const y = Number(prompt("Enter second number"));
const sign = prompt("Enter mathematical sign");
const result = doMath(x, sign, y);
console.log(result);

// task 3

const getDataFromUser = () => {
  let arr = [];
  const length = prompt("Enter array's length");
  for (let i = 0; i < length; i++) {
    arr.push([]);
    const lengthArr = prompt(`Enter length array under index ${i}`);
    for (let j = 0; j < lengthArr; j++) {
      const data = prompt(`Enter data (arr[${i}][${j}])`);
      arr[i].push(data);
    }
  }
  return arr;
};

console.log(getDataFromUser());

// task 4

const deleteSymbols = (string, arraySymbols) => {
  let copyString = string.toLowerCase();
  arraySymbols = arraySymbols.join("").toLowerCase().split("");
  for (let i = 0; i <= copyString.length; i++) {
    for (let j = 0; j <= arraySymbols.length; j++) {
      copyString = copyString.replace(arraySymbols[j], "");
    }
  }
  return copyString;
};

const string = "I have big garden in New York";
const symbols = ["A", "G", "I"];

console.log(string);
console.log(deleteSymbols(string, symbols));
