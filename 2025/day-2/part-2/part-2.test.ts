import { expect, test } from "vitest";
import { Part2 } from "./part-2";

const input = [
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"
];

const day = new Part2(input);

test("Solve", () => {
  const result = day.solve();

  expect(result).toBe("4174379265");
});

test("11-22", () => {
  const day = new Part2(["11-22"]);
  const result = day.solve();
  expect(result).toBe("33");
});

test("95-115", () => {
  const day = new Part2(["95-115"]);
  const result = day.solve();
  expect(result).toBe("210");
});

test("998-1012", () => {
  const day = new Part2(["998-1012"]);
  const result = day.solve();
  expect(result).toBe("2009");
});

test("1188511880-1188511890", () => {
  const day = new Part2(["1188511880-1188511890"]);
  const result = day.solve();
  expect(result).toBe("1188511885");
});

test("222220-222224", () => {
  const day = new Part2(["222220-222224"]);
  const result = day.solve();
  expect(result).toBe("222222");
});

test("1698522-1698528", () => {
  const day = new Part2(["1698522-1698528"]);
  const result = day.solve();
  expect(result).toBe("0");
});

test("446443-446449", () => {
  const day = new Part2(["446443-446449"]);
  const result = day.solve();
  expect(result).toBe("446446");
});

test("38593856-38593862", () => {
  const day = new Part2(["38593856-38593862"]);
  const result = day.solve();
  expect(result).toBe("38593859");
});

test("565653-565659", () => {
  const day = new Part2(["565653-565659"]);
  const result = day.solve();
  expect(result).toBe("565656");
});

test("824824821-824824827", () => {
  const day = new Part2(["824824821-824824827"]);
  const result = day.solve();
  expect(result).toBe("824824824");
});

test("2121212118-2121212124", () => {
  const day = new Part2(["2121212118-2121212124"]);
  const result = day.solve();
  expect(result).toBe("2121212121");
});
