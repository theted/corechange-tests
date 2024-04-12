import { find1, find2, createFind } from "./optimize";
import { expect, test } from "vitest";

const timeExecution = (fn, args) => {
  const start = Date.now();
  fn(args);
  const end = Date.now();
  return end - start;
};

test("execution time is lower for the optimized functions", () => {
  const args = 100;
  const functions = [find1, find2];
  const times = functions.map((fn) => timeExecution(fn, args));

  expect(times[1]).toBeLessThan(times[0]);
});

test("execution time is lower for the optimized functions", () => {
  const time1 = timeExecution(() => {
    find1(6);
    find1(12);
  });

  const time2 = timeExecution(() => {
    const optimized = createFind();
    optimized(6);
    optimized(12);
  });

  expect(time2).toBeLessThan(time1);
});
