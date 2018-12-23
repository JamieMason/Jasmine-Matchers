import { toBeNonEmptyString } from './toBeNonEmptyString';

export type ToEndWith = (
  subString: string,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toEndWith: ToEndWith;
    }
  }
}

export const toEndWith: ToEndWith = (subString, actual) =>
  toBeNonEmptyString(actual) &&
  toBeNonEmptyString(subString) &&
  actual.slice(actual.length - subString.length, actual.length) === subString;
