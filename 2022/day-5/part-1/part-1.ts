import { Part } from '../../../utils/part'

export type Instruction = {
  boxCount: number;
  indexFrom: number;
  indexTo: number;
};
export type Stack = string[]
export type Stacks = Stack[]

export class Part1 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  parseSchema = (schema: string[]): Stack[] => {
    const parsedStacks = [];
    const lineLength = schema[0].length;
    const stacksLength = schema.length
  
    for (let charIndex = 0; charIndex < lineLength; charIndex++) {
      if (schema[stacksLength - 1][charIndex] === ' ') continue;

      const stack = []
      for (let rowIndex = 0; rowIndex < stacksLength; rowIndex++) {
        stack.push(schema[rowIndex][charIndex])
      }

      stack.pop(); // pop to remove the index of the stack
      parsedStacks.push(stack);
    }

    return parsedStacks;
  }

  getStartSchema = (inputs: string[]): string[] => {
    const lines = []
    
    let line = 0;
    do {
      lines.push(inputs[line]);
      line++;
    } while(inputs[line] !== '')

    return lines;
  }

  getBoxCount = (line: string): number => {
    return Number(line.split(' ')[1])
  }

  getFrom = (line: string): number => {
    return Number(line.split(' ')[3])
  }

  getTo = (line: string): number => {
    return Number(line.split(' ')[5])
  }

  getInstructions = (fileInputs: string[]): Instruction[] => {
    const returnedInstructions = []

    let instructionsStartIndex = 0;
    while (fileInputs[instructionsStartIndex] !== '') {
        instructionsStartIndex++;
    }

    instructionsStartIndex++

    for (let i = instructionsStartIndex; i < fileInputs.length; i++) {
      const line = fileInputs[i]
      returnedInstructions.push(
        {
          boxCount: this.getBoxCount(line),
          indexFrom: this.getFrom(line) - 1,
          indexTo: this.getTo(line) - 1,
        } as Instruction
      )
    }

    return returnedInstructions;
  }

  removeBox = (stacks: Stacks, instruction: Instruction): Stacks => {
    let index = 0;
    while (stacks[instruction.indexFrom][index] === ' ') {
      index++
    }
    stacks[instruction.indexFrom][index] = ' '
    return stacks;
  }

  getBoxValue = (stacks: Stacks, instruction: Instruction): string => {
    let value = '';
    let index = 0;
    while (stacks[instruction.indexFrom][index] === ' ') {
      value = stacks[instruction.indexFrom][index];
      index++
    }
    value = stacks[instruction.indexFrom][index];

    return value
  }

  addBox = (stacks: Stacks, instruction: Instruction, boxValue: string): Stacks => {
    let index = 0;
    
    while (stacks[instruction.indexTo][index] === ' ') {
      index++
    }
    if (index === 0) {
      stacks[instruction.indexTo].unshift(boxValue)
    } else {
      stacks[instruction.indexTo][index-1] = boxValue;
    }

    return stacks;
  }

  moveBox = (stacks: Stacks, instruction: Instruction): Stacks => {
    const boxValue = this.getBoxValue(stacks, instruction);
    stacks = this.removeBox(stacks, instruction);
    stacks = this.addBox(stacks, instruction, boxValue)
    return stacks;
  }

  playInstructions = (stacks: Stacks, instructions: Instruction[]): Stacks => {
    instructions.forEach(instruction => {
      for (let i = 0; i < instruction.boxCount; i++) {
        stacks = this.moveBox(stacks, instruction)
      }
    })
    return stacks;
  }
  
  getAnswer = (stacks: Stacks): string => {
    let answer = ''
  
    stacks.forEach(stack => {
      let index = 0;
      while (stack[index] === ' ') {
        index++
      }
      answer += stack[index]
    })

    return answer;
  }

  solve = (): string => {
    const instructions = this.getInstructions(this.inputs);
    const schema = this.getStartSchema(this.inputs);
    const stacks = this.parseSchema(schema);

    const finalStacks = this.playInstructions(stacks, instructions);
    return this.getAnswer(finalStacks);
  };
}