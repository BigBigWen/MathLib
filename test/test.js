import MathLib from '../index';
const {
  isNumber,
  compose,
  toNumber,
  filterNumber,
  add,
  minus,
  multiply,
  divide,
  percent,
  sum,
  average,
  monthOnMonth,
  abs,
  sqrt,
  max,
  min,
  display,
  localeDisplay
} = MathLib;

test('null toNumber is NaN', () => {
  expect(toNumber(null)).toBe(NaN);
});

test('undefined toNumber is NaN', () => {
  expect(toNumber(undefined)).toBe(NaN);
});
