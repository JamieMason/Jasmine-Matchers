import { toBeString } from './toBeString';
export const toBeNonEmptyString = (actual) =>
  toBeString(actual) && actual.length > 0;
