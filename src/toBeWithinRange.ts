import { toBeNumber } from './toBeNumber';

export const toBeWithinRange = (floor, ceiling, actual) =>
  toBeNumber(actual) && actual >= floor && actual <= ceiling;
