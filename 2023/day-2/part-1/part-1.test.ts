import { Part1, Game, Set } from "./part-1";
import { expect, test, describe } from 'vitest'

const input = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
]

const day = new Part1(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("8")
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

describe('checkGames', () => {
  test('Should return the good number when all the sets are valid', () => {
    const expectedResult = 6;
    const games : Game[] = [{
      id: 1,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    },
    {
      id: 2,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    },
    {
      id: 3,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    }]
    expect(day.checkGames(games)).toEqual(expectedResult)
  })
  test('Should return the good number when some the sets are valid', () => {
    const expectedResult = 5;
    const games : Game[] = [{
      id: 1,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 20,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    },
    {
      id: 2,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    },
    {
      id: 3,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    }]
    expect(day.checkGames(games)).toEqual(expectedResult)
  })
  test('Should return 0 when all the sets are invalid', () => {
    const expectedResult = 0;
    const games : Game[] = [{
      id: 1,
      sets: [
        {
          red: 3,
          green: 20,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    },
    {
      id: 2,
      sets: [
        {
          red: 25,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    },
    {
      id: 3,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 32,
          green: 0,
          blue: 0
        }
      ]
    }]
    expect(day.checkGames(games)).toEqual(expectedResult)
  })
})

describe('isGameValid', () => {
  test('Should return true if all the sets are valid', () => {
    const expectedResult = true;
    const game : Game = {
      id: 1,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    }
    expect(day.isGameValid(game)).toEqual(expectedResult)
  })

  test('Should return false if a set is invalid', () => {
    const expectedResult = false;
    const game : Game = {
      id: 1,
      sets: [
        {
          red: 3,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 25,
          blue: 0
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    }
    expect(day.isGameValid(game)).toEqual(expectedResult)
  })

  test('Should return false if some sets are invalid', () => {
    const expectedResult = false;
    const game : Game = {
      id: 1,
      sets: [
        {
          red: 32,
          green: 13,
          blue: 9
        },
        {
          red: 1,
          green: 13,
          blue: 42
        },
        {
          red: 0,
          green: 0,
          blue: 0
        }
      ]
    }
    expect(day.isGameValid(game)).toEqual(expectedResult)
  })

  test('Should return false if all the sets are invalid', () => {
    const expectedResult = false;
    const game : Game = {
      id: 1,
      sets: [
        {
          red: 3,
          green: 90,
          blue: 9
        },
        {
          red: 1,
          green: 120,
          blue: 0
        },
        {
          red: 0,
          green: 130,
          blue: 0
        }
      ]
    }
    expect(day.isGameValid(game)).toEqual(expectedResult)
  })
})

describe('isSetValid', () => {
  test('Should return true if the rules are respected', () => {
    const expectedResult = true;
    const set: Set = {
      red: 3,
      green: 13,
      blue: 9
    }
    expect(day.isSetValid(set)).toEqual(expectedResult)
  })

  test('Should return false if one of the rule is not respected', () => {
    const expectedResult = false;
    const set: Set = {
      red: 3,
      green: 14,
      blue: 9
    }
    expect(day.isSetValid(set)).toEqual(expectedResult)
  })

  test('Should return false if some rules are not respected', () => {
    const expectedResult = false;
    const set: Set = {
      red: 100,
      green: 0,
      blue: 20
    }
    expect(day.isSetValid(set)).toEqual(expectedResult)
  })

  test('Should return false if all the rules are not respected', () => {
    const expectedResult = false;
    const set: Set = {
      red: 25,
      green: 50,
      blue: 75
    }
    expect(day.isSetValid(set)).toEqual(expectedResult)
  })

})