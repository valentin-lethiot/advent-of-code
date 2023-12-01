import { Part2 } from "./part-2";
import { expect, test, describe } from 'vitest'

const input = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
]

const day = new Part2(input)

describe('Part 2', () => {

  test('Solve', () => {
    const result = day.solve();
    
    expect(result).toBe("281")
  })
})

describe('getFirstDigit', () => {

  describe('with number ', () => {
    test('Classic', () => {
      const input = 'onffeofnefoufr7193eight'
      const output = '7'
      expect(day.getFirstDigit(input)).toBe(output)
    })
  
    test('At the beginnig', () => {
      const input = '1twofoureight'
      const output = '1'
      expect(day.getFirstDigit(input)).toBe(output)
    })
  
    test('At the end', () => {
      const input = 'oureigfht9'
      const output = '9'
      expect(day.getFirstDigit(input)).toBe(output)
    })
  })

  describe('with letters ', () => {
    test('Classic', () => {
      const input = 'onffeofnefour7193eight'
      const output = '4'
      expect(day.getFirstDigit(input)).toBe(output)
    })

    test('At the beginnig', () => {
      const input = 'oneonefoureight'
      const output = '1'
      expect(day.getFirstDigit(input)).toBe(output)
    })

    test('At the end', () => {
      const input = 'oureight'
      const output = '8'
      expect(day.getFirstDigit(input)).toBe(output)
    })

    test('With two same number', () => {
      const input = 'fdsgsdrfivefive'
      const output = '5'
      expect(day.getFirstDigit(input)).toBe(output)
    })
  })
})

describe('getSecondDigit', () => {

  describe('with number ', () => {
    test('Classic', () => {
      const input = 'onffeofnefoufr7193eifght'
      const output = '3'
      expect(day.getSecondDigit(input)).toBe(output)
    })
  
    test('At the beginnig', () => {
      const input = '1twefeofoqsdfureifght'
      const output = '1'
      expect(day.getSecondDigit(input)).toBe(output)
    })
  
    test('At the end', () => {
      const input = 'oureight9'
      const output = '9'
      expect(day.getSecondDigit(input)).toBe(output)
    })
  })

  describe('with letters ', () => {
    test('Classic', () => {
      const input = 'onffeofnefour7193eight'
      const output = '8'
      expect(day.getSecondDigit(input)).toBe(output)
    })

    test('At the beginnig', () => {
      const input = 'oneonfdsefofdsfdsureigfdsfht'
      const output = '1'
      expect(day.getSecondDigit(input)).toBe(output)
    })

    test('At the end', () => {
      const input = 'our7eight'
      const output = '8'
      expect(day.getSecondDigit(input)).toBe(output)
    })

    test('With two same number', () => {
      const input = 'fdsgsdrfive6five'
      const output = '5'
      expect(day.getSecondDigit(input)).toBe(output)
    })
  })
})