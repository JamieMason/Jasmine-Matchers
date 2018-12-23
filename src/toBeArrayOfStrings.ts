import { every } from './lib/every';
import { toBeArray } from './toBeArray';
import { toBeString } from './toBeString';

export type ToBeArrayOfStrings = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeArrayOfStrings: ToBeArrayOfStrings;
    }
  }
}

export const toBeArrayOfStrings: ToBeArrayOfStrings = (actual) =>
  toBeArray(actual) && every(actual, toBeString);
