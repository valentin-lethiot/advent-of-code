import { Part1 } from "./part-1";
import { expect, test } from 'vitest'

const input = [
  '2-4,6-8',
  '2-3,4-5',
  '5-7,7-9',
  '2-8,3-7',
  '6-6,4-6',
  '2-6,4-8',
]

const day = new Part1(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("2")
})
