import { Day } from '../utils/day'
import { formatInputs } from '../utils/fileReader';

import { Day1 } from "./day-1/day-1"

const executeDay = (day: Day): void => {
  console.log(day.name)
  console.log('    Part 1 -', day.solvePart1())
  console.log('    Part 2 -', day.solvePart2())
  console.log()
}

console.log('---------------------------')
executeDay(new Day1('Day 1: Trebuchet?!', formatInputs('./day-1/input.txt')))