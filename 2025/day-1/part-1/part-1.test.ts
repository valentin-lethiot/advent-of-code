import { expect, test } from "vitest";
import { Part1 } from "./part-1";

const input = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82"
];

const day = new Part1(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("3");
});
