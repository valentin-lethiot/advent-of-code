import { Part } from "../../../utils/part";
import { stringToNumber } from "../../../utils/types/types.utils";

export class Part1 implements Part {
  inputs: string[];
  leftList: number[] = [];
  rightList: number[] = [];

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {
    this.splitInputs();

    let sum = 0;
    while (this.leftList.length > 0) {
      const leftSmallestNumberIndex = this.getSmallestNumberIndex(
        this.leftList
      );
      const rightSmallestNumberIndex = this.getSmallestNumberIndex(
        this.rightList
      );

      sum += Math.abs(
        this.leftList[leftSmallestNumberIndex] -
          this.rightList[rightSmallestNumberIndex]
      );

      this.leftList.splice(leftSmallestNumberIndex, 1);
      this.rightList.splice(rightSmallestNumberIndex, 1);
    }
    return sum.toString();
  }

  splitInputs() {
    this.inputs.forEach((input) => {
      const splitedInput = input.split("   ");

      this.leftList.push(stringToNumber(splitedInput[0]));
      this.rightList.push(stringToNumber(splitedInput[1]));
    });
  }

  getSmallestNumberIndex(list: number[]): number {
    return list.indexOf(Math.min(...list));
  }
}
