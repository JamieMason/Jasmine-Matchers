import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeString } from './toBeString';
export const toBeArrayOfStrings = (actual) =>
  toBeArray(actual) && every(actual, toBeString);
