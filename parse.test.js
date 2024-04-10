import { parse } from "./parse";
import { expect, test } from "vitest";

const inputsToExpected = {
  a: "b",
  b: "c",
  o: "p",
  h: "I",
  whee: "xIff",
  zap: "abq",
  Javascript: "kbwbtdsjqU",
};

test("parses as expected", () => {
  Object.entries(inputsToExpected).forEach(([input, expected]) => {
    expect(parse(input)).toBe(expected);
  });
});
