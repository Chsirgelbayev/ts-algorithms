function filter<T>(
  arr: Array<T>,
  fn: (item: T, index: number, arr: Array<T>) => boolean,
) {
  return arr.reduce((acc, value, index, arr) => {
    if (fn(value, index, arr)) {
      acc.push(value);
    }
    return acc;
  }, [] as Array<T>);
}
