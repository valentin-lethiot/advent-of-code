import { Part } from "../../../utils/part";

export class Part1 implements Part {
  inputs: string[];
  counter: number = 0;

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {
    let start = 50;

    for (const input of this.inputs) {
      const direction = this.getDirection(input);
      const distance = this.getDistance(input);
      
      for (let i = 0; i < distance; i++) {
        if (direction === 'L') {
          start--;
          if (start < 0) start = 99;
        } else {
          start++;
          if (start >= 100) start = 0;
        }
      }

      if (start === 0) {
        this.counter++;
      }
    }



    return this.counter.toString();
  }

  getDirection(input: string): string {
    return input.charAt(0);
  }

  getDistance(input: string): number {
    return parseInt(input.slice(1));
  }
}
