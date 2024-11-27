import { describe, expect, test } from "vitest";
import { Part2 } from "./part-2";

const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

const day = new Part2(input);

describe("Part 2", () => {
  test("Solve", () => {
    const result = day.solve();

    expect(result).toBe("281");
  });
});
