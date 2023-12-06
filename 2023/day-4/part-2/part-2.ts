import { Part } from '../../../utils/part'

type Card = {
  cardIndex: number,
  winningNumbers: string[],
  cardNumbers: string[],
}

type Cards = Card[]

export class Part2 implements Part {
  inputs: string[]
  cards: Cards
  result: Cards
  
  constructor(inputs: string[]) {
    this.inputs = inputs;
    this.cards = []
    this.result = []
  };

  solve() : string {
    this.parseCards()
    this.getCardsScore()
    return String(this.result.length)
  };

  parseCards() {
    this.inputs.forEach((card, index) => this.parseCard(card, index))
  }

  parseCard(cardLine: string, lineIndex: number) {
    const line = cardLine.slice(7)
    const winningNumbers = line.split('|')[0].split(' ')
    const cardNumbers = line.split('|')[1].split(' ')

    const card = {
      cardIndex: lineIndex,
      winningNumbers: winningNumbers.filter(number => number),
      cardNumbers: cardNumbers.filter(number => number)
    }
    this.cards.push(card)
    this.result.push(card)
  }

  getCardByIndex(index: number): Card {
    return this.cards.find(card => card.cardIndex === index)
  }

  getCardsScore() {
    for (let c = 0; c < this.result.length; c++) {
      const card = this.result[c]
      const numberOfMatch = this.getCardScore(card)
      for (let i = 1; i <= numberOfMatch; i++) {
        this.result.push(this.getCardByIndex(card.cardIndex + i))
      }
    }
  }

  getCardScore(card: Card): number {
    let score = 0;
    card.cardNumbers.forEach(number => {
      if(card.winningNumbers.includes(number)) {
        score++
      }
    })
    return score
  }
}