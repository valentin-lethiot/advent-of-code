import { Part2 } from "./part-2";
import { expect, test, describe } from 'vitest'

const input = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
  '',
]

const day = new Part2(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("45000")
})
