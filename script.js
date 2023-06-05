// ============================     HOMEWORK #7       ============================

// task 1

console.log("task #1");
let str = "";
for (let i = 10; i <= 20; i++) {
  str = i < 20 ? (str += i + ",") : (str += i);
}
console.log(str);

//task 2

console.log("\ntask #2");
str = "";
for (let i = 10; i <= 20; i++) {
  str = i < 20 ? (str += i ** 2 + ",") : (str += i ** 2);
}
console.log(str);

//task 3

console.log("\ntask #3");

let i = 1;
while (i < 9) {
  console.log(`7 * ${i} = ${7 * i}`);
  i++;
}

//task 4

console.log("\ntask #4");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let sum = 0;
arr.forEach((number) => {
  sum += number;
});

console.log(`Sum number from 1 to 15 = ${sum}`);

//task 5

console.log("\ntask #5");

let productOfNumbers = 1;

for (let i = 15; i <= 35; i++) {
  productOfNumbers *= i;
}
console.log(`product of numbers(from 15 to 35) = ${BigInt(productOfNumbers)}`);

//task 6

console.log("\ntask #6");

i = 1;
sum = 0;
while (i < 500) {
  sum += i;
  i++;
}
console.log(sum / 500 + " avg (from 1 to 500)");

//task 7

console.log("\ntask #7");

arr = [];
sum = 0;

for (let i = 30; i <= 80; i++) {
  arr.push(i);
}

for (let num in arr) {
  if (arr[num] % 2 === 0) {
    sum += arr[num];
  }
}
console.log(`sum(from 30 to 80) only pair numbers = ${sum}`);

//task 8

console.log("\ntask #8");
/*в задании было указано в конце ТРИ, я понял что надо сделать вывод всех чисел от 100 до 200 с шагом ТРИ.
Так как обычный вывод уже был */
str = "";
for (let i = 100; i <= 200; i += 3) {
  str += i;
  if (i !== 199) {
    str += ", ";
  }
}
console.log(str);

//task 9-11

let inputNumber = prompt("Enter here a number");

let listDivisors = [];
let count = 0;
sum = 0;

while (
  inputNumber === null ||
  isNaN(inputNumber) ||
  inputNumber.trim() === ""
) {
  inputNumber = prompt("Enter here a number");
}

inputNumber = +inputNumber;

for (let i = 1; i <= inputNumber; i++) {
  if (inputNumber % i === 0) {
    listDivisors.push(i);
  }
}

for (let num in listDivisors) {
  if (listDivisors[num] % 2 === 0) {
    count += 1;
    sum += listDivisors[num];
  }
}

let stringDivisors = "";

for (let i = 0; i < listDivisors.length; i++) {
  stringDivisors += listDivisors[i];
  if (listDivisors[i] !== inputNumber) {
    stringDivisors += ", ";
  }
}

alert(
  `Number: ${inputNumber}\nDivisors - ${stringDivisors}\nPair numbers of Divisors(count) = ${count}\nPair numbers of Divisors(sum) = ${sum}`
);

//task 12
console.log("\ntask 12\n");
let tableMultiplication = "";

for (let i = 1; i <= 10; i++) {
  for (let k = 1; k <= 10; k++) {
    tableMultiplication += `${i} * ${k} = ${i * k}\n`;
  }
}

console.log(tableMultiplication);
