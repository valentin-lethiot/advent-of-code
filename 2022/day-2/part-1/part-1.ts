import { Part } from '../../../utils/part'

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const opponentHandIndex = 0;
const myHandIndex = 2;

interface IHandValue {
  [key: string]: string;
}
const handValues :IHandValue = {
  'A': ROCK,
  'B': PAPER,
  'C': SCISSORS,

  'X': ROCK,
  'Y': PAPER,
  'Z': SCISSORS
}
interface IShapeValue {
  [key: string]: number;
}
const shapeValues: IShapeValue = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
}

export class Part1 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  solve() : string {
    let totalScore = 0
    this.inputs.forEach(round => {
      totalScore += this.calculateRoundScore(round)
    })
    
    return `${totalScore}` 
  };

  checkRock = (opponentHandValue: string): number => {
    if (opponentHandValue === ROCK) return 3
    if (opponentHandValue === PAPER) return 0
    return 6
  }
  checkPaper = (opponentHandValue: string): number => {
    if (opponentHandValue === PAPER) return 3
    if (opponentHandValue === SCISSORS) return 0
    return 6
  }
  checkScissors = (opponentHandValue: string): number => {
    if (opponentHandValue === SCISSORS) return 3
    if (opponentHandValue === ROCK) return 0
    return 6
  }
  
  getWinnerScore = (opponentHandValue: string, myHandValue: string): number => {
    if (myHandValue === ROCK) return this.checkRock(opponentHandValue)
    if (myHandValue === PAPER) return this.checkPaper(opponentHandValue)
    return this.checkScissors(opponentHandValue)
  }
  
  calculateRoundScore = (round: string): number => {
    const opponentHand = round[opponentHandIndex];
    const myHand = round[myHandIndex];
  
    const opponentHandValue = handValues[opponentHand];
    const myHandValue = handValues[myHand];
  
    return this.getWinnerScore(opponentHandValue, myHandValue) + shapeValues[myHandValue]
  }
}