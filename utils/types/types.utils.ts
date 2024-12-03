export const stringToNumber = (str: string): number => {
  return parseInt(str);
};

export const stringsToNumbers = (strs: string[]): number[] => {
  return strs.map((str) => stringToNumber(str));
};
