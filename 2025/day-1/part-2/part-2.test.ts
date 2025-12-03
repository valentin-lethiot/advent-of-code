import { expect, test } from "vitest";
import { Part2 } from "./part-2";

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

const day = new Part2(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("6");
});

test("1000 tests", () => {
  const input = ["R1000"]
  const day = new Part2(input);
  const result = day.solve();
  expect(result).toBe("10");
});
