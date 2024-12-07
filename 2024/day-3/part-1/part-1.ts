import { Part } from "../../../utils/part";
import { findAllOccurrences } from "../../../utils/regex/regex.utils";

export class Part1 implements Part {
  inputs: string[];
  regex = /mul\([0-9]{0,3},[0-9]{0,3}\)/;
  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {
    const input = this.inputs[0];

    const matchs = findAllOccurrences(this.regex, input);

    return matchs
      .reduce((acc, curr) => (acc += this.getValue(curr)), 0)
      .toString();
  }

  getValue(input: string): number {
    input = input.substring(4, input.length - 1);

    return parseInt(input.split(",")[0]) * parseInt(input.split(",")[1]);
  }
}
