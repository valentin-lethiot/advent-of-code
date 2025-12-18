import { Day } from "../../utils/day";
import { Part1 } from "./part-1/part-1";
import { Part2 } from "./part-2/part-2";

export class Day3 implements Day {
  inputs: string[];
  name: string;

  constructor(name: string, inputs: string[]) {
    this.inputs = inputs;
    this.name = name;
  }

  solvePart1(): string {
    return new Part1(this.inputs).solve();
  }
  solvePart2(): string {
    return new Part2(this.inputs).solve();
  }
}
