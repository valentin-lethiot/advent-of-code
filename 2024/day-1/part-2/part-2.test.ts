import { expect, test } from "vitest";
import { Part2 } from "./part-2";

const input = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];

const day = new Part2(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("31");
});
