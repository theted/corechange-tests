import { find1, find2, createFind } from "./optimize";
import { expect, test } from "vitest";

const timeExecution = (fn) => {
  const start = Date.now();
  fn();
  const end = Date.now();
  return end - start;
};

test("execution time is lower for the optimized functions", () => {
  const functions = [find1, find2];
  const times = functions.map((fn) =>
    timeExecution(() => {
      fn(6);
      fn(12);
    })
  );

  expect(times[1]).toBeLessThan(times[0]);
});

test("execution time is lower for the optimized functions", () => {
  const timeOriginal = timeExecution(() => {
    find1(6);
    find1(12);
    find1(10000);
  });

  const timeOptimized = timeExecution(() => {
    find2(6);
    find2(12);
    find2(10000);
  });

  const timeBetterOptimized = timeExecution(() => {
    const optimized = createFind();
    optimized(6);
    optimized(12);
    optimized(10000);
  });

  console.log({
    timeOriginal,
    timeOptimized,
    timeBetterOptimized,
  });

  expect(timeBetterOptimized).toBeLessThan(timeOriginal);
});
