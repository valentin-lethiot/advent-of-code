import { Day1 } from "../main/challenges/day-1/day-1";
import { formatInputs } from '../main/libs/fileReader';

const inputs = formatInputs('./src/tests/inputs/inputs-day1.txt')
const day = new Day1('Calorie Counting', inputs)

test('Test Day-1-1', () => {
  const result = day.solvePart1();

  expect(result).toBe("24000")
})

test('Test Day-1-2', () => {
  const result = day.solvePart2();

  expect(result).toBe("45000")
})
