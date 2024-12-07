import { Part } from "../../../utils/part";
import { findAllOccurrencesWithIndex } from "../../../utils/regex/regex.utils";

export class Part2 implements Part {
  inputs: string[];
  mulRegex = /mul\([0-9]{0,3},[0-9]{0,3}\)/;
  doRegex = /do\(\)/;
  dontRegex = /don't\(\)/;

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {
    const input = this.inputs[0];

    const muls = findAllOccurrencesWithIndex(this.mulRegex, input);
    const dos = findAllOccurrencesWithIndex(this.doRegex, input);
    const donts = findAllOccurrencesWithIndex(this.dontRegex, input);

    const matchs = [...muls, ...dos, ...donts]
      .sort((a, b) => a.index - b.index)
      .map((m) => m.value);

    let active = true;

    return matchs
      .reduce((acc, curr) => {
        if (curr === "do()") {
          active = true;
          return acc;
        }
        if (curr === "don't()") {
          active = false;
          return acc;
        }
        return active ? acc + this.getMulValue(curr) : acc;
      }, 0)
      .toString();
  }

  getMulValue(input: string): number {
    input = input.substring(4, input.length - 1);

    return parseInt(input.split(",")[0]) * parseInt(input.split(",")[1]);
  }
}
