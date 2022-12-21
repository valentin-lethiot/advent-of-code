import { Day5, Instruction } from "../main/challenges/day-5/day-5";
import { formatInputs } from '../main/libs/fileReader';

const inputs = formatInputs('./src/tests/inputs/inputs-day5.txt')
const day = new Day5('Supply Stacks', inputs)

test('Test Day-5 getStartSchema', () => {
  const expectedResult = [
    '    [D]    ',
    '[N] [C]    ',
    '[Z] [M] [P]',
    ' 1   2   3 '
  ]
  const result = day.getStartSchema(inputs);

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 parseSchema', () => {
  const expectedResult = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', ' ', 'P']
  ];

  const schema = day.getStartSchema(inputs);
  const result = day.parseSchema(schema);

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 getBoxNumber', () => {
  const expectedResult = 3;

  const result = day.getBoxCount('move 3 from 2 to 1')

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 getFrom', () => {
  const expectedResult = 2;

  const result = day.getFrom('move 3 from 2 to 1')

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 getTo', () => {
  const expectedResult = 1;

  const result = day.getTo('move 3 from 2 to 1')

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 getInstructions', () => {
  const expectedResult: Instruction[] = [
    {
      boxCount: 1,
      indexFrom: 1,
      indexTo: 0,
    },
    {
      boxCount: 3,
      indexFrom: 0,
      indexTo: 2,
    },
    {
      boxCount: 2,
      indexFrom: 1,
      indexTo: 0,
    },
    {
      boxCount: 1,
      indexFrom: 0,
      indexTo: 1,
    },
  ];

  const result = day.getInstructions(inputs);

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 getBoxValue', () => {
  const expectedResult = 'P'
  const stacks = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', ' ', 'P']
  ];
  const instruction :Instruction= {
    boxCount: 1,
    indexFrom: 2,
    indexTo: 1,
  }

  const result = day.getBoxValue(stacks, instruction);

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 removeBox', () => {
  const expectedResult = [
    [' ', 'N', 'Z'],
    [' ', 'C', 'M'],
    [' ', ' ', 'P']
  ]
  const stacks = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', ' ', 'P']
  ];
  const instruction :Instruction= {
    boxCount: 1,
    indexFrom: 1,
    indexTo: 2,
  }

  const result = day.removeBox(stacks, instruction);

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 addBox', () => {
  const expectedResult = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', 'X', 'P']
  ]
  const stacks = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', ' ', 'P']
  ];
  const instruction :Instruction= {
    boxCount: 1,
    indexFrom: 1,
    indexTo: 2,
  }

  const result = day.addBox(stacks, instruction, 'X');

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 addBox use unshift', () => {
  const expectedResult = [
    [' ', 'N', 'Z'],
    ['W', 'D', 'C', 'M'],
    [' ', ' ', 'P']
  ]
  const stacks = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', ' ', 'P']
  ];
  const instruction :Instruction= {
    boxCount: 1,
    indexFrom: 1,
    indexTo: 1,
  }

  const result = day.addBox(stacks, instruction, 'W');

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 playInstructions', () => {
  const expectedResult = [
    [' ', ' ', 'Z'],
    [' ', 'C', 'M'],
    ['N', 'D', 'P']
  ]
  const stacks = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', ' ', 'P']
  ];
  const instruction :Instruction[] = [
    {
      boxCount: 1,
      indexFrom: 1,
      indexTo: 0,
    },
    {
      boxCount: 2,
      indexFrom: 0,
      indexTo: 2,
    }]

  const result = day.playInstructions(stacks, instruction);

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5 getAnswer', () => {
  const expectedResult = 'NDP'
  const stacks = [
    [' ', 'N', 'Z'],
    ['D', 'C', 'M'],
    [' ', ' ', 'P']
  ];

  const result = day.getAnswer(stacks);

  expect(result).toStrictEqual(expectedResult)
})

test('Test Day-5-1', () => {
  const result = day.solvePart1();

  expect(result).toBe("CMZ")
})


test('Test Day-5-2', () => {
  const result = day.solvePart2();

  expect(result).toBe("MCD")
})
