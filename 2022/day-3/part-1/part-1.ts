import { Part } from '../../../utils/part'

const LOWERCASE_A_VALUE = 'a'.charCodeAt(0)
const UPPERCASE_A_VALUE = 'A'.charCodeAt(0)
const UPPERCASE_Z_VALUE = 'Z'.charCodeAt(0)

export class Part1 implements Part {
  inputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs;
  };

  findWrongPlaceItem = (leftCompartment: string, rightCompartment: string): string => {
    const leftItems: string[] = [];
    const rightItems: string[] = [];
  
    for (let i = 0; i < leftCompartment.length; i++) {
      const leftItem = leftCompartment[i];
      if (rightItems.includes(leftItem)) return leftItem;
      leftItems.push(leftItem);
  
      const rightItem = rightCompartment[i];
      if (leftItems.includes(rightItem)) return rightItem;
      rightItems.push(rightItem);
    }
    return ''
  }
  
  getItemValue = (item: string): number => {
    const itemValue = item.charCodeAt(0);
  
    if (itemValue >= UPPERCASE_A_VALUE && itemValue <= UPPERCASE_Z_VALUE) {
      return 27 + (itemValue - UPPERCASE_A_VALUE)
    }
    return 1 + (itemValue - LOWERCASE_A_VALUE)
  }

  solve() : string {
    let total = 0;
    
    this.inputs.forEach(rucksacks => {
      const itemsLength = rucksacks.length;
      const leftCompartment = rucksacks.substring(0, itemsLength / 2)
      const rightCompartment = rucksacks.substring(itemsLength / 2)
  
      const wrongPlaceItem = this.findWrongPlaceItem(leftCompartment, rightCompartment);
      total += this.getItemValue(wrongPlaceItem);
    })
    return `${total}`;
  };
}