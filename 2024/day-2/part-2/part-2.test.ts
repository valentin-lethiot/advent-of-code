import { describe } from "node:test";
import { expect, test } from "vitest";
import { Part2 } from "./part-2";

const input = [
  "7 6 4 2 1",
  "1 2 7 8 9",
  "9 7 6 2 1",
  "1 3 2 4 5",
  "8 6 4 4 1",
  "1 3 6 7 9",
];

const day = new Part2(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("4");
});

describe("Check Report", () => {
  test("1", () => {
    const result = day.checkReport([7, 6, 4, 2, 1]);

    expect(result).toBe(true);
  });

  test("2", () => {
    const result = day.checkReport([1, 2, 7, 8, 9]);

    expect(result).toBe(false);
  });

  test("3", () => {
    const result = day.checkReport([9, 7, 6, 2, 1]);

    expect(result).toBe(false);
  });

  test("4", () => {
    const result = day.checkReport([1, 3, 2, 4, 5]);

    expect(result).toBe(true);
  });

  test("5", () => {
    const result = day.checkReport([8, 6, 4, 4, 1]);

    expect(result).toBe(true);
  });

  test("6", () => {
    const result = day.checkReport([1, 3, 6, 7, 9]);

    expect(result).toBe(true);
  });

  test("7", () => {
    const result = day.checkReport([1, 3, 6, 7, 11]);

    expect(result).toBe(true);
  });

  test("8", () => {
    const result = day.checkReport([15, 3, 6, 7, 8]);

    expect(result).toBe(true);
  });

  test("8", () => {
    const result = day.checkReport([12, 23, 26, 27, 28]);

    expect(result).toBe(true);
  });

  test("9", () => {
    const result = day.checkReport([3, 6, 7, 8, 22]);

    expect(result).toBe(true);
  });

  test("10", () => {
    const result = day.checkReport([1, 3, 8, 9]);

    expect(result).toBe(false);
  });
});
