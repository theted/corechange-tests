import { validate } from "./validate";
import { expect, test } from "vitest";

test("validation function", () => {
  const expected = {
    javascript: true,
    "3javascript": false,
    javascript_: false,
    _javascript: false,
    javascript3: true,
    javascript_3: true,
    baz: false,
    iamareallylongstringimeanareallylongstring: false,
  };

  Object.entries(expected).forEach(([key, value]) => {
    expect(validate(key)).toEqual(value);
  });
});
