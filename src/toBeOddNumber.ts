import { toBeNumber } from './toBeNumber';
export const toBeOddNumber = (actual) => toBeNumber(actual) && actual % 2 !== 0;
