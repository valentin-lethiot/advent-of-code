export const findAllOccurrences = (
  pattern: RegExp,
  input: string
): string[] => {
  const regex = new RegExp(pattern, "g");
  return Array.from(input.matchAll(regex), (m) => m[0]);
};

export const findAllOccurrencesWithIndex = (
  pattern: RegExp,
  input: string
): {
  value: string;
  index: number;
}[] => {
  const regex = new RegExp(pattern, "g");

  return Array.from(input.matchAll(regex), (m) => ({
    value: m[0],
    index: m.index,
  }));
};
