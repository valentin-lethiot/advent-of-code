import { Part1 } from "./part-1/part-1";
import { Day } from "../../utils/day";

export class Day5 implements Day {
  inputs: string[]
  name: string

  constructor(name: string, inputs: string[]) {
    this.inputs = inputs;
    this.name = name;
  }
  
  solvePart1() :string {
    return new Part1(this.inputs).solve()
  };

  solvePart2() :string {
    return ''
  }
}