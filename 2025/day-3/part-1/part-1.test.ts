import { expect, test } from "vitest";
import { Part1 } from "./part-1";

const input = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111"
];

const day = new Part1(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("357");
});

test("1234", () => {
  const day = new Part1(["1234"]);
  const result = day.solve();
  expect(result).toBe("34");
});

test("987654321111111", () => {
  const day = new Part1(["987654321111111"]);
  const result = day.solve();
  expect(result).toBe("98");
});

test("811111111111119", () => {
  const day = new Part1(["811111111111119"]);
  const result = day.solve();
  expect(result).toBe("89");
});

test("234234234234278", () => {
  const day = new Part1(["234234234234278"]);
  const result = day.solve();
  expect(result).toBe("78");
});

test("818181911112111", () => {
  const day = new Part1(["818181911112111"]);
  const result = day.solve();
  expect(result).toBe("92");
});


