import { Part } from '../../../utils/part'

export class Part1 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() : string {
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
  };
}