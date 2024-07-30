export default function hasValuesFromArray(arg, search) {
  for (const i of search) {
    if (!arg.has(i)) {
      return false;
    }
  }

  return true;
}
