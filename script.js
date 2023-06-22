// ================== Homework #17 ==================

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getPersonalData() {
    return `My name is ${this.name}.I'm ${this.age}`;
  }
}

class Auto {
  constructor(brand, model, date, licenseplate) {
    this.brand = brand;
    this.model = model;
    this.date = date;
    this.licenseplate = licenseplate;
  }
  assignOwner(owner) {
    if (owner instanceof Person && owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("This owner is't 18 and more!");
    }
  }

  getInfoCar() {
    let message;
    if (!this.owner) {
      message = "Car don't have owner";
    } else {
      message = `${this.owner.getPersonalData()}`;
    }
    return `Car:\n${this.brand}(brand), ${this.model}(model)\n${this.date}(year released), ${this.licenseplate}(number plate)\nOwner: ${message}\n\n\n`;
  }
}

const person1 = new Person("Mike", 20);
const auto1 = new Auto("Mercedes", "Maybach", 2022, "BH0707CA");

const person2 = new Person("John", 11);
const auto2 = new Auto("BMW", "M5", 2018, "BH3019CO");

const person3 = new Person("Tom", 21);
const auto3 = new Auto("Nissan", "Versa", 2019, "BH1323CA");

console.log(person1.getPersonalData());
auto1.assignOwner(person1);
console.log(auto1.getInfoCar());

console.log(person2.getPersonalData());
auto2.assignOwner(person2);
console.log(auto2.getInfoCar());

console.log(person3.getPersonalData());
console.log(auto3.getInfoCar());
