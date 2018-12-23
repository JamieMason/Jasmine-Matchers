import { toBeArray } from './toBeArray';
export const toBeArrayOfSize = (size, actual) =>
  toBeArray(actual) && actual.length === size;
