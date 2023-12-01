import { Part1 } from "./part-1";
import { expect, test } from 'vitest'

const input = [
  'A Y',
  'B X',
  'C Z',
]

const day = new Part1(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("15")
})
