import { toBeNonEmptyString } from './toBeNonEmptyString';

export const toEndWith = (subString, actual) =>
  toBeNonEmptyString(actual) &&
  toBeNonEmptyString(subString) &&
  actual.slice(actual.length - subString.length, actual.length) === subString;
