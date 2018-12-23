import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeNumber } from './toBeNumber';
export const toBeArrayOfNumbers = (actual) =>
  toBeArray(actual) && every(actual, toBeNumber);
