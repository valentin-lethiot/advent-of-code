import { Part } from '../../../utils/part'

export class Part1 implements Part {
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
    
      if ((
          this.getFirstElement(firstElf) >= this.getFirstElement(secondElf) &&
          this.getSecondElement(firstElf) <= this.getSecondElement(secondElf)
        ) ||
        (
          this.getFirstElement(secondElf) >= this.getFirstElement(firstElf) &&
          this.getSecondElement(secondElf) <= this.getSecondElement(firstElf)
        )) {
        total += 1;
      }
    })
    
    return `${total}`
  };
}