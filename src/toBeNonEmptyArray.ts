import { is } from './lib/is';

export type ToBeNonEmptyArray = (expectationFailOutput?: any) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeNonEmptyArray: ToBeNonEmptyArray;
    }
  }
}

export const toBeNonEmptyArray: ToBeNonEmptyArray = (actual) =>
  is.Array(actual) && actual.length > 0;
