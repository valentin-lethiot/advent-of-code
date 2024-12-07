import { expect, test } from "vitest";
import { Part1 } from "./part-1";

const input = [
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
];

const day = new Part1(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("161");
});
