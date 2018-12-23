import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeBoolean } from './toBeBoolean';
export const toBeArrayOfBooleans = (actual) =>
  toBeArray(actual) && every(actual, toBeBoolean);
