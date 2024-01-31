export function once<P extends any[], T>(func: (...args: P) => Promise<T>) {
  let cached: Promise<T> | undefined;
  return async (...params: P): Promise<T> => {
    if (cached) {
      return cached;
    }
    // cached = func(...params);
    cached = func(...params).finally(() => {
      cached = undefined;
    });
    return cached;
  };
}
