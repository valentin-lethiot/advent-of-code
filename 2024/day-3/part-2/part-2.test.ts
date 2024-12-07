import { expect, test } from "vitest";
import { Part2 } from "./part-2";

const input = [
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
];

const day = new Part2(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("48");
});
