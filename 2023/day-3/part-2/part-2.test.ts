import { Gears, Part2 } from "./part-2";
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
]

const day = new Part2(input)

test('Solve', () => {
  const result = day.solve();
  
  expect(result).toBe("467835")
})

test('Solve 2', () => {
  const input2 = [
    '...-........*.....388........%...772....................=...57....163..932..41...............*...693.116*......#.....*..............434.....',
    '......*489...248..*........395...=.....................676..#..........*...................835...........570.199..678.......................',
    '780...............713................952...479...379..................83.554.........919.......486..980...............984.$468.....720......',
  ]
  const newDay = new Part2(input2)
  const result = newDay.solve();
  
  expect(result).toBe("420120")
})



describe('filterGears', () => {
  test('Should return the good gears', () => {
    const expectedResult :Gears = [
      {
        adjacentNumbers: [-1, -1],
        index: 3,
        lineIndex: 1,
      },
      {
        adjacentNumbers: [-1, -1],
        index: 5,
        lineIndex: 8,
      }
    ] 

    expect(day.filterGears(day.findGears())).toEqual(expectedResult)
  })
  
})