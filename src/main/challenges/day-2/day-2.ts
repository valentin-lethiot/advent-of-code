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

// PART 1
const checkRock = (opponentHandValue: string): number => {
  if (opponentHandValue === ROCK) return 3
  if (opponentHandValue === PAPER) return 0
  return 6
}
const checkPaper = (opponentHandValue: string): number => {
  if (opponentHandValue === PAPER) return 3
  if (opponentHandValue === SCISSORS) return 0
  return 6
}
const checkScissors = (opponentHandValue: string): number => {
  if (opponentHandValue === SCISSORS) return 3
  if (opponentHandValue === ROCK) return 0
  return 6
}

const getWinnerScore = (opponentHandValue: string, myHandValue: string): number => {
  if (myHandValue === ROCK) return checkRock(opponentHandValue)
  if (myHandValue === PAPER) return checkPaper(opponentHandValue)
  return checkScissors(opponentHandValue)
}

const calculateRoundScorePart1 = (round: string): number => {
  const opponentHand = round[opponentHandIndex];
  const myHand = round[myHandIndex];

  const opponentHandValue = handValues[opponentHand];
  const myHandValue = handValues[myHand];

  return getWinnerScore(opponentHandValue, myHandValue) + shapeValues[myHandValue]
}


// PART 2
const checkWin = (opponentHandValue: string): number => {
  let score = 6;
  if (opponentHandValue === ROCK) return score + shapeValues[PAPER]
  if (opponentHandValue === PAPER) return score + shapeValues[SCISSORS]
  return score + shapeValues[ROCK]
}

const checkDraw = (opponentHandValue: string): number => {
  let score = 3;
  if (opponentHandValue === ROCK) return score + shapeValues[ROCK]
  if (opponentHandValue === PAPER) return score + shapeValues[PAPER]
  return score + shapeValues[SCISSORS]
}

const checkLoose = (opponentHandValue: string): number => {
  if (opponentHandValue === ROCK) return shapeValues[SCISSORS]
  if (opponentHandValue === PAPER) return shapeValues[ROCK]
  return shapeValues[PAPER]
}

const calculateRoundScorePart2 = (round: string): number => {
  const opponentHand = round[opponentHandIndex];
  const opponentHandValue = handValues[opponentHand];
  const myHand = round[myHandIndex];

  if (myHand === SHOULD_WIN) return checkWin(opponentHandValue);
  if (myHand === SHOULD_LOSE) return checkLoose(opponentHandValue);
  return checkDraw(opponentHandValue);
}


export class Day2 implements Day {
  inputs: string[]
  name: string

  constructor(name: string, inputs: string[]) {
    this.inputs = inputs;
    this.name = name;
  }
  
  solvePart1 = (): string => {
    let totalScore = 0
    this.inputs.forEach(round => {
      totalScore += calculateRoundScorePart1(round)
    })
    
    return `${totalScore}` 
  };
    
  solvePart2 = (): string => {
    let totalScore = 0
    this.inputs.forEach(round => {
      totalScore += calculateRoundScorePart2(round)
    })
    
    return `${totalScore}` 
  };
}