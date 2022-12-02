import { formatInputs } from "../../libs/fileReader";
const inputs = formatInputs("./inputs.txt")

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const opponentHandIndex = 0
const myHandIndex = 2

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


const calculateRoundScore = (round: string): number => {
  const opponentHand = round[opponentHandIndex];
  const myHand = round[myHandIndex];

  const opponentHandValue = handValues[opponentHand];
  const myHandValue = handValues[myHand];

  return getWinnerScore(opponentHandValue, myHandValue) + shapeValues[myHandValue]
}




let totalScore = 0
inputs.forEach(round => {
  totalScore += calculateRoundScore(round)
})


console.log('Your score is ', totalScore, ' points.')