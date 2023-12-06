import { isNumber } from '../../../utils/charDetector'
import { Part } from '../../../utils/part'

export type ParsedNumber = {
  number: string,
  firstIndex: number,
  lastIndex: number,
  lineIndex: number
}
export type ParsedNumbers = ParsedNumber[]

type Gear = {
  adjacentNumbers: [number, number],
  lineIndex: number,
  index: number
}
export type Gears = Gear[]

export class Part2 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() : string {
    let gears = this.findGears()
    gears = this.filterGears(gears)
    return String(this.getGearsRatio(gears))
  };

  findGears(): Gears {
    let foundGears : Gears = []

    this.inputs.forEach((line, index) => {
      foundGears = foundGears.concat(this.parseLine(line, index))
    })

    return foundGears
  }

  parseLine(line: string, lineIndex: number): Gears {
    const gears : Gears = []

    for (let i = 0; i < line.length; i++) {
      if (line[i] === '*') {
        gears.push({
          adjacentNumbers: [-1, -1],
          index: i,
          lineIndex
        })
      }
    }
    
    return gears;
  }

  filterGears(gears: Gears): Gears {
    return gears.filter(gear => this.isGear(gear))
  }

  isGear(gear: Gear):boolean {
    let foundNumbers = 0

    foundNumbers += this.getUpperLineNumbers(gear)
    foundNumbers += this.getCurrentLineNumbers(gear)
    foundNumbers += this.getLowerLineNumbers(gear)

    return foundNumbers === 2;
  }

  getUpperLineNumbers(gear: Gear): number {
    const lineToCheck = this.inputs[gear.lineIndex - 1]
    if (!lineToCheck) return 0

    if (isNumber(lineToCheck[gear.index -1]) && isNumber(lineToCheck[gear.index + 1])) {
      if (isNumber(lineToCheck[gear.index])) return 1
      else return 2
    }
    if (isNumber(lineToCheck[gear.index -1]) || isNumber(lineToCheck[gear.index + 1])) return 1
    return 0
  }

  getCurrentLineNumbers(gear: Gear): number{
    const lineToCheck = this.inputs[gear.lineIndex]
    
    let returnedNumber = 0
    if (isNumber(lineToCheck[gear.index -1])) returnedNumber++
    if (isNumber(lineToCheck[gear.index +1])) returnedNumber++
    return returnedNumber
  }

  getLowerLineNumbers(gear: Gear): number{
    const lineToCheck = this.inputs[gear.lineIndex + 1]
    if (!lineToCheck) return 0 

    if (isNumber(lineToCheck[gear.index -1]) && isNumber(lineToCheck[gear.index + 1])) {
      if (isNumber(lineToCheck[gear.index])) return 1
      else return 2
    }
    if (isNumber(lineToCheck[gear.index -1]) || isNumber(lineToCheck[gear.index + 1])) return 1
    return 0  
  }

  getGearsRatio(gears: Gears): number {
    return gears.reduce((acc, gear) => 
    acc + this.getGearRatio(gear),
    0,
  );
  }

  getGearRatio(gear: Gear): number {
    return this.getUpperLineRatio(gear) * this.getCurrentLineRatio(gear) * this.getLowerLineRatio(gear)
  }

  getUpperLineRatio(gear: Gear): number {
    let numbers = this.parseLineNumbers(this.inputs[gear.lineIndex - 1], gear.lineIndex - 1)

    numbers = numbers.filter(number => this.isAdjacent(number, gear))

    if (numbers.length === 1 && this.isAdjacent(numbers[0], gear)) return parseInt(numbers[0].number)
    if (numbers.length === 2) {
      const first = this.isAdjacent(numbers[0], gear) ? numbers[0].number : '1'
      const second = this.isAdjacent(numbers[1], gear) ? numbers[1].number : '1'
      return parseInt(first) * parseInt(second)
    } 
    return 1
  }
  
  getCurrentLineRatio(gear: Gear): number {
    let numbers = this.parseLineNumbers(this.inputs[gear.lineIndex], gear.lineIndex)

    numbers = numbers.filter(number => this.isAdjacent(number, gear))

    if (numbers.length === 1 && this.isAdjacent(numbers[0], gear)) return parseInt(numbers[0].number)
    if (numbers.length === 2) {
      const first = this.isAdjacent(numbers[0], gear) ? numbers[0].number : '1'
      const second = this.isAdjacent(numbers[1], gear) ? numbers[1].number : '1'
      return parseInt(first) * parseInt(second)
    } 
    return 1
  }
  getLowerLineRatio(gear: Gear): number {
    let numbers = this.parseLineNumbers(this.inputs[gear.lineIndex + 1], gear.lineIndex + 1)

    numbers = numbers.filter(number => this.isAdjacent(number, gear))

    if (numbers.length === 1 && this.isAdjacent(numbers[0], gear)) return parseInt(numbers[0].number)
    if (numbers.length === 2) {
      const first = this.isAdjacent(numbers[0], gear) ? numbers[0].number : '1'
      const second = this.isAdjacent(numbers[1], gear) ? numbers[1].number : '1'
      return parseInt(first) * parseInt(second)
    } 
    return 1
  }

  parseLineNumbers(line: string, lineIndex: number): ParsedNumbers {
    if (!line) return []
    const parsedNumbers : ParsedNumbers = []

    let index = 0;

    while(index < line.length) {
      if (isNumber(line[index])) {
        const foundNumber : ParsedNumber = {
          number: line[index],
          firstIndex: index,
          lastIndex: index,
          lineIndex
        }

        while(index+1 < line.length && isNumber(line[index+1])) {          
          index++
          foundNumber.number = `${foundNumber.number}${line[index]}`
          foundNumber.lastIndex = index
        }

        parsedNumbers.push(foundNumber)
      }
      index++
    }
    
    return parsedNumbers;
  }

  isAdjacent(parsedNumber: ParsedNumber, gear: Gear): boolean {
    return (parsedNumber.firstIndex === gear.index) ||
     (parsedNumber.lastIndex === gear.index) ||
     (parsedNumber.firstIndex === gear.index + 1) ||
     (parsedNumber.lastIndex === gear.index + 1) ||
     (parsedNumber.firstIndex < gear.index && parsedNumber.lastIndex > gear.index) ||
     (parsedNumber.firstIndex === gear.index - 1) ||
     (parsedNumber.lastIndex === gear.index - 1)
  }
}