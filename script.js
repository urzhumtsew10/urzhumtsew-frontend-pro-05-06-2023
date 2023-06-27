// ================== Homework #20 ==================

class SuperMath {
  input() {
    const newX = prompt("Enter new X");
    const newY = prompt("Enter new Y");
    let newZnak = prompt("Enter new Znak");
    while (!["+", "-", "*", "/", "%"].includes(newZnak)) {
      newZnak = prompt("Enter new Znak. + - * / %");
    }
    const inputObj = {};
    inputObj.x = newX;
    inputObj.y = newY;
    inputObj.znak = newZnak;
    return inputObj;
  }

  calculate(obj) {
    switch (obj.znak) {
      case "+":
        return obj.x + obj.y;
        break;
      case "-":
        return obj.x - obj.y;
        break;
      case "*":
        return obj.x * obj.y;
        break;
      case "/":
        return obj.x / obj.y;
        break;
      case "%":
        return obj.x % obj.y;
        break;
    }
  }
}

const obj = {
  x: 12,
  y: 2,
  znak: "-",
};

SuperMath.prototype.check = function (obj) {
  const answer = prompt(
    `Do you want to do action ${obj.znak} with ${obj.x} and ${obj.y}? (YES OR NO)`
  );
  if (answer.toLowerCase() === "no") {
    const newObj = this.input();
    console.log(this.calculate(newObj));
  }
  if (answer.toLowerCase() === "yes") {
    console.log(this.calculate(obj));
  }
};

const p = new SuperMath();
p.check(obj);

console.log(obj);
