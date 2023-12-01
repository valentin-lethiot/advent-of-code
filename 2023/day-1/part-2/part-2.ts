import { Part } from '../../../utils/part'

const ASCII0 = '0'.charCodeAt(0)
const ASCII9 = '9'.charCodeAt(0)

const NUMBERS_IN_LETTERS = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

type foundDigit = {
  index: number,
  value: string
}

type foundDigits = foundDigit[]

export class Part2 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() :string {
    const answer = this.inputs.reduce((acc, inputRow) => 
      acc + parseInt(`${this.getFirstDigit(inputRow)}${this.getSecondDigit(inputRow)}`),
      0,
    );

    return String(answer)
  };

  getFirstDigit(row: string): string {
    const potentialDigits : foundDigits = []

    // Find all numbers in letters
    Object.keys(NUMBERS_IN_LETTERS).forEach(numberInLetter => {
      if (row.indexOf(numberInLetter) >= 0) {
        let idx = row.indexOf(numberInLetter);

        while (idx !== -1) {
          potentialDigits.push({
            index: idx,
            value: NUMBERS_IN_LETTERS[numberInLetter]
          });
          idx = row.indexOf(numberInLetter, idx + 1);
        }
      }
    })

    // Find the first number
    for (let i = 0; i < row.length; i++) {
      const letterValue = row[i].charCodeAt(0)
      if (letterValue >= ASCII0 && letterValue <= ASCII9) {
        potentialDigits.push({
          index: i,
          value: row[i]
        })
        break
      }
    }

    // Return the first found digit
    return potentialDigits.reduce((acc, potentialDigit) => {
        return acc.index < potentialDigit.index ? acc : potentialDigit
    }).value
  }

  getSecondDigit(row: string): string {
    const potentialDigits : foundDigits = []

    // Find all numbers in letters
    Object.keys(NUMBERS_IN_LETTERS).forEach(numberInLetter => {
      if (row.indexOf(numberInLetter) >= 0) {
        let idx = row.indexOf(numberInLetter);

        while (idx !== -1) {
          potentialDigits.push({
            index: idx,
            value: NUMBERS_IN_LETTERS[numberInLetter]
          });
          idx = row.indexOf(numberInLetter, idx + 1);
        }
      }
    })

    // Find the last number
    for (let i = row.length - 1; i >= 0; i--) {
      const letterValue = row[i].charCodeAt(0)
      if (letterValue >= ASCII0 && letterValue <= ASCII9) {
        potentialDigits.push({
          index: i,
          value: row[i]
        })
        break
      }
    }

    // Return the first found digit
    return potentialDigits.reduce((acc, potentialDigit) => {
        return acc.index > potentialDigit.index ? acc : potentialDigit
    }).value
  }
}