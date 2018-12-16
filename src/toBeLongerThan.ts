import toBeString from './toBeString';

export default (otherString, actual) =>
  toBeString(actual) &&
  toBeString(otherString) &&
  actual.length > otherString.length;
