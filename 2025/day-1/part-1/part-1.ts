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
      
      console.log(`Input: ${input}, Direction: ${direction}, Distance: ${distance}, Start: ${start}`);


      console.log((99 + 1) % 100);
      //start = (start + (direction === 'L' ? -distance : distance)) % 100;
      
      // if (direction === 'L') {
      //   if (distance - start < 0 || distance - start === 0) {
      //     this.counter++;
      //   }
      //   start -= distance;

      // } else {
      //   if (distance + start > 99 || distance + start === 0) {
      //     this.counter++;
      //   }

      //   start += (distance % 100);
      // }
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
