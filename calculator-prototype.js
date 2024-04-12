export function Calculator() {
  this.currentValue = 0;
}

Calculator.prototype.add = function (num) {
  this.currentValue += num;
  return this;
};

Calculator.prototype.subtract = function (num) {
  this.currentValue -= num;
  return this;
};

Calculator.prototype.multiply = function (num) {
  this.currentValue *= num;
  return this;
};

Calculator.prototype.divide = function (num) {
  this.currentValue /= num;
  return this;
};

Calculator.prototype.print = function () {
  return this.currentValue;
};
