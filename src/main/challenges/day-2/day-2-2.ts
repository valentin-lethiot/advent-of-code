import { formatInputs } from "../../libs/fileReader";
const inputs = formatInputs("./inputs.txt")

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const SHOULD_WIN = 'Z';
const SOULD_DRAW = 'Y';
const SHOULD_LOSE = 'X'

const opponentHandIndex = 0
const myHandIndex = 2

interface IHandValue {
  [key: string]: string;
}
const handValues :IHandValue = {
  'A': ROCK,
  'B': PAPER,
  'C': SCISSORS,
}

interface IShapeValue {
  [key: string]: number;
}
const shapeValues: IShapeValue = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
}







