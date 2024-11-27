import { describe, expect, test } from "vitest";
import { Part1 } from "./part-1";

const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

const day = new Part1(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("");
});
