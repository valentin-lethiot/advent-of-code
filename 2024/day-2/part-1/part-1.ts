import { Part } from "../../../utils/part";
import { stringsToNumbers } from "../../../utils/types/types.utils";

export class Part1 implements Part {
  inputs: string[];
  reports: number[][] = [];

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {
    this.splitInputs();

    return this.reports
      .reduce((acc, report) => (this.handleReport(report) ? acc + 1 : acc), 0)
      .toString();
  }

  splitInputs() {
    this.inputs.forEach((input) => {
      const splitedInput = input.split(" ");

      this.reports.push(stringsToNumbers(splitedInput));
    });
  }

  handleReport(report: number[]): boolean {
    return (
      this.handleIncreasingReport([...report]) ||
      this.handleDecreasingReport([...report])
    );
  }

  handleIncreasingReport(report: number[]): boolean {
    for (let i = 0; i < report.length - 1; i++) {
      if (report[i] >= report[i + 1]) return false;
      if (Math.abs(report[i] - report[i + 1]) > 3) return false;
    }

    return true;
  }

  handleDecreasingReport(report: number[]): boolean {
    for (let i = 0; i < report.length - 1; i++) {
      if (report[i] <= report[i + 1]) return false;
      if (Math.abs(report[i] - report[i + 1]) > 3) return false;
    }

    return true;
  }
}
