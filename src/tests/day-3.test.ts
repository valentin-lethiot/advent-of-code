import { Day3 } from "../main/challenges/day-3/day-3";
import { formatInputs } from '../main/libs/fileReader';

const inputs = formatInputs('./src/tests/inputs/inputs-day3.txt')
const day = new Day3('Rucksack Reorganization', inputs)

test('Test Day-3-1', () => {
  const result = day.solvePart1();

  expect(result).toBe("157")
})

test('Test Day-3-2', () => {
  const result = day.solvePart2();

  expect(result).toBe("70")
})
