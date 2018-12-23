import { toBeNumber } from './toBeNumber';
export const toBeEvenNumber = (actual) =>
  toBeNumber(actual) && actual % 2 === 0;
