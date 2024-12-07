import { describe } from "node:test";
import { expect, test } from "vitest";
import { Part1 } from "./part-1";

const input = [
  "7 6 4 2 1",
  "1 2 7 8 9",
  "9 7 6 2 1",
  "1 3 2 4 5",
  "8 6 4 4 1",
  "1 3 6 7 9",
];

const day = new Part1(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("2");
});

describe("Handle Report", () => {
  test("1", () => {
    const result = day.handleReport([7, 6, 4, 2, 1]);

    expect(result).toBe(true);
  });

  test("2", () => {
    const result = day.handleReport([1, 2, 7, 8, 9]);

    expect(result).toBe(false);
  });

  test("3", () => {
    const result = day.handleReport([9, 7, 6, 2, 1]);

    expect(result).toBe(false);
  });

  test("4", () => {
    const result = day.handleReport([1, 3, 2, 4, 5]);

    expect(result).toBe(false);
  });

  test("5", () => {
    const result = day.handleReport([8, 6, 4, 4, 1]);

    expect(result).toBe(false);
  });

  test("6", () => {
    const result = day.handleReport([1, 3, 6, 7, 9]);

    expect(result).toBe(true);
  });
});
