import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeNumber } from './toBeNumber';

export type ToBeArrayOfNumbers = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeArrayOfNumbers: ToBeArrayOfNumbers;
    }
  }
}

export const toBeArrayOfNumbers: ToBeArrayOfNumbers = (actual) =>
  toBeArray(actual) && every(actual, toBeNumber);
