const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [cloneSymbol]() {
    return this;
  }

  cloneCar() {
    const ClonedCar = this.constructor[cloneSymbol];
    return new ClonedCar();
  }
}

export default Car;
