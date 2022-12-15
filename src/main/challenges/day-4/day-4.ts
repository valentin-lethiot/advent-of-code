export class Day4 implements Day {
  inputs: string[]
  name: string

  constructor(name: string, inputs: string[]) {
    this.inputs = inputs;
    this.name = name;
  };

  getFirstElement(range: string): number {
    return Number(range.split('-')[0])
  }

  getSecondElement(range: string): number {
    return Number(range.split('-')[1])
  }

  buildRange(range: string): number[] {
    const returnedArray = []
    const firstElement = this.getFirstElement(range);
    const secondElement = this.getSecondElement(range);

    for (let i = firstElement; i <= secondElement; i++) {
      returnedArray.push(i)
    }

    return returnedArray;
  }

  solvePart1(): string {
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

  solvePart2(): string {
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