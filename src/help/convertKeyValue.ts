export function convertToKeyValue(array) {
  const myObject = {};

  for (const item of array) {
    myObject[item.id] = item;
  }

  return myObject;
}
