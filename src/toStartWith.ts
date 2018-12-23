import { toBeNonEmptyString } from './toBeNonEmptyString';

export const toStartWith = (subString, actual) =>
  toBeNonEmptyString(actual) &&
  toBeNonEmptyString(subString) &&
  actual.slice(0, subString.length) === subString;
