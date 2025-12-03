import { Part } from "../../../utils/part";

export class Part2 implements Part {
  inputs: string[];
  counter: number = 0;

  constructor(inputs: string[]) {
    this.inputs = this.splitByComma(inputs[0]);
  }

  solve(): string {
    for (const input of this.inputs) {

      const ids = this.getRange(input);
      for (const id of ids) {
        if (this.isIdValid(id)) this.counter += parseInt(id);
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

  isIdValid(id: string): boolean {
    const length = id.length;
    const halfLength = Math.floor(length / 2);

    for (let i = 1; i <= halfLength; i++) {
      const splittedId = id.match(new RegExp(`.{1,${i}}`, 'g'))

      if(splittedId?.every((part) => part === splittedId[0])) {
        return true;
      }
    }
    return false;
  }
}
