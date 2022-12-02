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

let totalOfTheThreeElves = 0;
for (let i = 0; i < 3; i++) {
  const maxCalories = Math.max(...elves)
  totalOfTheThreeElves += maxCalories;

  const heaviestElfIndex = elves.findIndex(calories => calories === maxCalories)
  elves.splice(heaviestElfIndex, 1)
}


console.log("The total of calories for the three elves is", totalOfTheThreeElves)