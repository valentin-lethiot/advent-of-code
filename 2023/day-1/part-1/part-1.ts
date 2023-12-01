import { Part } from '../../../utils/part'

const ASCII0 = '0'.charCodeAt(0)
const ASCII9 = '9'.charCodeAt(0)

export class Part1 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() : string {
    const answer = this.inputs.reduce((acc, inputRow) => 
      acc + parseInt(`${this.getFirstDigit(inputRow)}${this.getSecondDigit(inputRow)}`),
      0,
    );

    return String(answer)
  };
  
  getFirstDigit(row: string): string {
    for (let i = 0; i < row.length; i++) {
      const letterValue = row[i].charCodeAt(0)
      if (letterValue >= ASCII0 && letterValue <= ASCII9) {
        return row[i]
      }
    }
  }

  getSecondDigit(row: string): string {
    for (let i = row.length - 1; i >= 0; i--) {
      const letterValue = row[i].charCodeAt(0)
      if (letterValue >= ASCII0 && letterValue <= ASCII9) {
        return row[i]
      }
    }
  }
}