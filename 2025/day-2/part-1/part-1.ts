import { Part } from "../../../utils/part";

export class Part1 implements Part {
  inputs: string[];
  counter: number = 0;

  constructor(inputs: string[]) {
    this.inputs = this.splitByComma(inputs[0]);
  }

  solve(): string {
    for (const input of this.inputs) {

      const ids = this.getRange(input);
      for (const id of ids) {
        if(id.length % 2 != 0) {
          continue
        }

        this.checkValidId(id)
      }
    }

    return this.counter.toString();
  }

  splitByComma(input: string): string[] {
    return input.split(",");
  }

  getRange(input: string): string[] {
    const [start, end] = input.split("-");

    const range = [];

    let current = start;
    while (parseInt(current) <= parseInt(end)) {
      range.push(current);
      current = (parseInt(current) + 1).toString();
    }

    return range;
  }

  checkValidId(id: string): void {
    const firstHalf = id.slice(0, id.length / 2);
    const secondHalf = id.slice(id.length / 2);
    
    if (firstHalf === secondHalf) {
      this.counter += parseInt(id);
    }
  }
}
