function promiseAll(values: unknown | []): Promise<[] | unknown[]> {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(values)) {
      return reject(new Error('TypeError: values must be an array'));
    }

    const result: unknown[] = [];

    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i])
        .then((res) => {
          result.push(res);
          if (result.length === values.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}
