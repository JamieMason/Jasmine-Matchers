import { toBeAfter } from './toBeAfter';
import { toBeObject } from './toBeObject';

export const toHaveDateAfter = (key, date, actual) =>
  toBeObject(actual) && toBeAfter(date, actual[key]);
