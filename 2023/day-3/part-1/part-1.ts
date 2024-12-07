import { isNumber } from '../../../utils/charDetector'
import { Part } from '../../../utils/part'

export type ParsedNumber = {
  number: string,
  firstIndex: number,
  lastIndex: number,
  lineIndex: number
}
export type ParsedNumbers = ParsedNumber[]

export class Part1 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() : string {
    const partNumbers = this.parseInput()
    return String(partNumbers.reduce((acc, partNumber) =>
      acc + parseInt(partNumber.number),
      0,
    ));
  };

  parseInput(): ParsedNumbers {
    let parsedNumbers : ParsedNumbers = []

    this.inputs.forEach((line, index) => {
      parsedNumbers = parsedNumbers.concat(this.parseLine(line, index))
    })

    return this.getPartNumbers(parsedNumbers)
  }

  parseLine(line: string, lineIndex: number): ParsedNumbers {
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

  getPartNumbers(parsedNumbers: ParsedNumbers): ParsedNumbers {
    return parsedNumbers.filter(parsedNumber => this.isPartNumber(parsedNumber))
  }

  isPartNumber(parsedNumber: ParsedNumber): boolean {
    return this.checkUpperLine(parsedNumber) || this.checkCurrentLine(parsedNumber) || this.checkLowerLine(parsedNumber)
  }

  checkUpperLine(parsedNumber: ParsedNumber): boolean {
    const lineToCheck = this.inputs[parsedNumber.lineIndex - 1]
    if (!lineToCheck) return false

    for (let i = parsedNumber.firstIndex - 1; i <= parsedNumber.lastIndex +1; i++) {
      const charToCheck = lineToCheck[i]
      if (charToCheck && charToCheck !== '.' && !isNumber(charToCheck)) {
        return true
      }
    }

    return false
  }

  checkCurrentLine(parsedNumber: ParsedNumber): boolean{
    const lineToCheck = this.inputs[parsedNumber.lineIndex]

    const firstCharToCheck = lineToCheck[parsedNumber.firstIndex -1]
    const lastCharToCheck = lineToCheck[parsedNumber.lastIndex +1]
    return (firstCharToCheck && firstCharToCheck !== '.' && !isNumber(firstCharToCheck)) ||
    (lastCharToCheck && lastCharToCheck !== '.' && !isNumber(lastCharToCheck))
  }

  checkLowerLine(parsedNumber: ParsedNumber): boolean{
    const lineToCheck = this.inputs[parsedNumber.lineIndex + 1]
    if (!lineToCheck) return false

    for (let i = parsedNumber.firstIndex - 1; i <= parsedNumber.lastIndex +1; i++) {
      const charToCheck = lineToCheck[i]
      if (charToCheck && charToCheck !== '.' && !isNumber(charToCheck)) {
        return true
      }
    }

    return false
  }
}