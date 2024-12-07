import { expect, test } from "vitest";
import { Part1 } from "./part-1";

const input = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];

const day = new Part1(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("11");
});
