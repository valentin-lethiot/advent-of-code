type T = any;

export const hasDuplicates = (arr: T[]): boolean => {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

  return duplicates.length > 0;
};

export const sortByAscendingOrder = (arr: T[]): T[] => {
  return arr.sort((a, b) => a - b);
};

export const sortByDescendingOrder = (arr: T[]): T[] => {
  return arr.sort((a, b) => b - a);
};
