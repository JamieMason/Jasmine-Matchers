import { toBeNumber } from './toBeNumber';

export const toBeGreaterThanOrEqualTo = (otherNumber, actual) =>
  toBeNumber(actual) && actual >= otherNumber;
