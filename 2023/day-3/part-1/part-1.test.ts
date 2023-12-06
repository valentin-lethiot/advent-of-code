import { ParsedNumbers, Part1 } from "./part-1";
import { expect, test, describe } from 'vitest'

const input = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
  '...*....42',
]

const day = new Part1(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("4361")
})

describe('parseLine', () => {
  test('Should return an empty array when no numbers are inside the line', () => {
    expect(day.parseLine(input[1], 1)).toHaveLength(0)
  })
  test('Should return the correct array when one number is inside the line', () => {
    const expectedResult :ParsedNumbers = [{
      number: '592',
      firstIndex: 2,
      lastIndex: 4,
      lineIndex: 6
    }]
    expect(day.parseLine(input[6], 6)).toEqual(expectedResult)
  })
  test('Should return the correct array when some numbers are inside the line', () => {
    const expectedResult :ParsedNumbers = [{
      number: '35',
      firstIndex: 2,
      lastIndex: 3,
      lineIndex: 2
    }, {
      number: '633',
      firstIndex: 6,
      lastIndex: 8,
      lineIndex: 2
    }]
    expect(day.parseLine(input[2], 2)).toEqual(expectedResult)
  })
  test('Should return the correct array when one number start the line', () => {
    const expectedResult :ParsedNumbers = [{
      number: '617',
      firstIndex: 0,
      lastIndex: 2,
      lineIndex: 4
    }]
    expect(day.parseLine(input[4], 4)).toEqual(expectedResult)
  })
  test('Should return the correct array when one number end the line', () => {
    const expectedResult :ParsedNumbers = [{
      number: '42',
      firstIndex: 8,
      lastIndex: 9,
      lineIndex: 10
    }]
    expect(day.parseLine(input[10], 10)).toEqual(expectedResult)
  })
})