import { Part } from '../../../utils/part'

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const SHOULD_WIN = 'Z';
const SHOULD_LOSE = 'X'
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

export class Part2 implements Part {
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

  checkWin = (opponentHandValue: string): number => {
    let score = 6;
    if (opponentHandValue === ROCK) return score + shapeValues[PAPER]
    if (opponentHandValue === PAPER) return score + shapeValues[SCISSORS]
    return score + shapeValues[ROCK]
  }
  
  checkDraw = (opponentHandValue: string): number => {
    let score = 3;
    if (opponentHandValue === ROCK) return score + shapeValues[ROCK]
    if (opponentHandValue === PAPER) return score + shapeValues[PAPER]
    return score + shapeValues[SCISSORS]
  }
  
  checkLoose = (opponentHandValue: string): number => {
    if (opponentHandValue === ROCK) return shapeValues[SCISSORS]
    if (opponentHandValue === PAPER) return shapeValues[ROCK]
    return shapeValues[PAPER]
  }
  
  calculateRoundScore = (round: string): number => {
    const opponentHand = round[opponentHandIndex];
    const opponentHandValue = handValues[opponentHand];
    const myHand = round[myHandIndex];
  
    if (myHand === SHOULD_WIN) return this.checkWin(opponentHandValue);
    if (myHand === SHOULD_LOSE) return this.checkLoose(opponentHandValue);
    return this.checkDraw(opponentHandValue);
  }
}