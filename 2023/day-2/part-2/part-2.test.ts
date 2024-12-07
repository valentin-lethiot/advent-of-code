import { Part2, Game, Set } from "./part-2";
import { expect, test, describe } from 'vitest'

const input = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
]

const day = new Part2(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("2286")
})

describe('parseGame', () => {
  test('Should return an array with a game well formatted', () => {
    const expectedResult : Game = {
      id: 1,
      sets: [
        {
          red: 4,
          blue: 3,
          green: 0
        },
        {
          red: 1,
          blue: 6,
          green: 2
        },
        {
          red: 0,
          blue: 0,
          green: 2
        }
      ]
    }

    expect(day.parseGame(input[0])).toEqual(expectedResult)
  })
})