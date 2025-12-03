import { expect, test } from "vitest";
import { Part1 } from "./part-1";

const input = [
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"
];

const day = new Part1(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("1227775554");
});

test("11-22", () => {
  const day = new Part1(["11-22"]);
  const result = day.solve();
  expect(result).toBe("33");
});

test("95-115", () => {
  const day = new Part1(["95-115"]);
  const result = day.solve();
  expect(result).toBe("99");
});

test("998-1012", () => {
  const day = new Part1(["998-1012"]);
  const result = day.solve();
  expect(result).toBe("1010");
});

test("1188511880-1188511890", () => {
  const day = new Part1(["1188511880-1188511890"]);
  const result = day.solve();
  expect(result).toBe("1188511885");
});

test("222220-222224", () => {
  const day = new Part1(["222220-222224"]);
  const result = day.solve();
  expect(result).toBe("222222");
});

test("1698522-1698528", () => {
  const day = new Part1(["1698522-1698528"]);
  const result = day.solve();
  expect(result).toBe("0");
});

test("446443-446449", () => {
  const day = new Part1(["446443-446449"]);
  const result = day.solve();
  expect(result).toBe("446446");
});

test("38593856-38593862", () => {
  const day = new Part1(["38593856-38593862"]);
  const result = day.solve();
  expect(result).toBe("38593859");
});

test("565653-565659", () => {
  const day = new Part1(["565653-565659"]);
  const result = day.solve();
  expect(result).toBe("0");
});

test("824824821-824824827", () => {
  const day = new Part1(["824824821-824824827"]);
  const result = day.solve();
  expect(result).toBe("0");
});

test("2121212118-2121212124", () => {
  const day = new Part1(["2121212118-2121212124"]);
  const result = day.solve();
  expect(result).toBe("0");
});
