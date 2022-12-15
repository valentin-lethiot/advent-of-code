import { Day1 } from "./challenges/day-1/day-1"
import { Day2 } from "./challenges/day-2/day-2";
import { Day3 } from "./challenges/day-3/day-3";
import { Day4 } from "./challenges/day-4/day-4";
import { formatInputs } from './libs/fileReader';

const executeDay = (day: Day): void => {
  console.log(day.name, ':')
  console.log('    Part 1 -', day.solvePart1())
  console.log('    Part 2 -', day.solvePart2())
  console.log()
}

console.log('---------------------------')
executeDay(new Day1('Calorie Counting', formatInputs('./src/main/inputs/inputs-day1.txt')))
executeDay(new Day2('Rock Paper Scissors', formatInputs('./src/main/inputs/inputs-day2.txt')))
executeDay(new Day3('Rucksack Reorganization', formatInputs('./src/main/inputs/inputs-day3.txt')))
executeDay(new Day4('Camp Cleanup', formatInputs('./src/main/inputs/inputs-day4.txt')))