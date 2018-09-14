import calculate from './src/calculate';
import display from './src/display';
import { isNumber, compose, toNumber, filterNumber } from './src/lib';

export default {
  ...calculate,
  ...display,
  isNumber,
  compose,
  toNumber,
  filterNumber
};
