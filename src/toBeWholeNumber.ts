import { toBeNumber } from './toBeNumber';

export const toBeWholeNumber = (actual) =>
  toBeNumber(actual) && (actual === 0 || actual % 1 === 0);
