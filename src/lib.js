export const compose = (...fns) => value =>
  [...fns].reverse().reduce((prev, fn) => fn(prev), value);

export const toNumber = num => parseFloat(num);
export const isNumber = num => !isNaN(toNumber(num)) && isFinite(toNumber(num));
export const overLimit = (num, limit) => toNumber(num) === limit;

export const filterNumber = dataSet =>
  Array.isArray(dataSet) ? dataSet.filter(num => isNumber(num)) : [];
