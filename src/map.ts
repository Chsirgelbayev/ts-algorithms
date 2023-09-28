function map<T>(
  arr: Array<T>,
  fn: (item: T, index: number, arr: Array<T>) => T,
) {
  return arr.reduce((acc, value, index, arr) => {
    if (fn(value, index, arr) !== undefined) {
      acc.push(fn(value, index, arr));
    }

    return acc;
  }, [] as Array<T>);
}
