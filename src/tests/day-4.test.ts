import { Day4 } from "../main/challenges/day-4/day-4";
import { formatInputs } from '../main/libs/fileReader';

const inputs = formatInputs('./src/tests/inputs/inputs-day4.txt')
const day = new Day4('Camp Cleanup', inputs)

test('Test Day-4-1', () => {
  const result = day.solvePart1();

  expect(result).toBe("2")
})

test('Test Day-4-2', () => {
  const result = day.solvePart2();

  expect(result).toBe("4")
})
