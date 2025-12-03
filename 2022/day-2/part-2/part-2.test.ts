import { expect, test } from 'vitest';
import { Part2 } from "./part-2";

const input = [
  'A Y',
  'B X',
  'C Z',
]

const day = new Part2(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("12")
})
