import { Part } from '../../../utils/part'

const rules = {
  red: 12,
  green: 13,
  blue: 14,
}

export type Game = {
  id: number,
  sets: Set[]
}

export type Set = {
  red: number,
  green: number,
  blue: number
}

export class Part2 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() : string {
    const games = this.parseGames();

    return String(this.calculateSumOfCubes(games))
  };

  parseGames(): Game[] {
    const games :Game[] = []
    this.inputs.forEach((game) => {
      games.push(this.parseGame(game))
    })
    return games;
  }

  parseGame(game: string): Game {
    let returnedGame: Game = {
      id: -1,
      sets: []
    }

    const firstSplit = game.split(':');
    returnedGame.id = parseInt(firstSplit[0].split(' ')[1])

    const sets = firstSplit[1].split(';')
    sets.forEach((set) => {
      const formattedSet : Set = {
        red : 0,
        green : 0,
        blue : 0,
      }

      const colors = set.split(',')
      colors.forEach((color) => {
        const values = color.split(' ')
        values.shift()
        formattedSet[values[1]] = parseInt(values[0])
      })
      returnedGame.sets.push(formattedSet)
    })

    return returnedGame;
  }

  calculateSumOfCubes(games: Game[]): number {
    return games.reduce((acc, game) => {
      const minimumSet = this.getMinimumSetOfCubes(game);
      return acc += this.getPowerOfSet(minimumSet)
    }
    , 0)
  }

  getMinimumSetOfCubes(game: Game): Set {
    const returnedSet: Set = {
      red: 0,
      green: 0,
      blue: 0
    }

    game.sets.forEach(set => {
      returnedSet.red = set.red > returnedSet.red ? set.red : returnedSet.red
      returnedSet.green = set.green > returnedSet.green ? set.green : returnedSet.green
      returnedSet.blue = set.blue > returnedSet.blue ? set.blue : returnedSet.blue
    })

    return returnedSet
  }

  getPowerOfSet(set: Set): number {
    return set.red * set.green * set.blue
  }
}