import { toBeArrayOfSize } from './toBeArrayOfSize';
import { toBeObject } from './toBeObject';

export const toHaveArrayOfSize = (key, size, actual) =>
  toBeObject(actual) && toBeArrayOfSize(size, actual[key]);
