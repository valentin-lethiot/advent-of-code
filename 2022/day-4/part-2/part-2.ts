import { Part } from '../../../utils/part'

export class Part2 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  getFirstElement(range: string): number {
    return Number(range.split('-')[0])
  }

  getSecondElement(range: string): number {
    return Number(range.split('-')[1])
  }

  buildRange(range: string): number[] {
    const returnedArray :number[] = []
    const firstElement = this.getFirstElement(range);
    const secondElement = this.getSecondElement(range);

    for (let i = firstElement; i <= secondElement; i++) {
      returnedArray.push(i)
    }

    return returnedArray;
  }

  solve(): string {
    let total = 0;
    
    this.inputs.forEach(pair => {
      const firstElf = pair.split(',')[0]
      const secondElf = pair.split(',')[1]
      
      const firstRange = this.buildRange(firstElf)
      const secondRange = this.buildRange(secondElf)
      const fullRange = firstRange.concat(secondRange)

      const rangeObject = {}
      fullRange.forEach(index => {
        if (!rangeObject[index]) rangeObject[index] = 0
        rangeObject[index]++
      })

      if (Object.values(rangeObject).includes(2)) total++;
    })
    
    return `${total}`
  };
}