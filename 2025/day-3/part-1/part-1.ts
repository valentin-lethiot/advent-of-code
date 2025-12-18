import { Part } from "../../../utils/part";

export class Part1 implements Part {
  inputs: string[];
  answer: number = 0;
  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {

    for (const input of this.inputs) {
      this.answer += this.findHighestDigits(input);
    }

    return this.answer.toString();
  }

  findHighestDigits(str: string): number {
    const possibilities: number[] = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        possibilities.push(Number(str[i] + str[j]));
      }
    }
    
    return Math.max(...possibilities);
  }
}
