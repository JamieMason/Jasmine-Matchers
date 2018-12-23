import { toBeNonEmptyString } from './toBeNonEmptyString';

export type ToStartWith = (
  subString: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toStartWith: ToStartWith;
    }
  }
}

export const toStartWith: ToStartWith = (subString, actual) =>
  toBeNonEmptyString(actual) &&
  toBeNonEmptyString(subString) &&
  actual.slice(0, subString.length) === subString;
