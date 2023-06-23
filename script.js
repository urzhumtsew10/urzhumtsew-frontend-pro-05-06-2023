// ================== Homework #18 ==================

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  /* я тут использовал конструктор , так как только он для каждого экземпляра класса создает отдельный массив 
  я до этого пробывал через static, но там он записывал все в один массив не разделяв их по разным квартирам,домам*/
  constructor() {
    this.residents = [];
  }
  addToAppartment(person) {
    if (person instanceof Person) {
      this.residents.push(person);
    }
  }

  getInfo() {
    return this.residents;
  }
}

class House {
  constructor(sizeHouse) {
    this.sizeHouse = sizeHouse;
    this.flats = [];
  }

  addToHouse(flat) {
    if (flat instanceof Apartment && this.flats.length < this.sizeHouse) {
      this.flats.push(flat);
    } else {
      console.log("The house is full");
    }
  }

  getInfo() {
    return this.flats;
  }
}

const person = new Person("Anton", "male");
const person2 = new Person("Andrew", "male");
const person3 = new Person("Vadim", "male");
const person4 = new Person("Inna", "female");

const apartmentOne = new Apartment();
const apartmentTwo = new Apartment();
const apartmentThree = new Apartment();

const houseOne = new House(2);

apartmentOne.addToAppartment(person);
apartmentTwo.addToAppartment(person2);
apartmentOne.addToAppartment(person3);
apartmentThree.addToAppartment(person4);

houseOne.addToHouse(apartmentOne);
houseOne.addToHouse(apartmentTwo);

console.log(houseOne.getInfo());

houseOne.addToHouse(apartmentThree);
