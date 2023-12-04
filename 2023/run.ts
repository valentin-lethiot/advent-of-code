import { Day } from '../utils/day'
import { formatInputs } from '../utils/fileReader';

import { Day1 } from "./day-1/day-1"
import { Day2 } from './day-2/day-2';

const executeDay = (day: Day): void => {
  console.log(day.name)
  console.log('    Part 1 -', day.solvePart1())
  console.log('    Part 2 -', day.solvePart2())
  console.log()
}

console.log('---------------------------')
executeDay(new Day1('Day 1: Trebuchet?!', formatInputs('./day-1/input.txt')))
executeDay(new Day2('Day 2: Cube Conundrum', formatInputs('./day-2/input.txt')))