import { toBeString } from './toBeString';
export const toBeWhitespace = (actual) =>
  toBeString(actual) && actual.search(/\S/) === -1;
