// ================== Homework #19 ==================

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }

  static SIZE_SMALL = {
    calories: 20,
    price: 50,
  };
  static SIZE_BIG = {
    calories: 40,
    price: 100,
  };

  static STUFFING_CHEESE = {
    calories: 20,
    price: 10,
  };
  static STUFFING_SALAD = {
    calories: 5,
    price: 20,
  };
  static STUFFING_POTATO = {
    calories: 10,
    price: 15,
  };

  static TOPPING_MOYO = {
    calories: 5,
    price: 20,
  };
  static TOPPING_SAUCE = {
    calories: 0,
    price: 15,
  };

  addTopping(topping) {
    this.topping = {
      calories: topping.calories,
      price: topping.price,
    };
  }

  calculate() {
    if (this.topping) {
      return (
        this.size.calories + this.stuffing.calories + this.topping.calories
      );
    }
    return this.size.calories + this.stuffing.calories;
  }

  calculatePrice() {
    if (this.topping) {
      return this.size.price + this.stuffing.price + this.topping.price + "$";
    }
    return this.size.price + this.stuffing.price + "$";
  }
}

const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

console.log(hamburger.calculate());
console.log(hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_MOYO);

console.log(hamburger.calculate());
console.log(hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log(hamburger.calculate());
console.log(hamburger.calculatePrice());
