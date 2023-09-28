function tree<T>(values: Array<T>, target: unknown, intitalValue: unknown) {
  if (!Array.isArray(values)) {
    values = Object.values(values);
  }

  const stack = [...values];
  const result = [];

  while (stack.length) {
    const shift = stack.shift();

    if (typeof shift === 'array') {
      stack.push(...shift);
    }

    if (shift[key] === target) {
      result.push(shift);
    }
  }

  return result;
}
