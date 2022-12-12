import { formatInputs } from "../../libs/fileReader";

const inputs = formatInputs('./inputs.txt');

let total = 0;

inputs.forEach(pair => {
  const firstElf = pair.split(',')[0]
  const secondElf = pair.split(',')[1]
  
  const firstRange = firstElf.split('-')
  const secondRange = secondElf.split('-')

  if ((firstRange[0] >= secondRange[0] && firstRange[1] <= secondRange[1]) ||
  (secondRange[0] >= firstRange[0] && secondRange[1] <= firstRange[1])  
  ) {
    console.log(typeof secondRange[1])
    console.log(pair, ' : ', (firstRange[0] >= secondRange[0] && firstRange[1] <= secondRange[1]) , ' ? ', (secondRange[0] >= firstRange[0] && secondRange[1] <= firstRange[1]))
    console.log(secondRange[1], ' <= ', firstRange[1], ' - ', secondRange[1] <= firstRange[1])
    total += 1;
  }
})

console.log('The number of misarranged pair is : ', total);