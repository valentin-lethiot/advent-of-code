
const ASCII0 = '0'.charCodeAt(0)
const ASCII9 = '9'.charCodeAt(0)

export const isNumber = (str: string): boolean => {
  return ASCII0 <= str.charCodeAt(0) && str.charCodeAt(0) <= ASCII9
}