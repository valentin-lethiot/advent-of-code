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

export class Part1 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() : string {
    const games = this.parseGames();

    return String(this.checkGames(games))
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

  checkGames(games: Game[]): number {
    return games.reduce((acc, game) => 
      acc += this.isGameValid(game) ? game.id : 0
    , 0)
  }

  isGameValid(game: Game): boolean {
    return !game.sets.some(set => !this.isSetValid(set))
  }

  isSetValid(set: Set): boolean {
    return rules.red >= set.red && rules.green >= set.green && rules.blue >= set.blue
  }
}