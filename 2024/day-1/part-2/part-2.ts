import { Part } from "../../../utils/part";
import { stringToNumber } from "../../../utils/types/types.utils";

export class Part2 implements Part {
  inputs: string[];
  leftList: number[] = [];
  rightList: number[] = [];

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {
    this.splitInputs();

    let sum = 0;

    this.leftList.forEach((leftNumber) => {
      sum += leftNumber * this.getAppearences(leftNumber);
    });

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

  getAppearences(number: number): number {
    return this.rightList.filter((rightNumber) => rightNumber === number)
      .length;
  }
}
