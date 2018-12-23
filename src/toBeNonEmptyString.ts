import { toBeString } from './toBeString';

export type ToBeNonEmptyString = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeNonEmptyString: ToBeNonEmptyString;
    }
  }
}

export const toBeNonEmptyString: ToBeNonEmptyString = (actual) =>
  toBeString(actual) && actual.length > 0;
