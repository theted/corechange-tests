import { Calculator } from "./calculator";
import { Calculator as CalculatorPrototype } from "./calculator-prototype";
import { expect, test } from "vitest";
import { roundToDecimals } from "./helpers";

test("calculator calculates", () => {
  const calc = new Calculator();

  calc.add(10).subtract(5).multiply(5);

  expect(calc.currentValue).toBe(25);
});

test("calculator with multiple operations", () => {
  const calc = new Calculator();

  calc.add(10).subtract(5).multiply(5).divide(9).add(10);

  const rounded = roundToDecimals(calc.currentValue, 2);
  expect(rounded).toBe(12.78);
});

test("calculator with prototypal inheritance works exactly like the class-based version", () => {
  const calcPrototype = new CalculatorPrototype();
  const calcClass = new Calculator();

  calcPrototype.add(10).subtract(5).multiply(5);
  calcClass.add(10).subtract(5).multiply(5);

  expect(calcPrototype.currentValue).toBe(25);
  expect(calcClass.currentValue).toBe(25);
});
