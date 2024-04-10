import { describe, test, expect } from "vitest";
import { getMaximumDiff } from "./diff";

describe("Max difference calculation", () => {
  test("calculates maximum difference correctly", () => {
    const nums = [5, 12, 4, 2, 1, 20];
    expect(getMaximumDiff(nums)).toBe(19);
  });

  test("handles negative numbers", () => {
    expect(getMaximumDiff([-10, 0, 10])).toBe(20);
  });

  test("throws error when provided invalid input", () => {
    const invalidInputs = ["foo", [1, "2"], []];

    invalidInputs.forEach((input) => {
      expect(() => getMaximumDiff(input)).toThrowError(
        "Expected an array of numbers"
      );
    });
  });
});
