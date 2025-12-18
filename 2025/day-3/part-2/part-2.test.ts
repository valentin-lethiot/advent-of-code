import { expect, test } from "vitest";
import { Part2 } from "./part-2";

const input = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111"
];

const day = new Part2(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("3121910778619");
});

test("987654321111111", () => {
  const day = new Part2(["987654321111111"]);
  const result = day.solve();
  expect(result).toBe("987654321111");
});

test("811111111111119", () => {
  const day = new Part2(["811111111111119"]);
  const result = day.solve();
  expect(result).toBe("811111111119");
});

test("234234234234278", () => {
  const day = new Part2(["234234234234278"]);
  const result = day.solve();
  expect(result).toBe("434234234278");
});

test("818181911112111", () => {
  const day = new Part2(["818181911112111"]);
  const result = day.solve();
  expect(result).toBe("888911112111");
});


