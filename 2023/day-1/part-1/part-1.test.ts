import { Part1 } from "./part-1";
import { expect, test, describe } from 'vitest'

const input = [
  '1abc2',
  'pqr3stu8vwx',
  'a1b2c3d4e5f',
  'treb7uchet',
]

const day = new Part1(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("142")
})

describe('getFirstDigit', () => {
  test('Classic', () => {
    const input = 'oneonefour7193eight'
    const output = '7'
    expect(day.getFirstDigit(input)).toBe(output)
  })

  test('At the beginnig', () => {
    const input = '0oneonefoureight'
    const output = '0'
    expect(day.getFirstDigit(input)).toBe(output)
  })

  test('At the end', () => {
    const input = 'oneonefoureight9'
    const output = '9'
    expect(day.getFirstDigit(input)).toBe(output)
  })
})

describe('getSecondDigit', () => {
  test('Classic', () => {
    const input = 'oneonefour7193eight'
    const output = '3'
    expect(day.getSecondDigit(input)).toBe(output)
  })

  test('At the beginnig', () => {
    const input = '0oneonefoureight'
    const output = '0'
    expect(day.getSecondDigit(input)).toBe(output)
  })

  test('At the end', () => {
    const input = 'oneonefoureight9'
    const output = '9'
    expect(day.getSecondDigit(input)).toBe(output)
  })
})