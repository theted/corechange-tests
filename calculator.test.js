import { Calculator } from "./calculator";
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
