import { Day2 } from "../main/challenges/day-2/day-2";
import { formatInputs } from '../main/libs/fileReader';

const inputs = formatInputs('./src/tests/inputs/inputs-day2.txt')
const day = new Day2('Rock Paper Scissors', inputs)

test('Test Day-2-1', () => {
  const result = day.solvePart1();

  expect(result).toBe("15")
})

test('Test Day-2-2', () => {
  const result = day.solvePart2();

  expect(result).toBe("12")
})
