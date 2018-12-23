import { toBeNumber } from './toBeNumber';

export type ToBeOddNumber = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeOddNumber: ToBeOddNumber;
    }
  }
}

export const toBeOddNumber: ToBeOddNumber = (actual) =>
  toBeNumber(actual) && actual % 2 !== 0;
