import { toBeBefore } from './toBeBefore';
import { toBeObject } from './toBeObject';

export const toHaveDateBefore = (key, date, actual) =>
  toBeObject(actual) && toBeBefore(date, actual[key]);
