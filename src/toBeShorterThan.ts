import { toBeString } from './toBeString';

export const toBeShorterThan = (otherString, actual) =>
  toBeString(actual) &&
  toBeString(otherString) &&
  actual.length < otherString.length;
