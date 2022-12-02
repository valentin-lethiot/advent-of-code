const fs = require("fs")
  
export const formatInputs = (fileName: string): string[] => {
  const inputs = fs.readFileSync(fileName).toString();
  return inputs.split('\n')
}