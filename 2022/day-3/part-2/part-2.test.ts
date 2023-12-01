import { Part2 } from "./part-2";
import { expect, test, describe } from 'vitest'

const input = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
]

const day = new Part2(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("70")
})
