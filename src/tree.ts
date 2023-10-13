function tree<T>(values: Array<T>) {
  if (!Array.isArray(values)) {
    values = Object.values(values);
  }

  const stack = [...values];
  const result = [];

  while (stack.length) {
    const shift = stack.shift();

    if (shift.value !== undefined) {
        result.push(value);
    }

    if (typeof shift === 'object') {
      stack.push(...shift);
    }
  }

  return result;
}
