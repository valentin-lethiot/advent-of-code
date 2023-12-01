import fs from "fs";
  
export const formatInputs = (fileName: string): string[] => {
  try {
    const inputs = fs.readFileSync(fileName).toString();
    return inputs.split('\n')
  } catch (e) {
    console.log(e)
  }
}