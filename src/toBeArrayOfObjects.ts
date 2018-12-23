import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeObject } from './toBeObject';
export const toBeArrayOfObjects = (actual) =>
  toBeArray(actual) && every(actual, toBeObject);
