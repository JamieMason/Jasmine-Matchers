import { toBeString } from './toBeString';

export const toBeSameLengthAs = (otherString, actual) =>
  toBeString(actual) &&
  toBeString(otherString) &&
  actual.length === otherString.length;
