import { toBeString } from './toBeString';

export const toBeLongerThan = (otherString, actual) =>
  toBeString(actual) &&
  toBeString(otherString) &&
  actual.length > otherString.length;
