export class Day1 implements Day {
  inputs: string[]
  name: string

  constructor(name: string, inputs: string[]) {
    this.inputs = inputs;
    this.name = name;
  };

  solvePart1() : string {
    const elves: number[] = []
    let caloriesAccumulator: number = 0
    
    this.inputs.forEach(calories => {
      if (!calories) {
        elves.push(caloriesAccumulator)
        caloriesAccumulator = 0
      }
      
      caloriesAccumulator += Number(calories)
    })
    
    const maxCalories = Math.max(...elves)
    
    return `${ maxCalories }`;
  }

  solvePart2(): string {
    const elves: number[] = []
    let caloriesAccumulator: number = 0
    
    this.inputs.forEach(calories => {
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
    
    
    return `${totalOfTheThreeElves}`
  }
}