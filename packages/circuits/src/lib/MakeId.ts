export function makeId (length: number = 5) {
  let result = '';
  const characters = '0123456789ABCDEF';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
