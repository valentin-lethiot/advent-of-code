import { Part } from "../../../utils/part";
import { stringsToNumbers } from "../../../utils/types/types.utils";

export class Part2 implements Part {
  inputs: string[];
  reports: number[][] = [];

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  solve(): string {
    this.splitInputs();

    let safe = 0;
    for (const report of this.reports) {
      if (this.checkReport(report)) safe++;
    }

    return safe.toString();
  }

  checkReport(report: number[]): boolean {
    if (this.isValidReport(report)) return true;

    for (let i = 0; i < report.length; i++) {
      const subReport = report.slice();
      subReport.splice(i, 1);
      if (this.isValidReport(subReport)) return true;
    }

    return false;
  }

  splitInputs() {
    this.inputs.forEach((input) => {
      const splitedInput = input.split(" ");

      this.reports.push(stringsToNumbers(splitedInput));
    });
  }

  isValidReport(report: number[]): boolean {
    return (
      this.handleIncreasingReport([...report]) ||
      this.handleDecreasingReport([...report])
    );
  }

  handleIncreasingReport(report: number[]): boolean {
    for (let i = 0; i < report.length; i++) {
      if (report[i] >= report[i + 1]) return false;
      if (Math.abs(report[i] - report[i + 1]) > 3) return false;
    }

    return true;
  }

  handleDecreasingReport(report: number[]): boolean {
    for (let i = 0; i < report.length; i++) {
      if (report[i] <= report[i + 1]) return false;
      if (Math.abs(report[i] - report[i + 1]) > 3) return false;
    }

    return true;
  }
}
