import { Day } from "utils/day";
import { Day1 } from "./day-1/day-1"
import { Day2 } from "./day-2/day-2";
import { Day3 } from "./day-3/day-3";
import { Day4 } from "./day-4/day-4";
import { Day5 } from "./day-5/day-5";
import { formatInputs } from '../utils/fileReader';

const executeDay = (day: Day): void => {
  console.log(day.name)
  console.log('    Part 1 -', day.solvePart1())
  console.log('    Part 2 -', day.solvePart2())
  console.log()
}

console.log('---------------------------')
executeDay(new Day1('Day 1: Calorie Counting', formatInputs('./day-1/input.txt')))
executeDay(new Day2('Day 2: Rock Paper Scissors', formatInputs('./day-2/input.txt')))
executeDay(new Day3('Day 3: Rucksack Reorganization', formatInputs('./day-3/input.txt')))
executeDay(new Day4('Day 4: Camp Cleanup', formatInputs('./day-4/input.txt')))
executeDay(new Day5('Day 5: Supply Stacks', formatInputs('./day-5/input.txt')))