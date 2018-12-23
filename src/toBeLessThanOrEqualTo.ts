import { toBeNumber } from './toBeNumber';

export const toBeLessThanOrEqualTo = (otherNumber, actual) =>
  toBeNumber(actual) && actual <= otherNumber;
