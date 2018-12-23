import { toBeNumber } from './toBeNumber';

export type ToBeWholeNumber = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeWholeNumber: ToBeWholeNumber;
    }
  }
}

export const toBeWholeNumber: ToBeWholeNumber = (actual) =>
  toBeNumber(actual) && (actual === 0 || actual % 1 === 0);
