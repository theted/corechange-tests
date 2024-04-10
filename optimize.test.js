import { find1, find2, find3, find4 } from "./optimize";
import { expect, test } from "vitest";

const timeExecution = (fn, args) => {
  const start = Date.now();
  fn(args);
  const end = Date.now();
  console.log(`${fn.name} took ${end - start}ms`);
  return end - start;
};

test("execution time is lower for the optimized functions", () => {
  const args = 100;
  const functions = [find1, find2, find3, find4];
  const times = functions.map((fn) => timeExecution(fn, args));

  console.log(times[1], "vs", times[0], "ms");
  expect(times[1]).toBeLessThan(times[0]);
});
