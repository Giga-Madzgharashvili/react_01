"use strict";
// #1

let arr = [-2, 5, -98, -26, 20, 10, -4, 50];
let newArr = arr
  .filter((x) => x > 0)
  .reduce((total, current) => total + current, 0);
console.log(newArr);

// #2

let names = ["giorgi", "ana", "sandro", "giorgi", "ana", "giga", "ana", "vika"];

let newNames = names.reduce((total, current) => {
  total[current] ??= 0;
  total[current]++;
  return total;
}, {});
console.log(newNames);

// 3

class Car {
  constructor(brand, model, speed = 0, motion = "The car is not moving") {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.motion = motion;
  }

  status = () => {
    this.check_motion();
    return `car ${this.brand} ${this.model} moving ${this.speed} km/h and car status is ${this.motion}`;
  };

  check_motion = () => {
    if (this.speed > 0) {
      this.motion = "The car is moving";
    } else {
      this.motion = "The car is not moving";
    }
  };

  accelerate = (speedon = 0) => {
    if (speedon > 0) {
      return this.status((this.speed += speedon));
    }
  };
  brake = (speedoff = 0) => {
    if (speedoff > this.speed) {
      return "Invalid Argument";
    } else {
      return this.status((this.speed -= speedoff));
    }
  };
  emergency_brake = () => {
    return this.status((this.speed = 0));
  };
}

let result = new Car("Ford", "Mustang", 100);

console.log(result.accelerate(100));
console.log(result.brake(50));
console.log(result.emergency_brake());

// #4

function addAsync(x, y) {
  return new Promise((resolve, reject) => {
    if (
      typeof x == "number" &&
      typeof x != "undefined" &&
      typeof y == "number" &&
      typeof y != "undefined"
    ) {
      resolve("success");
    } else {
      reject("ERROR!!!");
    }
  });
}
addAsync(1, 8)
  .then((num) => console.log(num))
  .catch((err) => console.log(err));
