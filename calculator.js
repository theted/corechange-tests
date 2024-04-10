export class Calculator {
  constructor() {
    this.currentValue = 0;
  }

  add(num) {
    this.currentValue += num;
    return this;
  }

  subtract(num) {
    this.currentValue -= num;
    return this;
  }

  multiply(num) {
    this.currentValue *= num;
    return this;
  }

  divide(num) {
    this.currentValue /= num;
    return this;
  }

  print() {
    console.log(this.currentValue);
    return this.currentValue;
  }
}
