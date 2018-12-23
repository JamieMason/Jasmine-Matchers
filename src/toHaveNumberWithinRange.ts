import { toBeObject } from './toBeObject';
import { toBeWithinRange } from './toBeWithinRange';

export const toHaveNumberWithinRange = (key, floor, ceiling, actual) =>
  toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
