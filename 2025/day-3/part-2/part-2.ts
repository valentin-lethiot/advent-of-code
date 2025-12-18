import { Part } from "../../../utils/part";

export class Part2 implements Part {
  inputs: string[];
  answer: number = 0;
  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {

    for (const input of this.inputs) {

      this.answer += Number(this.findHighestDigits(input));
    }

    return this.answer.toString();
  }

  findHighestDigits(str: string): string {
    let bank = str.split('').map(Number);

    const retVal: Array<string> = [];
    let index: number = 0;
    while (retVal.length < 12 && index < bank.length) {
      const bankSlice = bank.slice(index, bank.length - (11 - retVal.length)).sort((a, b) => Number(b) - Number(a));
      retVal.push(bankSlice[0]);
      index = bank.indexOf(bankSlice[0], index) + 1;
    }
    return retVal.join('');
  }
}
