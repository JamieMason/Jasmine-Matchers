import { toBeObject } from './toBeObject';
import { toBeString } from './toBeString';

export const toHaveMember = (key, actual) =>
  toBeString(key) && toBeObject(actual) && key in actual;
