import { Part2 } from "./part-2";
import { expect, test } from 'vitest'

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
