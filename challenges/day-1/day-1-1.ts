import { formatInputs } from "../../libs/fileReader";

const inputs = formatInputs('./inputs.txt')

const elves: number[] = []
let caloriesAccumulator: number = 0

inputs.forEach(calories => {
  if (!calories) {
    elves.push(caloriesAccumulator)
    caloriesAccumulator = 0
  }

  caloriesAccumulator += Number(calories)
})

const maxCalories = Math.max(...elves)
const heaviestElfIndex = elves.findIndex(calories => calories === maxCalories)

console.log("The heaviest elf is at the index ", heaviestElfIndex, " and carry ", maxCalories, " calories.")