import { Part } from '../../../utils/part'

type Card = {
  winningNumbers: string[],
  cardNumbers: string[],
}

type Cards = Card[]

export class Part1 implements Part {
  inputs: string[]
  cards: Cards
  

  constructor(inputs: string[]) {
    this.inputs = inputs;
    this.cards = []
  };

  solve() : string {
    this.parseCards()
    return String(this.getCardsScore())
  };

  parseCards() {
    this.inputs.forEach(card => this.parseCard(card))
  }

  parseCard(cardLine: string) {
    const line = cardLine.slice(7)
    const winningNumbers = line.split('|')[0].split(' ')
    const cardNumbers = line.split('|')[1].split(' ')
    this.cards.push({
      winningNumbers: winningNumbers.filter(number => number),
      cardNumbers: cardNumbers.filter(number => number)
    })
  }

  getCardsScore(): number {
    return this.cards.reduce((acc, card) =>
      acc + this.getCardScore(card),
      0,
    );
  }

  getCardScore(card: Card): number {
    let score = 0;
    card.cardNumbers.forEach(number => {
      if(card.winningNumbers.includes(number)) {
        score = score ? score+score : 1
      }
    })
    return score
  }
}